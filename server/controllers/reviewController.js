const Review =
require("../models/Review");

const User =
require("../models/User");

/* CREATE REVIEW */

const createReview =
async(req,res)=>{

try{

const {
freelancerId,
rating,
comment
}
=
req.body;

const review =
await Review.create({

freelancer:
freelancerId,

client:
req.user._id,

rating,

comment

});

const reviews =
await Review.find({
freelancer:
freelancerId
});

const avg =
reviews.reduce(
(total,item)=>
total+item.rating,
0
) / reviews.length;

await User.findByIdAndUpdate(
freelancerId,
{
averageRating:
avg.toFixed(1),

totalReviews:
reviews.length
}
);

res.status(201).json(
review
);

}catch(error){

res.status(500).json({
message:error.message
});

}
};

/* GET REVIEWS */

const getReviews =
async(req,res)=>{

const reviews =
await Review.find({
freelancer:
req.params.id
})
.populate(
"client",
"name"
);

res.json(reviews);

};

module.exports={
createReview,
getReviews
};