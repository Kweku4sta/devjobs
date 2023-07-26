import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const useJobFilter = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [showByContract, setShowByContract] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [itemNotFound, setItemNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setShowByContract(queryParams.get("contract") === "true");
  }, [location]);

  useEffect(() => {
    fetchJobs();
  }, [showByContract, locationFilter, searchFilter]);

  useEffect(() => {
    // Set loading to false when searchFilter changes
    setLoading(false);
  }, [searchFilter, locationFilter]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://devjobs-backend-vgzv.onrender.com/api/devjob"
      );
      const initialJobs = response.data;
      console.log(response.data);
      console.log(initialJobs);
      setJobs(initialJobs);
      filterJobs(initialJobs);
      setLoading(false);
      console.log(jobs, "jobs in the filter");
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs.");
      setLoading(false);
    }
  };

  const filterJobs = (initialJobs) => {
    let filteredJobs = initialJobs;

    if (showByContract) {
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
    }

    if (locationFilter !== "") {
      filteredJobs = filteredJobs.filter((job) =>
        job.location
          .toLowerCase()
          .trim()
          .startsWith(locationFilter.toLowerCase().trim())
      );
    }

    if (searchFilter !== "") {
      const searchTerm = searchFilter.toLowerCase();
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title?.toLowerCase().includes(searchTerm) ||
          job.company?.toLowerCase().includes(searchTerm.trim()) ||
          job.position?.toLowerCase().includes(searchTerm.trim())
      );
    }

    setJobs(filteredJobs);

    if (filteredJobs.length === 0) {
      setItemNotFound(true);
      setVisibleJobs([]);
      setLoadMoreVisible(false);
    } else {
      setVisibleJobs(filteredJobs.slice(0, 12));
      setLoadMoreVisible(filteredJobs.length > 12);
      setItemNotFound(false);
    }
  };

  const loadMoreJobs = () => {
    const visibleCount = visibleJobs.length;
    const nextVisibleJobs = jobs.slice(visibleCount, visibleCount + 12);
    const updatedVisibleJobs = [...visibleJobs, ...nextVisibleJobs];
    setVisibleJobs(updatedVisibleJobs);
    setLoadMoreVisible(updatedVisibleJobs.length < jobs.length);
  };

  const handleCheckboxChange = () => {
    setShowByContract((prevState) => {
      const newState = !prevState;
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("contract", newState.toString());
      window.history.replaceState(
        null,
        null,
        `${window.location.pathname}?${queryParams.toString()}`
      );
      return newState;
    });
  };

  return {
    visibleJobs,
    loadMoreVisible,
    showByContract,
    locationFilter,
    searchFilter,
    itemNotFound,
    loading,
    error,
    handleCheckboxChange,
    setLocationFilter,
    setSearchFilter,
    loadMoreJobs,
    jobs,
  };
};
