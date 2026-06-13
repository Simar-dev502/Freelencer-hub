const Message =
require("../models/Message");

const sendMessage =
async(req,res)=>{

const {
receiver,
content
}
=
req.body;

const message =
await Message.create({

sender:req.user._id,

receiver,

content

});

res.status(201).json(
message
);

};

const getMessages =
async(req,res)=>{

const messages =
await Message.find({

$or:[
{
sender:req.user._id,
receiver:req.params.userId
},
{
sender:req.params.userId,
receiver:req.user._id
}
]

})
.sort({
createdAt:1
});

res.json(messages);

};

module.exports={
sendMessage,
getMessages
};