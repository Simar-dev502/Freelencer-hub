const User =
require("../models/User");

const favoriteFreelancer =
async(req,res)=>{

const {
freelancerId
}
=
req.body;

const user =
await User.findById(
req.user._id
);

if(
!user.favoriteFreelancers.includes(
freelancerId
)
){

user.favoriteFreelancers.push(
freelancerId
);

await user.save();

}

res.json({
message:
"Added To Favorites"
});

};

module.exports={
favoriteFreelancer
};