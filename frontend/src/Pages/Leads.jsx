import {useEffect,useState} from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { MdDelete, MdAdd, MdEdit } from "react-icons/md";

function Leads(){

  const [leads,setLeads] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData,setFormData] = useState({
    clientName:"",
    companyName:"",
    phone:"",
    email:"",
    status:"New Lead",
    priority:"Medium",
    assignedTo:"",
    followUpDate:"",
    notes:""
  });

  const fetchLeads = async()=>{

    const res = await axios.get(
      "http://localhost:5000/api/leads"
    );

    setLeads(res.data);
  };

  useEffect(()=>{
    fetchLeads();
  },[]);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/leads",
      formData
    );

    fetchLeads();

    setFormData({
      clientName:"",
      companyName:"",
      phone:"",
      email:"",
      status:"New Lead",
      priority:"Medium",
      assignedTo:"",
      followUpDate:"",
      notes:""
    });
    
    setShowForm(false);
  };

  const deleteLead = async(id)=>{

    await axios.delete(
      `http://localhost:5000/api/leads/${id}`
    );

    fetchLeads();
  };

  return(
    <div className="flex min-h-screen bg-gray-50 w-full">
      <Sidebar />
      <div className="flex-1 ml-64 w-[calc(100%-256px)] overflow-x-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-8 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Leads Management</h1>
              <p className="text-blue-100">Manage and track all your leads efficiently</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <MdAdd className="w-5 h-5" /> Add Lead
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">

          {/* Add Lead Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Lead</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <input
                  type="text"
                  name="clientName"
                  placeholder="Client Name"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />

                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white"
                >
                  <option>New Lead</option>
                  <option>Contacted</option>
                  <option>Meeting Scheduled</option>
                  <option>Quotation Sent</option>
                  <option>Negotiation</option>
                  <option>Converted</option>
                  <option>Lost</option>
                </select>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white"
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

                <input
                  type="text"
                  name="assignedTo"
                  placeholder="Assigned To"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />

                <input
                  type="date"
                  name="followUpDate"
                  value={formData.followUpDate}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />

                <textarea
                  name="notes"
                  placeholder="Notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition md:col-span-2"
                  rows="3"
                />

                <div className="md:col-span-2 flex gap-3">
                  <button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-md"
                  >
                    Create Lead
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Leads Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">All Leads ({leads.length})</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Assigned To</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    leads.map((lead)=>(
                      <tr
                        key={lead._id}
                        className="border-b border-gray-100 hover:bg-blue-50 transition"
                      >

                        <td className="px-6 py-4 font-medium text-gray-900">
                          {lead.clientName}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {lead.companyName}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {lead.email}
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {lead.phone}
                        </td>

                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                            lead.status === 'New Lead' ? 'bg-blue-100 text-blue-800' :
                            lead.status === 'Lost' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {lead.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.priority === 'High' ? 'bg-red-100 text-red-800' :
                            lead.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {lead.priority}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-gray-600">
                          {lead.assignedTo}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={()=>deleteLead(lead._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition transform hover:scale-110 inline-flex items-center gap-2"
                          >
                            <MdDelete className="w-4 h-4" /> Delete
                          </button>
                        </td>

                      </tr>
                    ))
                  }
                </tbody>

              </table>

              {leads.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No leads yet. Create your first lead by clicking the "Add Lead" button.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Leads;