import mongoose from 'mongoose'

const detailsSchema = new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    FatherName:{type:String},
    religion:{type:String},
    MobileNumber:{type:String},
    currentInstitueType:{type:String},
    DateOfAddmission:{type:String},
    studentRegistrationNumber:{type:String},
    mainDegree:{type:String},
    universityName:{type:String},
    degreeTitle:{type:String},
    userImage:{type:String},




    dateOfBirth:{type:String},
    domicle:{type:String},
    familyIncome:{type:String},
    passportNumber:{type:String},


    country:{type:String},
    province:{type:String},
    district:{type:String},
    city:{type:String},
    fullAddress:{type:String},


// Peramement address 

    countryP:{type:String},
    provinceP:{type:String},
    districtP:{type:String},
    cityP:{type:String},
    fullAddressP:{type:String},
    
    
    
    //SchoolEduction
    schoolProgramTitle:{type:String},
    schoolName:{type:String},
    schoolSubDisciline:{type:String},
    schoolObtainedMarks:{type:String},
    schoolTotalsMarks:{type:String},
    schoolPerecentage:{type:String},
    
    
    
    
    // College Education

    collegeProgramTitle:{type:String},
    collegeName:{type:String},
    collegeSubDisciline:{type:String},// scinece art 
    collegeObtainedMarks:{type:String},
    collegeTotalsMarks:{type:String},
    collegePerecentage:{type:String},



//University

universityEducationType :{type:String}, //annual,semester
currentSemester:{type:String},
obtainedCGPA:{type:String},
totalCGPA:{type:String},
uniPerecentage:{type:String},



//uploading file 

cnicFront :{type:String},
cnicBack :{type:String},
cnicUndergraduteTranscript :{type:String},
cnicAffividat :{type:String},
cnicDomicle :{type:String},

},{timestamps:true})

const detailsModels = mongoose.models.details || mongoose.model("details",detailsSchema)
export default detailsModels;