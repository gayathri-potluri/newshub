"use client";

import Link from "next/link";

export default function CampusIndexPage() {
  const campuses = [
    {
      id: "hyderabad",
      name: "Hyderabad Campus",
      description: "Discover our state-of-the-art facilities in the heart of Hyderabad",
      image: "hyderabad.jpg",
      year: 2010,
      specialization: "Technology and Engineering",
    },
    {
      id: "bengaluru",
      name: "Bengaluru Campus",
      description: "Experience innovation and excellence at our Bengaluru campus",
      image: "bengaluru.jpg",
      year: 2015,
      specialization: "Computer Science and Innovation",
    },
    {
      id: "visakhapatnam",
      name: "Visakhapatnam Campus",
      description: "Explore our coastal campus with a focus on marine studies and engineering",
      image: "visakhapatnam.jpg",
      year: 2018,
      specialization: "Marine Science and Naval Engineering",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Our Campuses</h1>
      <p className="text-gray-600 mb-8">Explore our world-class campuses across India</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campuses.map((campus) => (
          <div key={campus.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-9 w-full h-48 relative">
              <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                <p className="text-blue-800 font-medium">{campus.name}</p>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{campus.name}</h2>
              <p className="text-gray-600 mb-4">{campus.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  Established {campus.year}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {campus.specialization}
                </span>
              </div>
              
              <Link 
                href={`/campus/${campus.id}`}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our University?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Academic Excellence</h3>
              <p className="text-sm text-gray-600">Top-ranked programs and world-class faculty dedicated to student success</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Modern Facilities</h3>
              <p className="text-sm text-gray-600">State-of-the-art infrastructure across all our campuses</p>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Industry Connections</h3>
              <p className="text-sm text-gray-600">Strong partnerships with leading companies for internships and placements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 