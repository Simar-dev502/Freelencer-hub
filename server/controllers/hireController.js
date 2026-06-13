
const Contract =
require("../models/Contract");

const hireFreelancer =
async(req,res)=>{

const {
jobId,
freelancerId,
amount
}
=
req.body;

const contract =
await Contract.create({

job:jobId,

client:req.user._id,

freelancer:freelancerId,

amount,

status:"Pending"

});

res.status(201).json(
contract
);

};

module.exports={
hireFreelancer
};