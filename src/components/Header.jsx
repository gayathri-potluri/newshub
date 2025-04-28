"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [campusesOpen, setCampusesOpen] = useState(false);
  const [mobileDepartmentsOpen, setMobileDepartmentsOpen] = useState(false);
  const [mobileCampusesOpen, setMobileCampusesOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setDepartmentsOpen(false);
        setCampusesOpen(false);
      }
    };

    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, []);


  return (
    <header className="bg-neutral-900 text-white">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Site Name */}
          <Link href="/" className="text-xl font-bold text-gitam-blue">
            University News Portal
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            aria-label="Toggle menu" 
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4">
            <li><Link href="/" className="py-2 px-3 hover:text-gitam-blue transition-colors">Home</Link></li>
            
            {/* Departments Dropdown */}
            <li className="relative group dropdown-container">
              <button 
                className="py-2 px-3 flex items-center hover:text-gitam-blue transition-colors focus:outline-none"
                aria-expanded={departmentsOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setDepartmentsOpen(!departmentsOpen);
                  setCampusesOpen(false);
                }}
              >
                Departments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul 
                className={`absolute left-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-1 z-10 ${departmentsOpen ? 'block' : 'hidden'}`} 
                aria-label="Departments submenu"
              >
                <li><Link href="/news" className="block px-4 py-2 text-sm hover:bg-neutral-700">Computer Science</Link></li>
                <li><Link href="/news" className="block px-4 py-2 text-sm hover:bg-neutral-700">Engineering</Link></li>
                <li><Link href="/news" className="block px-4 py-2 text-sm hover:bg-neutral-700">Business</Link></li>
                <li><Link href="/news" className="block px-4 py-2 text-sm hover:bg-neutral-700">Arts</Link></li>
                <li><Link href="/news" className="block px-4 py-2 text-sm hover:bg-neutral-700">Science</Link></li>
              </ul>
            </li>
            
            {/* Campuses Dropdown */}
            <li className="relative group dropdown-container">
              <button 
                className="py-2 px-3 flex items-center hover:text-gitam-blue transition-colors focus:outline-none"
                aria-expanded={campusesOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setCampusesOpen(!campusesOpen);
                  setDepartmentsOpen(false);
                }}
              >
                Campuses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul 
                className={`absolute left-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-1 z-10 ${campusesOpen ? 'block' : 'hidden'}`}
                aria-label="Campuses submenu"
              >
                <li><Link href="/campus/visakhapatnam" className="block px-4 py-2 text-sm hover:bg-neutral-700">Visakhapatnam</Link></li>
                <li><Link href="/campus/hyderabad" className="block px-4 py-2 text-sm hover:bg-neutral-700">Hyderabad</Link></li>
                <li><Link href="/campus/bengaluru" className="block px-4 py-2 text-sm hover:bg-neutral-700">Bengaluru</Link></li>
              </ul>
            </li>
            
            <li><Link href="/calendar" className="py-2 px-3 hover:text-gitam-blue transition-colors">Events</Link></li>
            <li><Link href="/news" className="py-2 px-3 hover:text-gitam-blue transition-colors">News</Link></li>
            <li><Link href="/contact" className="py-2 px-3 hover:text-gitam-blue transition-colors">Contact Us</Link></li>
            
            {/* Login/Signup */}
            <li>
              {session ? (
                <Link 
                  href="/profile" 
                  className="py-2 px-3 bg-gitam-navy hover:bg-gitam-navy-hover rounded-md transition-colors"
                >
                  Profile
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="py-2 px-3 bg-gitam-navy hover:bg-gitam-navy-hover rounded-md transition-colors"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="block py-2 hover:text-gitam-blue transition-colors">Home</Link></li>
            
            {/* Mobile Departments Dropdown */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 hover:text-gitam-blue transition-colors focus:outline-none"
                aria-expanded={mobileDepartmentsOpen}
                onClick={() => setMobileDepartmentsOpen(!mobileDepartmentsOpen)}
              >
                Departments
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul 
                className={`pl-4 mt-2 space-y-2 ${mobileDepartmentsOpen ? 'block' : 'hidden'}`}
                aria-label="Departments submenu"
              >
                <li><Link href="/news" className="block py-2 hover:text-gitam-blue">Computer Science</Link></li>
                <li><Link href="/news" className="block py-2 hover:text-gitam-blue">Engineering</Link></li>
                <li><Link href="/news" className="block py-2 hover:text-gitam-blue">Business</Link></li>
                <li><Link href="/news" className="block py-2 hover:text-gitam-blue">Arts</Link></li>
                <li><Link href="/news" className="block py-2 hover:text-gitam-blue">Science</Link></li>
              </ul>
            </li>
            
            {/* Mobile Campuses Dropdown */}
            <li>
              <button 
                className="flex justify-between items-center w-full py-2 hover:text-gitam-blue transition-colors focus:outline-none"
                aria-expanded={mobileCampusesOpen}
                onClick={() => setMobileCampusesOpen(!mobileCampusesOpen)}
              >
                Campuses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul 
                className={`pl-4 mt-2 space-y-2 ${mobileCampusesOpen ? 'block' : 'hidden'}`}
                aria-label="Campuses submenu"
              >
                <li><Link href="/campus/visakhapatnam" className="block py-2 hover:text-gitam-blue">Visakhapatnam</Link></li>
                <li><Link href="/campus/hyderabad" className="block py-2 hover:text-gitam-blue">Hyderabad</Link></li>
                <li><Link href="/campus/bengaluru" className="block py-2 hover:text-gitam-blue">Bengaluru</Link></li>
              </ul>
            </li>
            
            <li><Link href="/calendar" className="block py-2 hover:text-gitam-blue transition-colors">Events</Link></li>
            <li><Link href="/news" className="block py-2 hover:text-gitam-blue transition-colors">News</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-gitam-blue transition-colors">Contact Us</Link></li>
            
            {/* Mobile Login/Signup */}
            <li>
              {session ? (
                <Link 
                  href="/profile" 
                  className="block py-2 px-3 bg-gitam-navy hover:bg-gitam-navy-hover rounded-md text-center transition-colors"
                >
                  Profile
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="block py-2 px-3 bg-gitam-navy hover:bg-gitam-navy-hover rounded-md text-center transition-colors"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 