'use client';
import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const projectTypes = ['Mobile App', 'Web App', 'Website', 'Branding', 'Automation', 'AI Solutions', 'Other'];
const budgetRanges = [
  'Less than $1k',
  '$1k - $3k',
  '$3k - $5k',
  '$5k - $10k',
  '$10k - $25k',
  '$25k+',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    projectType: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.message) {
      setError('Please fill out all required fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/project-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
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
      <main className="max-w-4xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] mb-4 text-center">
          Let’s Connect
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-10 md:mb-12 text-center max-w-2xl mx-auto">
          Tell us about your project. We’ll review your details and get back to you within 24 hours.
        </p>


          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-100"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
            <Input label="Last Name" type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
            <Input label="Email Address" type="email" name="email" required value={formData.email} onChange={handleChange} />
            <Input label="Company / Website (Optional)" type="text" name="company" value={formData.company} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Phone Number (Optional)" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            <Select label="Budget Range" name="budget" options={budgetRanges} value={formData.budget} onChange={handleChange} />
          </div>
          
          <Select label="Type of Project" name="projectType" options={projectTypes} required value={formData.projectType} onChange={handleChange} />

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project. What problems can we help you solve?"
              required
              value={formData.message}
              onChange={handleChange}
              className="
                w-full rounded-lg border border-gray-300
                px-3 py-3
                text-sm sm:text-base
                text-[#1A1A1A]
                placeholder:text-gray-400
                focus:placeholder:text-gray-300
                focus:ring-indigo-500 focus:border-indigo-500
                resize-none
                transition
              "
            />

          </div>

          <div className="pt-4">
            {error && (
              <div className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded-lg">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 cursor-pointer text-white text-xl font-bold py-4 rounded-full 
                         hover:bg-gray-800 transition duration-300 shadow-xl
                         disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

// Reusable Input Component
const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm sm:text-base font-medium text-[#1A1A1A] mb-2"
    >
      {label} {required && <span className="text-red-600">*</span>}
    </label>

    <input
      type={type}
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full rounded-lg border border-gray-300
        px-3 py-2.5
        text-sm sm:text-base
        text-[#1A1A1A]
        placeholder:text-gray-400
        focus:placeholder:text-gray-300
        focus:ring-indigo-500 focus:border-indigo-500
        transition
      "
    />
  </div>
)


// Reusable Select Component
const Select = ({
  label,
  name,
  options,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  options: string[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm sm:text-base font-medium text-[#1A1A1A] mb-2"
    >
      {label} {required && <span className="text-red-600">*</span>}
    </label>

    <select
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="
        w-full rounded-lg border border-gray-300
        px-3 py-2.5
        text-sm sm:text-base
        text-[#1A1A1A]
        bg-white
        focus:ring-indigo-500 focus:border-indigo-500
        transition
      "
    >
      <option value="" disabled>
        Please select…
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)
