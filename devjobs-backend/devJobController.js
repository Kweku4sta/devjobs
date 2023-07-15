const DevJob = require("./models/devjobsModels");

const allJobs = async (req, res) => {
  try {
    if (req.params.id) {
      const jobId = req.params.id;
      const job = await DevJob.findById(jobId);
      if (job) {
        res.status(200).json(job);
        console.log(job);
      } else {
        res.status(404).json({ error: "Job not found" });
      }
    } else {
      const jobs = await DevJob.find();
      res.status(200).json(jobs);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { allJobs };
