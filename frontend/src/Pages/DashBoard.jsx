import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { Link } from "react-router-dom";
import { MdTrendingUp, MdCheckCircle, MdHourglassEmpty, MdCancel } from "react-icons/md";

function Dashboard(){

  const [leads,setLeads] = useState([]);

  useEffect(()=>{
    fetchLeads();
  },[]);

  const fetchLeads = async()=>{

    try{

      const res = await axios.get(
        "https://bda-crm-project.onrender.com/api/leads"
      );

      setLeads(res.data);

    }catch(error){
      console.log(error);
    }
  };

  const totalLeads = leads.length;

  const convertedLeads = leads.filter(
    lead => lead.status === "Converted"
  ).length;

  const lostLeads = leads.filter(
    lead => lead.status === "Lost"
  ).length;

  const pendingLeads =
    totalLeads - convertedLeads - lostLeads;

  const StatCard = ({ icon: Icon, label, value, bgColor, textColor }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 border-l-4 border-transparent hover:border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
          <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
        </div>
        <div className={`${bgColor} p-4 rounded-full`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return(
    <div className="flex min-h-screen bg-gray-50 w-full">
      <Sidebar/>

      <div className="flex-1 ml-64 w-[calc(100%-256px)] overflow-x-hidden">        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-blue-100">Welcome back! Here's your CRM overview</p>
            </div>
            <Link
              to="/leads"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-md"
            >
              → Manage Leads
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              icon={MdTrendingUp}
              label="Total Leads"
              value={totalLeads}
              bgColor="bg-blue-500"
              textColor="text-blue-600"
            />
            <StatCard 
              icon={MdCheckCircle}
              label="Converted"
              value={convertedLeads}
              bgColor="bg-green-500"
              textColor="text-green-600"
            />
            <StatCard 
              icon={MdHourglassEmpty}
              label="Pending"
              value={pendingLeads}
              bgColor="bg-yellow-500"
              textColor="text-yellow-600"
            />
            <StatCard 
              icon={MdCancel}
              label="Lost"
              value={lostLeads}
              bgColor="bg-red-500"
              textColor="text-red-600"
            />
          </div>

          {/* Recent Leads Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Recent Leads</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    leads.slice(0,8).map((lead)=>(
                      <tr
                        key={lead._id}
                        className="border-b border-gray-100 hover:bg-blue-50 transition"
                      >
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">{lead.clientName}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-600">{lead.companyName}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                            lead.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            lead.status === 'Lost' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.priority === 'High' ? 'bg-red-100 text-red-800' :
                            lead.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {lead.priority}
                          </span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              {leads.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No leads yet. Start by creating your first lead!</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}



export default Dashboard;