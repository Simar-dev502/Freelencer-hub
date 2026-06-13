import {
useEffect,
useState
}
from "react";

import io
from "socket.io-client";

const socket =
io(
"http://localhost:5000"
);

function ChatBox(){

const [
message,
setMessage
]
=
useState("");

const [
messages,
setMessages
]
=
useState([]);

useEffect(()=>{

socket.on(
"receiveMessage",
(data)=>{

setMessages(
prev=>[
...prev,
data
]
);

});

},[]);

const sendMessage =
()=>{

if(!message)
return;

socket.emit(
"sendMessage",
{
message
}
);

setMessage("");

};

return(

<div
className="
bg-white
shadow-lg
rounded-xl
p-4
"
>

<div
className="
h-80
overflow-y-auto
"
>

{
messages.map(
(msg,index)=>(
<p
key={index}
>
{msg.message}
</p>
)
)
}

</div>

<div
className="
flex
mt-4
"
>

<input
value={message}
onChange={(e)=>
setMessage(
e.target.value
)
}
className="
border
flex-1
p-2
"
/>

<button
onClick={sendMessage}
className="
bg-blue-600
text-white
px-4
"
>
Send
</button>

</div>

</div>

);

}

export default ChatBox;