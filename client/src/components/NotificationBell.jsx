import {
FaBell
}
from "react-icons/fa";

function NotificationBell(){

return(

<div
className="
relative
cursor-pointer
"
>

<FaBell
size={22}
/>

<span
className="
absolute
-top-2
-right-2
bg-red-500
text-white
rounded-full
w-5
h-5
text-xs
flex
items-center
justify-center
"
>
3
</span>

</div>

);

}

export default NotificationBell;