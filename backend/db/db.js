const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://localhost:27017/gym-user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection sucessfully");
  })
  .catch((e) => {
    console.log(e);
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email address");
      }
    },
  },
  message: {
    type: String,
    required: true,
    minLength: 8,
  },
});



const Gymuser = mongoose.model("Gymuser" ,userSchema);

module.exports = Gymuser;