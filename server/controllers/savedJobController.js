const User =
require("../models/User");

const saveJob =
async(req,res)=>{

const {
jobId
} = req.body;

const user =
await User.findById(
req.user._id
);

if(
!user.savedJobs.includes(
jobId
)
){
user.savedJobs.push(
jobId
);

await user.save();
}

res.json({
message:
"Job Saved"
});

};

const getSavedJobs =
async(req,res)=>{

const user =
await User.findById(
req.user._id
)
.populate(
"savedJobs"
);

res.json(
user.savedJobs
);

};

module.exports={
saveJob,
getSavedJobs
};