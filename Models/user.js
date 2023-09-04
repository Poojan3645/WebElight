const mongoose  = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required : true,
    },  
    LastName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    }
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
    console.log("ho form inside");
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }
    next();
  });

// userSchema.method.generateAuthToken = function generateAuthToken() {
//   return jwt.sign({ _id: this._id}, process.env.JWT_SECRET,{ expiresIn:'30d'}); //expires in
// }

// userSchema.methods.verifyUserToken = async function verifyUserToken(req) {
//   const authHeader = req.headers.authorization;
//   const verifyToken = jwt.verify(authHeader)
//   return this.constructor.findOne({ _id: verifyToken._id });
// }

const User = new mongoose.model("User", userSchema)
module.exports = User;
