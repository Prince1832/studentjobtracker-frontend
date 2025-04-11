import JobCard from "./JobCard";

const JobList = ({ jobs, onDelete, onStatusUpdate }) => {
  if (!jobs.length) return <p className="text-center text-gray-500 mt-8">No job applications found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onDelete={onDelete} onStatusUpdate={onStatusUpdate} />
      ))}
    </div>
  );
};

export default JobList;