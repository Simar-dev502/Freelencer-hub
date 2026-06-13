const Job = require("../models/Job");

/* CREATE JOB */

const createJob = async(req,res)=>{

try{

    const {
        title,
        description,
        budget,
        category,
        skills
    } = req.body;

    const job = await Job.create({
        title,
        description,
        budget,
        category,
        skills,
        client:req.user._id
    });

    res.status(201).json(job);

}catch(error){

    res.status(500).json({
        message:error.message
    });

}
};

/* GET ALL JOBS */

const getJobs = async(req,res)=>{

try{

    const page =
        Number(req.query.page) || 1;

    const limit = 6;

    const keyword =
        req.query.search
        ? {
            title:{
                $regex:req.query.search,
                $options:"i"
            }
        }
        : {};

    const category =
        req.query.category
        ? {
            category:req.query.category
        }
        : {};

    const count =
        await Job.countDocuments({
            ...keyword,
            ...category
        });

    const jobs =
        await Job.find({
            ...keyword,
            ...category
        })
        .populate(
            "client",
            "name email"
        )
        .skip(limit*(page-1))
        .limit(limit)
        .sort({
            createdAt:-1
        });

    res.json({
        jobs,
        page,
        pages:
        Math.ceil(count/limit)
    });

}catch(error){

    res.status(500).json({
        message:error.message
    });

}
};

/* GET SINGLE JOB */

const getJobById = async(req,res)=>{

try{

    const job =
        await Job.findById(
            req.params.id
        ).populate(
            "client",
            "name email"
        );

    if(!job){

        return res.status(404).json({
            message:"Job Not Found"
        });

    }

    res.json(job);

}catch(error){

    res.status(500).json({
        message:error.message
    });

}
};

/* UPDATE JOB */

const updateJob = async(req,res)=>{

try{

    const job =
        await Job.findById(
            req.params.id
        );

    if(!job){

        return res.status(404).json({
            message:"Job Not Found"
        });

    }

    if(
        job.client.toString() !==
        req.user._id.toString()
    ){

        return res.status(401).json({
            message:"Unauthorized"
        });

    }

    job.title =
        req.body.title || job.title;

    job.description =
        req.body.description ||
        job.description;

    job.budget =
        req.body.budget ||
        job.budget;

    job.category =
        req.body.category ||
        job.category;

    job.skills =
        req.body.skills ||
        job.skills;

    const updated =
        await job.save();

    res.json(updated);

}catch(error){

    res.status(500).json({
        message:error.message
    });

}
};

/* DELETE JOB */

const deleteJob = async(req,res)=>{

try{

    const job =
        await Job.findById(
            req.params.id
        );

    if(!job){

        return res.status(404).json({
            message:"Job Not Found"
        });

    }

    if(
        job.client.toString() !==
        req.user._id.toString()
    ){

        return res.status(401).json({
            message:"Unauthorized"
        });

    }

    await job.deleteOne();

    res.json({
        message:
        "Job Deleted Successfully"
    });

}catch(error){

    res.status(500).json({
        message:error.message
    });

}
};

module.exports = {

    createJob,

    getJobs,

    getJobById,

    updateJob,

    deleteJob
};
const recommendedJobs =
await Job.find({

category:
user.skills[0]

})
.limit(6);