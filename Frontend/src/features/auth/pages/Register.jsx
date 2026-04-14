import React, { useState } from 'react';
import { useAuth } from "../hooks/useAuth"
import { Link, useNavigate } from 'react-router';
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Register = () => {

  const { handleRegister } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    password: '',
    isSeller: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({
      email: formData.email,
      contact: formData.contactNumber,
      password: formData.password,
      isSeller: formData.isSeller,
      fullname: formData.fullName
    })
    navigate("/")
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
            <h2 className="text-sm uppercase tracking-widest text-[#FFD700] font-medium mb-3">Welcome to Evyon</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Elevate Your Style</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm text-[#d0c6ab] mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-[#1c1b1b] lg:bg-[#0e0e0e] text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none px-4 py-3 transition-colors duration-300 focus:bg-[#201f1f] lg:focus:bg-[#131313]"
                placeholder="e.g. John Doe"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-sm text-[#d0c6ab] mb-2 font-medium">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="bg-[#1c1b1b] lg:bg-[#0e0e0e] text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none px-4 py-3 transition-colors duration-300 focus:bg-[#201f1f] lg:focus:bg-[#131313]"
                placeholder="+1 (555) 000-0000"
              />
            </div>

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
              <label className="text-sm text-[#d0c6ab] mb-2 font-medium">Password</label>
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

            {/* Is Seller Checkbox */}
            <div className="flex items-center gap-4 mt-2 group w-max cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name="isSeller"
                  id="isSeller"
                  checked={formData.isSeller}
                  onChange={handleChange}
                  className="peer appearance-none w-6 h-6 border border-[#4d4732] rounded bg-[#1c1b1b] lg:bg-[#0e0e0e] checked:bg-[#FFD700] checked:border-[#FFD700] cursor-pointer transition-colors duration-300 group-hover:border-[#FFD700]"
                />
                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-[#221b00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <label htmlFor="isSeller" className="text-sm text-[#e5e2e1] group-hover:text-[#FFD700] cursor-pointer select-none transition-colors duration-300">Register as Seller</label>



            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-[#e9c400] to-[#ffd700] text-[#131313] font-bold tracking-wide py-4 px-8 rounded hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Sign Up
            </button>

            <ContinueWithGoogle />

            <div className="text-center mt-6">
              <a href="/login" className="text-sm text-[#999077] hover:text-[#FFD700] transition-colors border-b border-transparent hover:border-[#FFD700] py-0.5">
                Already have an account? Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;