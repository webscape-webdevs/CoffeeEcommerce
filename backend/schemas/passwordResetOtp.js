const { Schema, model } = require("mongoose");

const passwordResetOtpSchema = Schema({
  otp: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model("PasswordResetOtp", passwordResetOtpSchema);
