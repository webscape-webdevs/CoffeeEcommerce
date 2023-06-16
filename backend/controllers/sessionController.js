const UserSchema = require("../schemas/userSchema");
const PasswordResetOtpSchema = require("../schemas/passwordResetOtp");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sessionController = {
  getSession: async (req, res, next) => {
    try {
      const user = req.user;
      res.json({ user });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  register: async (req, res, next) => {
    try {
      const { username, email, password, contactNumber } = req.body;

      if (!email || !password) {
        res.status(400).send("Please Add ALL Fields");
      }

      const userExists = await UserSchema.findOne({ $or: [{ email: email }, { contactNumber: contactNumber }] }).lean();

      if (userExists) {
        res.status(400).send("User Already Exists");
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let userCount = await UserSchema.count();

        userCount = userCount + 1;

        let userId = `CUST#${userCount}`;

        const userCreated = await UserSchema.create({ userId, email, password: hashedPassword, username, contactNumber });

        if (userCreated) {
          const accessToken = jwt.sign({ id: userCreated._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
          res.cookie("jwt", accessToken, { httpOnly: true, maxAge: process.env.SESSION_EXPIRE * 60 * 60 * 1000 });
          const user = userCreated;
          res.status(201).json({ user });
        } else {
          res.status(400).send("Invalid User Data");
        }
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await UserSchema.findOne({ email: email });

      if (user && (await bcrypt.compare(password, user.password))) {
        //Create JWT
        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("jwt", accessToken, { httpOnly: true, maxAge: process.env.SESSION_EXPIRE * 60 * 60 * 1000 });
        res.status(200).json({ user });
      } else {
        res.status(401).send("Email or Password is Incorrect");
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  logout: async (req, res, next) => {
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt) {
        return res.sendStatus(204); //No Content
      }

      res.clearCookie("jwt", { httpOnly: true });
      res.sendStatus(204);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  update: async (req, res, next) => {
    try {
      const image = req.file;
      if (image) {
        const filePath = `/${image.destination}/${image.filename}`;

        await UserSchema.findOneAndUpdate({ _id: req.user._id }, { $set: { ...req.body, profilePic: filePath } });
      } else {
        await UserSchema.findOneAndUpdate({ _id: req.user._id }, { $set: { ...req.body } });
      }

      res.sendStatus(204);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  sendOtp: async (req, res, next) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          ok: false,
          msg: "Please Enter Valid Email Id",
        });
      }

      let user = await UserSchema.findOne({ email: email }).lean();

      if (user) {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

        await PasswordResetOtpSchema.create({ email: email, otp: otp });

        let details = {
          from: process.env.EMAIL,
          to: email,
          subject: "Password Reset Otp",
          html: `<p>Enter OTP: <b>${otp}</b> to verify your email address and complete password reset process.</p>`,
        };

        mailTransporter.sendMail(details);

        res.status(200).json({
          ok: true,
          msg: "Otp sent to Email Id",
        });
      } else {
        res.status(400).json({
          ok: false,
          msg: "Email Id Dosen't Exist",
        });
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      const { email, otp, password } = req.body;

      if (!otp) {
        return res.status(400).json({
          ok: false,
          msg: "Please Enter Valid Otp",
        });
      }

      if (!password) {
        return res.status(400).json({
          ok: false,
          msg: "Please Enter Valid Password",
        });
      }

      if (!email) {
        return res.status(400).json({
          ok: false,
          msg: "Please Enter Valid Email Id",
        });
      }

      let optDetails = await PasswordResetOtpSchema.findOne({ email: email }).lean();

      if (optDetails) {
        if (optDetails.otp.toString() === otp.toString()) {
          // encrypt password
          const salt = bcrypt.genSaltSync();
          let newPassword = bcrypt.hashSync(password, salt);

          await UserSchema.findOneAndUpdate({ email: email }, { $set: { password: newPassword } });

          await PasswordResetOtpSchema.findOneAndDelete({ email: email });

          res.status(200).json({
            ok: true,
            msg: "Password Reset Successful!!!",
          });
        } else {
          res.status(400).json({
            ok: false,
            msg: "Invalid Otp",
          });
        }
      } else {
        res.status(400).json({
          ok: false,
          msg: "Invalid Email Id",
        });
      }
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = sessionController;
