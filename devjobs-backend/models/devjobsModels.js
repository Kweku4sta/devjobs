const mongoose = require("mongoose");

const devJobSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  logoBackground: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  postedAt: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  apply: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    content: {
      type: String,
      required: true,
    },
    items: {
      type: [String],
      required: true,
    },
  },
  role: {
    content: {
      type: String,
      required: true,
    },
    items: {
      type: [String],
      required: true,
    },
  },
});

module.exports = mongoose.model("DevJobs", devJobSchema);
