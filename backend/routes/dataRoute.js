import express from 'express'
import { addDetails,listDetails,removeDetails,updateDetails } from '../controllers/allData.controllers.js'
import upload from '../config/multer.js';

const dataRouter = express.Router();

dataRouter.post(
    "/addData",
    upload.fields([
      { name: "userImage", maxCount: 1 },  // Profile Image
      { name: "cnicFront", maxCount: 1 },  // CNIC Front Image
      { name: "cnicBack", maxCount: 1 },   // CNIC Back Image
      { name: "cnicUndergraduteTranscript", maxCount: 1 },   // CNIC Back Image
      { name: "cnicAffividat", maxCount: 1 },   // CNIC Back Image
      { name: "cnicDomicle", maxCount: 1 },   // CNIC Back Image
    ]),
    addDetails
  );
dataRouter.get("/getData",listDetails);
dataRouter.delete("/removeData/:id",removeDetails)
dataRouter.put("/updateData/:id",updateDetails);

export default dataRouter;


