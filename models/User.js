const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  username: String,
  email: String,
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  password: String,
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
