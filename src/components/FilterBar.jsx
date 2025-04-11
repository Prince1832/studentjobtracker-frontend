const FilterBar = ({ filterStatus, setFilterStatus, filterDate, setFilterDate }) => {
    return (
        <div className=" flex flex-col sm:flex-row gap-4 mt-6 mb-6">
            <select
                className="border p-2 rounded w-full sm:w-1/2"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
            >
                <option value="">Filter by Status</option>
                <option className="text-black">Applied</option>
                <option className="text-black">Interview</option>
                <option className="text-black">Offer</option>
                <option className="text-black">Rejected</option>
            </select>
            <input
                type="date"
                className="border p-2 rounded w-full sm:w-1/2 custom-date-two"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
            />
        </div>
    );
};

export default FilterBar;
