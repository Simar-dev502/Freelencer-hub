const cloudinary =
require("../config/cloudinary");

const User =
require("../models/User");

const uploadProfileImage =
async(req,res)=>{

try{

const result =
await cloudinary.uploader.upload(
req.file.path,
{
folder:"profiles"
}
);

await User.findByIdAndUpdate(
req.user._id,
{
profileImage:
result.secure_url
}
);

res.json({
image:
result.secure_url
});

}catch(error){

res.status(500).json({
message:error.message
});

}
};

const uploadResume =
async(req,res)=>{

try{

const result =
await cloudinary.uploader.upload(
req.file.path,
{
resource_type:"raw",
folder:"resumes"
}
);

await User.findByIdAndUpdate(
req.user._id,
{
resume:
result.secure_url
}
);

res.json({
resume:
result.secure_url
});

}catch(error){

res.status(500).json({
message:error.message
});

}
};

module.exports={
uploadProfileImage,
uploadResume
};