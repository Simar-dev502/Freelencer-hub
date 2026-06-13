const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role:{
  type:String,
  enum:[
    "admin",
    "client",
    "freelancer"
  ],
  default:"freelancer"
},
    bio: {
      type: String,
      default: ""
    },

    skills: [
      {
        type: String
      }
    ],

    profileImage: {
      type: String,
      default: ""
    },

    averageRating:{
    type:Number,
    default:0
},

resume:{
type:String,
default:""
},
savedJobs:[
{
type:mongoose.Schema.Types.ObjectId,
ref:"Job"
}
],

favoriteFreelancers:[
{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}
],

portfolio:[
{
title:String,
image:String,
description:String
}
],
totalReviews:{
    type:Number,
    default:0
}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "User",
  userSchema
);
