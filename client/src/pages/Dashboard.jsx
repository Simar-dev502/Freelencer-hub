import React from "react";

function FreelancerDashboard(){

return(

<div className="p-8">

<h1
className="
text-3xl
font-bold
mb-8
"
>
Freelancer Dashboard
</h1>

<div
className="
grid
md:grid-cols-3
gap-6
"
>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Total Applications</h2>
<p className="text-3xl font-bold">
12
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Accepted</h2>
<p className="text-3xl font-bold text-green-600">
4
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2>Pending</h2>
<p className="text-3xl font-bold text-yellow-600">
8
</p>
</div>

</div>

</div>

);

}


export default FreelancerDashboard;
