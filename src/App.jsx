import { useEffect, useState } from "react";
import axios from "axios";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/jobs");
    setJobs(res.data);
  };

  const addJob = async (job) => {
    const res = await axios.post("http://localhost:5000/api/jobs", job);
    setJobs([...jobs, res.data]);
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`);
    setJobs(jobs.filter((j) => j._id !== id));
  };

  const updateStatus = async (id, status) => {
    const res = await axios.put(`http://localhost:5000/api/jobs/${id}`, { status });
    setJobs(jobs.map((j) => (j._id === id ? res.data : j)));
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesStatus = filterStatus ? job.status === filterStatus : true;
    const matchesDate = filterDate ? job.date.startsWith(filterDate) : true;
    return matchesStatus && matchesDate;
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-500 md:text-left text-center animate-pulse">🎯 Student Job Tracker</h1>
      <JobForm onAdd={addJob} />
      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <JobList jobs={filteredJobs} onDelete={deleteJob} onStatusUpdate={updateStatus} />
    </div>
  );
}

export default App;