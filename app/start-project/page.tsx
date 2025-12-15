'use client';
import { useState } from 'react';
import Header from '@/components/header';

const projectTypes = ['Web App', 'Website', 'Mobile App', 'Branding', 'Automation', 'Other'];
const budgetRanges = [
  'Less than $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
];

export default function StartProjectPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. **Form Validation Logic Here**
    // 2. **API Submission Logic Here (e.g., fetch('/api/submit-project', ...))**
    
    // On success:
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-32 text-center h-[70vh] flex flex-col justify-center items-center">
        <svg className="w-20 h-20 text-[#4D4DFF] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Thank You!</h1>
        <p className="text-xl text-[#666666]">Your proposal has been received. We'll be in touch shortly to discuss the next steps.</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <Header/>
      <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-4 text-center">Tell Us About Your Vision</h1>
      <p className="text-xl text-[#666666] mb-12 text-center">
        Fill out the form below and we'll be in touch within 24 hours to bring your project to life.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Your Name" type="text" name="name" required />
          <Input label="Email Address" type="email" name="email" required />
          <Input label="Phone Number (Optional)" type="tel" name="phone" />
        </div>

        {/* Project Details */}
        <Select label="Type of Project" name="projectType" options={projectTypes} required />
        <Select label="Budget Range" name="budget" options={budgetRanges} required />
        
        <div className="col-span-full">
          <label htmlFor="description" className="block text-lg font-medium text-[#1A1A1A] mb-2">Project Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Briefly describe your project, goals, and any key features required."
            className="w-full border border-gray-300 rounded-lg p-4 focus:ring-[#4D4DFF] focus:border-[#4D4DFF] transition duration-200 resize-none text-lg"
            required
          ></textarea>
        </div>

        {/* Submit CTA */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#FF4D4D] text-white text-xl font-bold py-4 rounded-full 
                       hover:bg-opacity-90 transition duration-300 shadow-xl"
          >
            Submit Project Proposal
          </button>
        </div>
      </form>
    </main>
  );
}

// Simple Reusable Input Component
const Input = ({ label, type, name, required }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-[#1A1A1A] mb-2">
      {label} {required && <span className="text-[#FF4D4D]">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-[#4D4DFF] focus:border-[#4D4DFF] transition duration-200 text-lg"
    />
  </div>
);

// Simple Reusable Select Component
const Select = ({ label, name, options, required }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-[#1A1A1A] mb-2">
      {label} {required && <span className="text-[#FF4D4D]">*</span>}
    </label>
    <select
      id={name}
      name={name}
      required={required}
      defaultValue=""
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-[#4D4DFF] focus:border-[#4D4DFF] transition duration-200 text-lg bg-white appearance-none"
    >
      <option value="" disabled>Select an option</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);