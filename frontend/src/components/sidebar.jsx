import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdPeople, MdLeaderboard } from "react-icons/md";

function Sidebar(){

  const location = useLocation();

  const menu = [
    {
      name:"Dashboard",
      path:"/dashboard",
      icon: <MdDashboard className="w-5 h-5" />
    },
    {
      name:"Leads",
      path:"/leads",
      icon: <MdPeople className="w-5 h-5" />
    },
    {
      name:"Team",
      path:"/team",
      icon: <MdLeaderboard className="w-5 h-5" />
    }
  ];

  return(
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen w-64  p-6 shadow-xl z-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          BDA CRM
        </h1>
        <p className="text-xs text-gray-400 mt-1">Customer Management System</p>
      </div>

      <div className="flex flex-col gap-3">
        {
          menu.map((item,index)=>(
            <Link
              key={index}
              to={item.path}
              className={`p-3 rounded-lg transition-all duration-200 flex items-center gap-3 font-medium
              ${
                location.pathname === item.path
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))
        }
      </div>

      <div className="mt-12 pt-6 border-t border-slate-700">
        <p className="text-xs text-gray-400 text-center">© 2024 BDA CRM</p>
      </div>
    </div>
  )
}



export default Sidebar;