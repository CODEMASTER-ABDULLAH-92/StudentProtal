// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import multer from "multer";
// import { connectCloudinary } from "./cloudinary.js";

// const storage = new CloudinaryStorage({
//     cloudinary: connectCloudinary,
//     params: {
//         folder: "uploads", // Add folder if needed
//         allowed_formats: ["jpg", "png", "jpeg"],
//     }
// });

// const upload = multer({ storage });
// export default upload;


import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "./cloudinary.js"; // ✅ Correctly import the Cloudinary instance

const storage = new CloudinaryStorage({
    cloudinary, // ✅ Pass the instance, not a function
    params: {
        folder: "uploads",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

console.log("Cloudinary Upload Stream:", cloudinary.uploader.upload_stream);

const upload = multer({ storage });

export default upload;
