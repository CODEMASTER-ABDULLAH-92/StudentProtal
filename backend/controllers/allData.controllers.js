import detailsModels from "../models/AllDetails.js";

const addDetails = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      FatherName,
      religion,
      MobileNumber,
      currentInstitueType,
      DateOfAddmission,
      studentRegistrationNumber,
      mainDegree,
      universityName,
      degreeTitle,
      dateOfBirth,
      domicle,
      familyIncome,
      passportNumber,
      country,
      province,
      district,
      city,
      fullAddress,
      countryP,
      provinceP,
      districtP,
      cityP,
      fullAddressP,
      schoolProgramTitle,
      schoolName,
      schoolSubDisciline,
      schoolObtainedMarks,
      schoolTotalsMarks,
      schoolPerecentage,
      collegeProgramTitle,
      collegeName,
      collegeSubDisciline,
      collegeObtainedMarks,
      collegeTotalsMarks,
      collegePerecentage,
      universityEducationType,
      currentSemester,
      obtainedCGPA,
      totalCGPA,
      uniPerecentage,
    } = req.body;
    // Handle missing images
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Extract file paths
    const userImage = req.files["userImage"]
      ? req.files["userImage"][0].path
      : null;
    const cnicFront = req.files["cnicFront"]
      ? req.files["cnicFront"][0].path
      : null;
    const cnicBack = req.files["cnicBack"]
      ? req.files["cnicBack"][0].path
      : null;
    const cnicUndergraduteTranscript = req.files["cnicUndergraduteTranscript"]
      ? req.files["cnicUndergraduteTranscript"][0].path
      : null;
    const cnicAffividat = req.files["cnicAffividat"]
      ? req.files["cnicAffividat"][0].path
      : null;
    const cnicDomicle = req.files["cnicDomicle"]
      ? req.files["cnicDomicle"][0].path
      : null;

    const newData = new detailsModels({
      cnicAffividat,
      cnicDomicle,
      cnicUndergraduteTranscript,
      FirstName,
      LastName,
      FatherName,
      religion,
      MobileNumber,
      currentInstitueType,
      DateOfAddmission,
      studentRegistrationNumber,
      mainDegree,
      universityName,
      degreeTitle,
      dateOfBirth,
      domicle,
      familyIncome,
      passportNumber,
      country,
      province,
      district,
      city,
      fullAddress,
      countryP,
      provinceP,
      districtP,
      cityP,
      fullAddressP,
      schoolProgramTitle,
      schoolName,
      schoolSubDisciline,
      schoolObtainedMarks,
      schoolTotalsMarks,
      schoolPerecentage,
      collegeProgramTitle,
      collegeName,
      collegeSubDisciline,
      collegeObtainedMarks,
      collegeTotalsMarks,
      collegePerecentage,
      universityEducationType,
      currentSemester,
      obtainedCGPA,
      totalCGPA,
      uniPerecentage,
      userImage,
      cnicFront,
      cnicBack,
    });

    await newData.save();
    res.json({
      success: true,
      message: "Data added successfully",
      images: {
        userImage,
        cnicFront,
        cnicBack,
        cnicAffividat,
        cnicUndergraduteTranscript,
        cnicDomicle,
      },
    });
  } catch (error) {
    console.error("Error in Adding: ", error);
    res.status(500).json({ success: false, message: "Error in adding data" });
  }
};

const removeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await detailsModels.findByIdAndDelete(id);
    res.json({ success: true, message: "Successfully deleted: ", post });
  } catch (error) {
    console.error("Err in removing");
    res.json({ success: false, message: "Err in Removing" });
  }
};
const listDetails = async (req, res) => {
  try {
    const allPosts = await detailsModels.find({});
    res.json({ success: true, message: "Listing all data", allPosts });
  } catch (error) {
    console.error("Err in Listing");
    res.json({ success: false, message: "Err in Listing" });
  }
};
const updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      FirstName,
      LastName,
      FatherName,
      religion,
      MobileNumber,
      currentInstitueType,
      DateOfAddmission,
      studentRegistrationNumber,
      mainDegree,
      universityName,
      degreeTitle,
      dateOfBirth,
      domicle,
      familyIncome,
      passportNumber,
      country,
      province,
      district,
      city,
      fullAddress,
      countryP,
      provinceP,
      districtP,
      cityP,
      fullAddressP,
      schoolProgramTitle,
      schoolName,
      schoolSubDisciline,
      schoolObtainedMarks,
      schoolTotalsMarks,
      schoolPerecentage,
      collegeProgramTitle,
      collegeName,
      collegeSubDisciline,
      collegeObtainedMarks,
      collegeTotalsMarks,
      collegePerecentage,
      universityEducationType,
      currentSemester,
      obtainedCGPA,
      totalCGPA,
      uniPerecentage,
    } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Extract file paths
    const userImage = req.files["userImage"]
      ? req.files["userImage"][0].path
      : null;
    const cnicFront = req.files["cnicFront"]
      ? req.files["cnicFront"][0].path
      : null;
    const cnicBack = req.files["cnicBack"]
      ? req.files["cnicBack"][0].path
      : null;
    const cnicUndergraduteTranscript = req.files["cnicUndergraduteTranscript"]
      ? req.files["cnicUndergraduteTranscript"][0].path
      : null;
    const cnicAffividat = req.files["cnicAffividat"]
      ? req.files["cnicAffividat"][0].path
      : null;
    const cnicDomicle = req.files["cnicDomicle"]
      ? req.files["cnicDomicle"][0].path
      : null;

    const updatePost = {
      cnicAffividat,
      cnicDomicle,
      cnicUndergraduteTranscript,
      FirstName,
      LastName,
      FatherName,
      religion,
      MobileNumber,
      currentInstitueType,
      DateOfAddmission,
      studentRegistrationNumber,
      mainDegree,
      universityName,
      degreeTitle,
      dateOfBirth,
      domicle,
      familyIncome,
      passportNumber,
      country,
      province,
      district,
      city,
      fullAddress,
      countryP,
      provinceP,
      districtP,
      cityP,
      fullAddressP,
      schoolProgramTitle,
      schoolName,
      schoolSubDisciline,
      schoolObtainedMarks,
      schoolTotalsMarks,
      schoolPerecentage,
      collegeProgramTitle,
      collegeName,
      collegeSubDisciline,
      collegeObtainedMarks,
      collegeTotalsMarks,
      collegePerecentage,
      universityEducationType,
      currentSemester,
      obtainedCGPA,
      totalCGPA,
      uniPerecentage,
      userImage,
      cnicFront,
      cnicBack,
      _id: id,
    };
    
    await detailsModels.findByIdAndUpdate(id, updatePost, { new: true });
    res.json({ success: true, message: "Updated", updatePost });
  } catch (error) {
    console.error("Err in Updateing", error);
    res.json({ success: false, message: "Err in Updating" });
  }
};

export { addDetails, removeDetails, updateDetails, listDetails };
