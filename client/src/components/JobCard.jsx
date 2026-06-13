import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">

      <h2 className="text-xl font-bold">
        {job.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {job.description}
      </p>

      <div className="mt-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {job.category}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">

        <p className="font-bold text-green-600">
          ₹ {job.budget}
        </p>

        <button
onClick={()=>
handleApply(job._id)
}
className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
"
>
Apply Now
</button>

<button
className="
mt-2
bg-yellow-500
text-white
px-4
py-2
rounded-lg
"
onClick={()=>
saveJob(job._id)
}
>
⭐ Save Job
</button>
      </div>

    </div>
  );
};

export default JobCard;