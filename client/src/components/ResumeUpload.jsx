import axios
from "axios";

function ResumeUpload(){

const uploadResume =
async(e)=>{

const file =
e.target.files[0];

const formData =
new FormData();

formData.append(
"resume",
file
);

await axios.post(
"http://localhost:5000/api/portfolio/resume",
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
"Resume Uploaded"
);

};

return(

<input
type="file"
accept=".pdf"
onChange={
uploadResume
}
/>

);

}

export default ResumeUpload;
