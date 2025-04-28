"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Your message has been sent. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: "", text: "" });
      }, 5000);
    }, 1500);
  };

  const campuses = [
    {
      name: "Hyderabad Campus",
      address: "Plot No. 123, HITEC City, Hyderabad - 500081, Telangana, India",
      phone: "+91 40 1234 5678",
      email: "hyderabad.campus@university.edu",
    },
    {
      name: "Bengaluru Campus",
      address: "Electronic City, Phase 2, Bengaluru - 560100, Karnataka, India",
      phone: "+91 80 9876 5432",
      email: "bengaluru.campus@university.edu",
    },
    {
      name: "Visakhapatnam Campus",
      address: "Beach Road, Visakhapatnam - 530003, Andhra Pradesh, India",
      phone: "+91 891 2345 6789",
      email: "visakhapatnam.campus@university.edu",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">Get in touch with our university. We'd love to hear from you!</p>
      
      {submitMessage.text && (
        <div 
          className={`p-4 mb-6 rounded-md ${
            submitMessage.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {submitMessage.text}
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Gayathri Potluri"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Potlurigayathri05@gmail.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Admission Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        
        {/* General Contact Info */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">University Headquarters</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">
                  123 University Road, Hyderabad - 500032, Telangana, India
                </p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">+91 40 2222 1111</p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">info@university.edu</p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-700 font-medium">Office Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/gayathri-potluri/newshub" className="text-blue-600 hover:text-blue-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://github.com/gayathri-potluri/newshub" className="text-blue-400 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.476c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://github.com/gayathri-potluri/newshub" className="text-red-600 hover:text-red-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.44a2.56 2.56 0 00-1.766 1.778c-.44 1.61-.44 4.976-.44 4.976s0 3.367.44 4.976c.243.877.895 1.53 1.766 1.773 1.582.45 7.83.45 7.83.45s6.265 0 7.831-.45a2.51 2.51 0 001.767-1.774c.446-1.61.446-4.976.446-4.976s0-3.366-.45-4.977zM9.998 15.505V8.692l5.227 3.406-5.227 3.407z" />
                </svg>
              </a>
              <a href="https://github.com/gayathri-potluri/newshub" className="text-pink-600 hover:text-pink-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.776 0 8.352.03 7.073.156c-1.278.132-2.15.33-2.91.7a5.88 5.88 0 00-2.125 1.384A5.88 5.88 0 00.653 4.365c-.37.76-.568 1.633-.7 2.91C-.083 8.553 0 8.967 0 12.203c0 3.235.03 3.656.156 4.935.132 1.278.33 2.15.7 2.91a5.88 5.88 0 001.384 2.125 5.88 5.88 0 002.125 1.384c.76.37 1.633.568 2.91.7 1.278.126 1.693.156 4.935.156 3.24 0 3.658-.03 4.936-.155 1.277-.132 2.15-.3 2.91-.7a5.88 5.88 0 002.124-1.384 5.88 5.88 0 001.383-2.126c.37-.76.568-1.633.7-2.91.126-1.28.156-1.695.156-4.936 0-3.24-.03-3.656-.156-4.935-.132-1.277-.3-2.15-.7-2.91a5.88 5.88 0 00-1.384-2.125A5.88 5.88 0 0019.863.855c-.76-.37-1.633-.568-2.91-.7C15.673.03 15.26 0 12.017 0zm0 2.16c3.203 0 3.585.016 4.85.14 1.17.107 1.805.249 2.227.415.562.217.96.477 1.382.896.418.42.677.819.896 1.38.164.422.308 1.057.413 2.228.124 1.264.14 1.644.14 4.85 0 3.204-.016 3.585-.14 4.85-.107 1.17-.25 1.805-.415 2.227-.218.562-.478.96-.897 1.382-.42.418-.819.677-1.38.896-.422.164-1.058.308-2.228.413-1.265.124-1.644.14-4.85.14-3.204 0-3.584-.016-4.85-.14-1.169-.107-1.804-.249-2.226-.415-.562-.217-.96-.477-1.38-.896-.42-.42-.68-.819-.897-1.38-.164-.422-.307-1.058-.413-2.228-.124-1.265-.14-1.644-.14-4.85 0-3.203.016-3.584.14-4.85.107-1.17.249-1.804.415-2.226.217-.562.477-.96.896-1.38.419-.42.818-.68 1.38-.897.42-.164 1.056-.308 2.226-.413 1.265-.124 1.645-.14 4.85-.14z" />
                  <path d="M12.016 15.828a3.638 3.638 0 110-7.276 3.638 3.638 0 110 7.276zm0-9.236a5.597 5.597 0 100 11.194 5.597 5.597 0 000-11.194zM19.863 6.34a1.284 1.284 0 11-2.57 0 1.284 1.284 0 012.57 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Campus Contact Details Box */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Campuses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((campus, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-700 mb-2">{campus.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">{campus.address}</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm text-gray-600">{campus.phone}</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-600">{campus.email}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  href={`/campus/${campus.name.split(" ")[0].toLowerCase()}`}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Campus Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* FAQ Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">What are the admission requirements?</h3>
            <p className="text-gray-600">
              Admission requirements vary by program. Please visit our Admissions page or contact the specific department for detailed information.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">How can I apply for scholarships?</h3>
            <p className="text-gray-600">
              Scholarship applications are processed through our Financial Aid office. The deadline for most scholarships is March 31st each year.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer campus tours?</h3>
            <p className="text-gray-600">
              Yes, we offer guided campus tours on weekdays at 10 AM and 2 PM. Please schedule your visit through our admissions office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 