import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { MdPerson, MdEmail, MdLock, MdCheckCircle } from "react-icons/md";

function Register(){

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData,setFormData] = useState({
    name:"",
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

      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");

    }catch(error){
      console.log(error);

      alert("Registration Failed");
    }
    finally {
      setLoading(false);
    }
  };

  return(
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <MdCheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">BDA CRM</h1>
          <p className="text-gray-300">Create your account to get started</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl"
        >
          
          <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>

          {/* Name Input */}
          <div className="mb-5">
            <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <MdPerson className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition"
                required
              />
            </div>
          </div>

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
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition"
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
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105 shadow-lg disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-300">
            Already have an account?
            <Link
              to="/"
              className="text-pink-400 ml-2 font-semibold hover:text-pink-300 transition"
            >
              Login here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-8">© 2024 BDA CRM. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Register;