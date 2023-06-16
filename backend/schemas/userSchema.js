const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: { type: Schema.Types.String },
  username: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  contactNumber: { type: Schema.Types.Number },
  role: { type: Schema.Types.String, default: "customer", enum: ["customer", "admin"] },
  password: { type: Schema.Types.String },

  profilePic: { type: Schema.Types.String },

  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
