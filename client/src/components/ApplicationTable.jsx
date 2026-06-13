import React from "react";

function ApplicationTable({
applications
}){

return(

<table
className="
w-full
bg-white
rounded-xl
shadow
"
>

<thead>

<tr>

<th>Name</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{
applications.map(
(app)=>(
<tr key={app._id}>

<td>
{app.freelancer.name}
</td>

<td>
{app.status}
</td>

<td>

<button
className="
bg-green-600
text-white
px-3
py-1
rounded
mr-2
"
>
Accept
</button>

<button
className="
bg-red-600
text-white
px-3
py-1
rounded
"
>
Reject
</button>
<button
className="
bg-green-600
text-white
px-4
py-2
rounded-lg
"
onClick={()=>
hireFreelancer(
app.freelancer._id
)
}
>
Hire
</button>

</td>

</tr>
)
)
}

</tbody>

</table>

);

}

export default ApplicationTable;