// import {v2 as cloudinary} from 'cloudinary'

// export const connectCloudinary = async() => {
//     cloudinary.config({
//         api_key:process.env.CLOUDINARY_API_KEY,
//         api_secret:process.env.CLOUDINARY_API_SECRET,
//         cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     })
// }


import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // Ensure .env is loaded

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("✅ Cloudinary Connected:", cloudinary.config());

export default cloudinary; // ✅ Export Cloudinary instance
