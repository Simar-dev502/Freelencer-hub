const mongoose =
require("mongoose");

const contractSchema =
new mongoose.Schema({

job:{
type:mongoose.Schema.Types.ObjectId,
ref:"Job"
},

client:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

freelancer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

amount:{
type:Number,
required:true
},

status:{
type:String,
enum:[
"Pending",
"Active",
"Completed",
"Cancelled"
],
default:"Pending"
}

},
{
timestamps:true
}
);

module.exports=
mongoose.model(
"Contract",
contractSchema
);