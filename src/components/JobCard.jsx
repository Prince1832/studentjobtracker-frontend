import { Trash, ExternalLink, Calendar } from "tabler-icons-react";

const JobCard = ({ job, onDelete, onStatusUpdate }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600">{job.company} - {job.role}</h3>
            <p className="text-gray-600 flex items-center gap-2"><Calendar size={16} /> {new Date(job.date).toLocaleDateString()}</p>
            <p className="mt-1 text-black">Status: <strong>{job.status}</strong></p>
            <a
                href={job.link}
                target="_blank"
                className="relative inline-flex items-center mt-1 text-blue-500 group"
            >
                <ExternalLink size={16} className="mr-1" /> Job Link
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full delay-100"></span>
            </a>

            <div className="text-black mt-3 flex items-center gap-3">
                <select value={job.status} onChange={(e) => onStatusUpdate(job._id, e.target.value)} className="border p-1 rounded">
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>
                <button onClick={() => onDelete(job._id)} className="text-white bg-red-500 hover:bg-red-600 p-2 rounded transition cursor-pointer">
                    <Trash size={18} />
                </button>
            </div>
        </div>
    );
};

export default JobCard;