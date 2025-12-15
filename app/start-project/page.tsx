'use client';
import { useState } from 'react';
import Header from '@/components/header'; // Assuming you have a Header component matching your current site's header
import Footer from '@/components/footer'; // Assuming you have a Footer component matching your current site's footer

const projectTypes = ['Mobile App', 'Web App', 'Website', 'Branding', 'Automation', 'AI Solutions', 'Other'];
const budgetRanges = [
  'Less than $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k+',
];

export default function ContactPage() { // Renamed to better reflect it's the contact/start project page
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form validation and API submission logic here
    // e.g., fetch('/api/submit-project', { method: 'POST', body: new FormData(e.target) })

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <div className="max-w-3xl mx-auto py-32 text-center h-[70vh] flex flex-col justify-center items-center">
          <svg className="w-20 h-20 text-indigo-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600">We've received your inquiry. A member of our team will reach out within 24 hours to discuss your project.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto mt-24 py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">Let's Connect!</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Tell us about your project. We'll review your details and get back to you within 24 hours to discuss next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" type="text" name="firstName" required />
            <Input label="Last Name" type="text" name="lastName" required />
            <Input label="Email Address" type="email" name="email" required />
            <Input label="Company / Website (Optional)" type="text" name="company" />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Phone Number (Optional)" type="tel" name="phone" />
            <Select label="Budget Range" name="budget" options={budgetRanges} />
          </div>
          
          <Select label="Type of Project" name="projectType" options={projectTypes} required />

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project. What problems can we help you solve?"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none text-lg"
              required
            ></textarea>
          </div>

          {/* Submit CTA */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white text-xl font-bold py-4 rounded-full 
                         hover:bg-gray-800 transition duration-300 shadow-xl"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

// Reusable Input Component
const Input = ({ label, type, name, required }: { label: string; type: string; name: string; required?: boolean }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-gray-900 mb-2">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-lg"
    />
  </div>
);

// Reusable Select Component
const Select = ({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-gray-900 mb-2">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <select
      id={name}
      name={name}
      required={required}
      defaultValue=""
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-lg bg-white"
    >
      <option value="" disabled>Please select...</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);