const mongoose =
require("mongoose");

const paymentSchema =
new mongoose.Schema({

contract:{
type:mongoose.Schema.Types.ObjectId,
ref:"Contract"
},

client:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

freelancer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

amount:Number,

paymentId:String,

status:{
type:String,
default:"Success"
}

},
{
timestamps:true
}
);

module.exports=
mongoose.model(
"Payment",
paymentSchema
);