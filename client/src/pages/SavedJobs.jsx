import {
useEffect,
useState
}
from "react";

import axios
from "axios";

function SavedJobs(){

const [
jobs,
setJobs
]
=
useState([]);

useEffect(()=>{

fetchJobs();

},[]);

const fetchJobs =
async()=>{

const res =
await axios.get(
"/api/saved-jobs",
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

setJobs(
res.data
);

};

return(

<div
className="
max-w-6xl
mx-auto
p-8
"
>

<h1
className="
text-3xl
font-bold
mb-8
"
>
Saved Jobs
</h1>

{
jobs.map(
(job)=>(
<div
key={job._id}
>
{job.title}
</div>
)
)
}

</div>

);

}

export default SavedJobs;