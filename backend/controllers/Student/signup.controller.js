const User = require("../../models/user.model");
const bcrypt = require('bcrypt');


const Signup = async (req, res) => {
  console.log("🚀 Signup endpoint hit!");
  console.log("📝 Request body:", req.body);
  
  const { first_name, email, number, password } = req.body;

  // Validate required fields
  if (!first_name || !email || !number || !password) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ msg: "Missing required fields!" });
  }

  try {
    console.log("🔍 Checking if user exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists");
      return res.status(400).json({ msg: "User Already Exists!" });
    }

    console.log("🔐 Hashing password...");
    const hashPassword = await bcrypt.hash(password, 10);

    console.log("👤 Creating new user...");
    const newUser = new User({
      first_name: first_name,
      email: email,
      number: number,
      password: hashPassword,
      role: "student",
      studentProfile: {
        isApproved: false
      }
    });
    
    console.log("💾 Saving user to database...");
    await newUser.save();
    console.log("✅ User created successfully!");
    return res.json({ msg: "User Created!" });
  } catch (error) {
    console.log("❌ Error in signup controller:", error);
    console.log("❌ Error message:", error.message);
    console.log("❌ Error stack:", error.stack);
    return res.status(500).json({ 
      msg: "Internal Server Error!",
      error: error.message // Include error details for debugging
    });
  }
}

module.exports = Signup;
