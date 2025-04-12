import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

const createAccessToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
const createRefreshToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"})
}

const LoginUser = async (req,res) => {
    try {
        const {password,email,name} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"User does't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.json({success:false,message:"Invalid Credientials"})
        }
        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id);
        res.cookie("accessToken", accessToken, {
            httpOnly: false,  // ✅ Allow frontend to access it
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",  // ✅ Allows cross-site requests if the user interacts
            maxAge: 1 * 24 * 60 * 60 * 1000, // 15 minutes
          });
          
      
          // Send response (no accessToken in JSON, it's in the cookie)
          
          res.cookie("refreshToken", refreshToken, {
              httpOnly: false,
              secure: process.env.NODE_ENV === "production", // Secure in production
              sameSite: "Lax",
              maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });
            res.json({ success: true, message: "Logged in", accessToken,name,email});
    } catch (error) {
        console.error("Err in LogIN");
        res.json({success:false,message:"Login IN Err"})
    }
}
const RegisterUser = async (req,res) => {
    try {
        const {email,password,name} = req.body;
    const user = await userModel.findOne({email});
    if (!email) {
        return res.json({success:false,message:"Email Required"});
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    if (user) {
        return res.json({success:false,message:"User already Exist"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const newUser = new userModel({
        name,email,password:hashedPassword
    })


    await newUser.save();

    const accessToken = createAccessToken(newUser._id);
    const refreshToken = createRefreshToken(newUser._id);

    // Store refreshToken in HTTP-only cookies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    // Store accessToken in HTTP-only cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 15 minutes
    });

    return res.status(201).json({ success: true, message: "User registered successfully",accessToken,name,email,password});
    } catch (error) {
        console.error("Error in register:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const LogoutUser = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Ensure this matches how the cookie was set
            sameSite: "Strict",
            path: "/",
        });
        return res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in Logout:", error);
        return res.status(500).json({ success: false, message: "Error in Logout" });
    }
};

export {LoginUser,RegisterUser,LogoutUser}