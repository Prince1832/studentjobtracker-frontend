import { useState } from 'react';
// import { Calendar } from "tabler-icons-react";


const JobForm = ({ onAdd }) => {
    const [form, setForm] = useState({
        company: "",
        role: "",
        status: "Applied",
        date: "",
        link: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    };

    return (
        <form className="bg-white text-black p-4 rounded shadow-md" onSubmit={handleSubmit}>
            <input className="border p-2 mb-2 w-full" placeholder="Company" name="company" value={form.company} onChange={handleChange} required />
            <input className="border p-2 mb-2 w-full" placeholder="Role" name="role" value={form.role} onChange={handleChange} required />
            <select className="border p-2 mb-2 w-full" name="status" value={form.status} onChange={handleChange}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
            <input type="date" className="border p-2 mb-2 w-full custom-date-one" name="date" value={form.date} onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" placeholder="Link" name="link" value={form.link} onChange={handleChange} />
            <button className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" type="submit">Add Job</button>
        </form>
    )
}

export default JobForm;
