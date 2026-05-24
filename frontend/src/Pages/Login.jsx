import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock, MdCheckCircle } from "react-icons/md";

function Login(){

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try{

      const res = await axios.post(
        "http://bda-crm-project.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token",res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    }catch(error){

      console.log(error);

      alert("Login Failed");
    }
    finally {
      setLoading(false);
    }
  };

  return(
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
            <MdCheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">BDA CRM</h1>
          <p className="text-gray-300">Welcome back to your CRM</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl"
        >
          
          <h2 className="text-2xl font-bold text-white mb-6">Login to Account</h2>

          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <MdLock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition transform hover:scale-105 shadow-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-300">
            Don't have an account?
            <Link
              to="/register"
              className="text-cyan-400 ml-2 font-semibold hover:text-cyan-300 transition"
            >
              Register here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-8">© 2024 BDA CRM. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Login;