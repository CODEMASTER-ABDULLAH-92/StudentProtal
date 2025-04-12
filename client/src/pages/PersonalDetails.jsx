import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { UploadCloud, File, X } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  User,
  UserCircle,
  Users,
  BookOpen,
  Phone,
  School,
  Calendar,
  Bookmark,
  Globe,
  Wallet,
} from "lucide-react";

const PersonalDetail = () => {
  const url = useSelector((state) => state.portal.url);
  const religion = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Sikhism",
    "Buddhism",
    "Other",
  ];
  const institutes = ["School", "High School", "College", "University"];
  const disciplines = [
    "Computer Science",
    "Software Engineering",
    "Information Technology",
    "Data Science",
    "Artificial Intelligence",
    "Cyber Security",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Biomedical Engineering",
    "Business Administration",
    "Finance",
    "Economics",
    "Psychology",
    "Medicine",
    "Pharmacy",
    "Law",
    "Architecture",
    "Physics",
    "Mathematics",
    "Environmental Science",
    "English Literature",
    "Political Science",
  ];
  const universities = [
    "Harvard University",
    "Stanford University",
    "MIT",
    "University of Oxford",
    "University of Cambridge",
    "UC Berkeley",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Tokyo",
    "University of Toronto",
    "University of Melbourne",
    "University of Edinburgh",
  ];
  const degreeTitles = [
    "BSCS - Computer Science",
    "BSSE - Software Engineering",
    "BSIT - Information Technology",
    "BSDS - Data Science",
    "BSEE - Electrical Engineering",
    "BSME - Mechanical Engineering",
    "BSCivil - Civil Engineering",
    "BSBiomed - Biomedical Engineering",
    "BBA - Business Administration",
    "BAF - Accounting & Finance",
    "BSEco - Economics",
    "BAPsy - Psychology",
    "MBBS - Medicine",
    "PharmD - Pharmacy",
    "LLB - Laws",
    "BArch - Architecture",
    "BSPhysics - Physics",
    "BSMath - Mathematics",
    "BSEnv - Environmental Science",
  ];
  const domiciles = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Gujranwala",
    "Sialkot",
    "Bahawalpur",
    "Sargodha",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Okara",
    "Gujrat",
    "Kasur",
    "Vehari",
    "Sahiwal",
    "Jhang",
    "Chakwal",
    "Mianwali",
    "Hafizabad",
    "Khushab",
  ];

  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // State for form data
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    FatherName: "",
    religion: "",
    MobileNumber: "",
    currentInstitueType: "",
    DateOfAddmission: "",
    studentRegistrationNumber: "",
    mainDegree: "",
    universityName: "",
    degreeTitle: "",
    userImage: null,
    dateOfBirth: "",
    domicle: "",
    familyIncome: "",
    passportNumber: "",
  });

  // Handle file changes
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({ ...formData, userImage: selectedFile });
  };

  // Remove selected file
  const removeFile = () => {
    setFile(null);
    setFormData({ ...formData, userImage: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle form input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('FirstName', formData.FirstName);
      formDataToSend.append('LastName', formData.LastName);
      formDataToSend.append('FatherName', formData.FatherName);
      formDataToSend.append('religion', formData.religion);
      formDataToSend.append('MobileNumber', formData.MobileNumber);
      formDataToSend.append('currentInstitueType', formData.currentInstitueType);
      formDataToSend.append('DateOfAddmission', formData.DateOfAddmission);
      formDataToSend.append('studentRegistrationNumber', formData.studentRegistrationNumber);
      formDataToSend.append('mainDegree', formData.mainDegree);
      formDataToSend.append('universityName', formData.universityName);
      formDataToSend.append('degreeTitle', formData.degreeTitle);
      formDataToSend.append('dateOfBirth', formData.dateOfBirth);
      formDataToSend.append('domicle', formData.domicle);
      formDataToSend.append('familyIncome', formData.familyIncome);
      formDataToSend.append('passportNumber', formData.passportNumber);
  
      // Append file if exists
      if (file) {
        formDataToSend.append('userImage', file);
      }
      const response = await axios.post(`${url}/api/data/addData`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Handle successful submission
      console.log('Submission successful:', response.data);
      alert('Data saved successfully!');
  
      // Reset form
      setFormData({
        FirstName: "",
        LastName: "",
        FatherName: "",
        religion: "",
        MobileNumber: "",
        currentInstitueType: "",
        DateOfAddmission: "",
        studentRegistrationNumber: "",
        mainDegree: "",
        universityName: "",
        degreeTitle: "",
        dateOfBirth: "",
        domicle: "",
        familyIncome: "",
        passportNumber: "",
      });
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // More detailed error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        
        // Show server error message if available
        const errorMessage = error.response.data.message || 
                           error.response.data.error || 
                           "Failed to submit form. Please check your inputs.";
        alert(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        alert("No response from server. Please check your connection.");
      } else {
        // Something happened in setting up the request
        console.error("Request setup error:", error.message);
        alert("Error setting up request: " + error.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3 mb-6">
            <UserCircle size={28} />
            Personal Details
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <User size={20} className="text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-800">
                  Basic Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <UserCircle size={16} className="text-gray-500" />
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    onChange={onChangeHandler}
                    value={formData.FirstName}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <UserCircle size={16} className="text-gray-500" />
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    onChange={onChangeHandler}
                    value={formData.LastName}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Last Name"
                  />
                </div>

                {/* Religion */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-500" />
                    Religion <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select Religion</option>
                    {religion.map((religionItem) => (
                      <option key={religionItem} value={religionItem}>
                        {religionItem}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="MobileNumber"
                    value={formData.MobileNumber}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Mobile Number"
                  />
                </div>

                {/* Mobile file upload (hidden on desktop) */}
                <div className="md:hidden block space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    Upload File <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <School size={20} className="text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-800">
                  Academic Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Institute */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <School size={16} className="text-gray-500" />
                    Institute <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="currentInstitueType"
                    value={formData.currentInstitueType}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select Institute</option>
                    {institutes.map((institute) => (
                      <option key={institute} value={institute}>
                        {institute}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date of Admission */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    Date of Admission <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="DateOfAddmission"
                    value={formData.DateOfAddmission}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  />
                </div>

                {/* Student Registration */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Bookmark size={16} className="text-gray-500" />
                    Student Registration <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentRegistrationNumber"
                    value={formData.studentRegistrationNumber}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Registration Number"
                  />
                </div>

                {/* Program Discipline */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-500" />
                    Program Discipline <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="mainDegree"
                    value={formData.mainDegree}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select Discipline</option>
                    {disciplines.map((discipline) => (
                      <option key={discipline} value={discipline}>
                        {discipline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* University */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <School size={16} className="text-gray-500" />
                    University <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="universityName"
                    value={formData.universityName}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select University</option>
                    {universities.map((university) => (
                      <option key={university} value={university}>
                        {university}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Degree Title */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Bookmark size={16} className="text-gray-500" />
                    Degree Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="degreeTitle"
                    value={formData.degreeTitle}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select Degree</option>
                    {degreeTitles.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-500" />
                    Domicle <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="domicle"
                    value={formData.domicle}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition appearance-none"
                  >
                    <option value="">Select Domicle</option>
                    {domiciles.map((domicle) => (
                      <option key={domicle} value={domicle}>
                        {domicle}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Student Registration */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Globe size={16} className="text-gray-500" />
                    Passport Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Passport Number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Bookmark size={16} className="text-gray-500" />
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Date of Birth"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Wallet size={16} className="text-gray-500" />
                    Family Income <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="familyIncome"
                    value={formData.familyIncome}
                    onChange={onChangeHandler}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                    placeholder="Family Income"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
              <Link
                to="/award"
                className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition"
              >
                Previous
              </Link>
              <div className="flex gap-4 justify-center sm:justify-end">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
                >
                  Save
                </button>
                <Link
                  to="/address"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
                >
                  Next
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* File Upload Section (Desktop) */}
      <div className="space-y-2 w-full max-w-[300px] md:block hidden">
        <label className="block text-sm font-medium text-gray-700">
          Upload Document <span className="text-red-500">*</span>
        </label>
        <div
          className={`relative border-2 border-dashed rounded-lg px-6 py-10 flex flex-col items-center justify-center transition-all ${
            file
              ? "border-blue-300 bg-blue-50"
              : "border-gray-300 hover:border-blue-400 bg-gray-50 hover:bg-blue-50"
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*,.pdf"
          />
          {file ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-3">
                <File className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-900">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 rounded-full hover:bg-gray-200 transition"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <span className="text-xs text-gray-500">
                Click to change file
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-3">
              <UploadCloud className="h-10 w-10 text-gray-400" />
              <div className="flex flex-col items-center text-sm text-gray-600">
                <span>Drag and drop files here</span>
                <span>or</span>
                <span className="font-medium text-blue-600 hover:text-blue-500">
                  browse files
                </span>
              </div>
              <span className="text-xs text-gray-500">
                PDF, JPG, PNG up to 5MB
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
