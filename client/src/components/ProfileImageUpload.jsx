import {
useState
}
from "react";

import axios
from "axios";

function ProfileImageUpload(){

const [
image,
setImage
]
=
useState(null);

const uploadImage =
async()=>{

const formData =
new FormData();

formData.append(
"image",
image
);

await axios.post(
"http://localhost:5000/api/portfolio/profile-image",
formData,
{
headers:{
Authorization:
`Bearer ${
localStorage.getItem(
"token"
)
}`
}
}
);

alert(
"Image Uploaded"
);

};

return(

<div>

<input
type="file"
onChange={(e)=>
setImage(
e.target.files[0]
)
}
/>

<button
onClick={
uploadImage
}
>
Upload
</button>

</div>

);

}

export default ProfileImageUpload;