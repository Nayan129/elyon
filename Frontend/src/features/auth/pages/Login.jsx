import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({
        email: formData.email,
        password: formData.password
      });
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] font-sans selection:bg-[#FFD700] selection:text-[#131313] flex flex-col lg:flex-row">

      {/* Split Screen - Left Image Section (Hidden on mobile, visible on lg screens) */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-screen bg-neutral-900 border-r border-dark-surface/30">
        <img
          src="/evyon_editorial.png"
          alt="Evyon Editorial"
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-all duration-700 hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent md:bg-gradient-to-r" />

        <div className="absolute top-12 left-10 z-10">
          <h1 className="text-gold font-brand text-2xl font-bold tracking-[0.2em]">EVYON.</h1>
        </div>

        <div className="absolute bottom-12 left-10 right-10 z-10 max-w-sm">
          <h2 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl">
            Define your <span className="text-gold italic">aesthetic.</span>
          </h2>
          <p className="text-neutral-300 mt-4 font-body tracking-wider text-sm md:text-base opacity-80">
            Join the exclusive movement of creators and brands redefining the modern fashion landscape.
          </p>
        </div>
      </div>

      {/* Split Screen - Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 min-h-screen overflow-y-auto z-10 bg-[#0e0e0e]">
        <div className="w-full max-w-md bg-[#131313] lg:bg-transparent p-10 md:p-14 lg:p-6 rounded-2xl lg:rounded-none shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] lg:shadow-none">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-[#FFD700] font-medium mb-3">Sign in to Evyon</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Enter the Vault</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-[#d0c6ab] mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1c1b1b] lg:bg-[#0e0e0e] text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none px-4 py-3 transition-colors duration-300 focus:bg-[#201f1f] lg:focus:bg-[#131313]"
                placeholder="hello@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-[#d0c6ab] font-medium">Password</label>
                <a href="#" className="text-xs text-[#999077] hover:text-[#FFD700] transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-[#1c1b1b] lg:bg-[#0e0e0e] text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none px-4 py-3 transition-colors duration-300 focus:bg-[#201f1f] lg:focus:bg-[#131313]"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-[#e9c400] to-[#ffd700] text-[#131313] font-bold tracking-wide py-4 px-8 rounded hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Sign In
            </button>

            <ContinueWithGoogle />

            <div className="text-center mt-6">
              <a href="/register" className="text-sm text-[#999077] hover:text-[#FFD700] transition-colors border-b border-transparent hover:border-[#FFD700] py-0.5">
                Don't have an account? Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;