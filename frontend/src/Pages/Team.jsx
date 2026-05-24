import Sidebar from "../components/SideBar";
import { MdPerson, MdTrendingUp, MdCheckCircle } from "react-icons/md";

function Team(){

  const team = [
    {
      name:"Rahul",
      leads:20,
      converted:8,
      avatar:"R"
    },
    {
      name:"Aman",
      leads:15,
      converted:5,
      avatar:"A"
    },
    {
      name:"Vikram",
      leads:25,
      converted:12,
      avatar:"V"
    }
  ];

  const conversionRate = (converted, leads) => {
    return leads > 0 ? ((converted / leads) * 100).toFixed(1) : 0;
  };

  return(
    <div className="flex min-h-screen bg-gray-50 w-full">
      <Sidebar/>
      <div className="flex-1 ml-64 w-[calc(100%-256px)] overflow-x-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8 shadow-lg">
          <div>
            <h1 className="text-4xl font-bold mb-2">Team Performance</h1>
            <p className="text-green-100">Track your team's sales performance and metrics</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {
              team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 border-t-4 border-green-500"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-sm text-gray-500">Sales Executive</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium flex items-center gap-2">
                          <MdTrendingUp className="text-blue-500 w-5 h-5" /> Total Leads
                        </span>
                        <span className="text-2xl font-bold text-blue-600">{member.leads}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium flex items-center gap-2">
                          <MdCheckCircle className="text-green-500 w-5 h-5" /> Converted
                        </span>
                        <span className="text-2xl font-bold text-green-600">{member.converted}</span>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">Conversion Rate</span>
                        <span className="text-2xl font-bold text-purple-600">{conversionRate(member.converted, member.leads)}%</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 transition-all"
                          style={{width: `${conversionRate(member.converted, member.leads)}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Team Performance Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Performance Summary</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <span className="flex items-center gap-2">
                        <MdPerson className="w-5 h-5" /> Employee
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <span className="flex items-center gap-2">
                        <MdTrendingUp className="w-5 h-5" /> Leads
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <span className="flex items-center gap-2">
                        <MdCheckCircle className="w-5 h-5" /> Converted
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Conversion Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Lost</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    team.map((member, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-green-50 transition"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {member.avatar}
                            </div>
                            <span className="font-semibold text-gray-900">{member.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-bold text-blue-600">{member.leads}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {member.converted}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-300 rounded-full h-2 overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 transition-all"
                                style={{width: `${conversionRate(member.converted, member.leads)}%`}}
                              ></div>
                            </div>
                            <span className="font-semibold text-purple-600 text-sm">{conversionRate(member.converted, member.leads)}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {member.leads - member.converted}
                          </span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>

              </table>
            </div>

            {/* Summary Stats */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-600 font-medium mb-2">Total Team Leads</p>
                  <p className="text-3xl font-bold text-blue-600">{team.reduce((sum, m) => sum + m.leads, 0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 font-medium mb-2">Total Conversions</p>
                  <p className="text-3xl font-bold text-green-600">{team.reduce((sum, m) => sum + m.converted, 0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 font-medium mb-2">Overall Conversion Rate</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {((team.reduce((sum, m) => sum + m.converted, 0) / team.reduce((sum, m) => sum + m.leads, 0)) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Team;