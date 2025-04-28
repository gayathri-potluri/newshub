"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState("month"); // "month" or "list"
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Event Calendar</h1>
          <button 
            onClick={toggleDarkMode} 
            className={`${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'} p-2 rounded-md`}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>Stay updated with upcoming events across all our campuses and departments.</p>
        
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <button className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} px-3 py-2 rounded-l-md transition-colors`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h2 className="text-xl font-semibold">April 2025</h2>
            <button className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} px-3 py-2 rounded-r-md transition-colors`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCurrentView("today")}
              className={`px-4 py-2 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-800'} text-white rounded-md transition-colors`}
            >
              Today
            </button>
            
            
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setCurrentView("month")}
                className={`px-4 py-2 text-sm font-medium ${
                  currentView === "month"
                    ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-800 text-white'
                    : isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-l-md transition-colors`}
              >
                Month
              </button>
              <button
                onClick={() => setCurrentView("list")}
                className={`px-4 py-2 text-sm font-medium ${
                  currentView === "list"
                    ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-800 text-white'
                    : isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-r-md transition-colors`}
              >
                List
              </button>
            </div>
          </div>
        </div>
        
        {currentView === "month" ? (
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow overflow-hidden transition-colors`}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Sun</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Mon</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Tue</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Wed</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Thu</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Fri</th>
                  <th className={`px-6 py-3 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>Sat</th>
                </tr>
              </thead>
              <tbody className={`${isDarkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                {/* Week 1 */}
                <tr className={`divide-x ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  <td className={`px-2 py-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">30</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">1</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">2</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Faculty Meeting</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">3</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">4</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">5</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Research Symposium</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">6</div>
                  </td>
                </tr>
                
                {/* Week 2 */}
                <tr className={`divide-x ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">7</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">8</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>CS Workshop</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">9</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">10</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">11</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Guest Lecture</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">12</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Research Symposium</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">13</div>
                  </td>
                </tr>
                
                {/* Week 3 */}
                <tr className={`divide-x ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">14</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Career Fair 2023</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">15</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Int'l Research Conf</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Campus Tour</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">16</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>AI Workshop</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">17</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">18</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Int'l Research Conf</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">19</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">20</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Cultural Festival</div>
                  </td>
                </tr>
                
                {/* Week 4 */}
                <tr className={`divide-x ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">21</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">22</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">23</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Science Exhibition</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">24</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">25</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>Alumni Meet</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">26</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">27</div>
                  </td>
                </tr>
                
                {/* Week 5 */}
                <tr className={`divide-x ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">28</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">29</div>
                    <div className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} rounded p-1 text-xs mb-1`}>Tech Meetup</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">30</div>
                  </td>
                  <td className={`px-2 py-2 text-sm align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">31</div>
                    <div className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} rounded p-1 text-xs mb-1`}>End of Month Review</div>
                  </td>
                  <td className={`px-2 py-2 text-sm text-gray-400 align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">1</div>
                  </td>
                  <td className={`px-2 py-2 text-sm text-gray-400 align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">2</div>
                  </td>
                  <td className={`px-2 py-2 text-sm text-gray-400 align-top h-32 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="text-right mb-2">3</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Event 1 */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden border-t-4 border-blue-500 transition-colors`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Annual Science Exhibition</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Computer Science Department</p>
                  </div>
                  <span className={`${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs font-medium px-2.5 py-0.5 rounded`}>
                    May 15, 2023
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Students will showcase their innovative projects and research in the field of computer science and information technology.
                </p>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    <strong>Time:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Location:</strong> Main Auditorium, Visakhapatnam Campus
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sample Event 2 */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden border-t-4 border-purple-500 transition-colors`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Business Leadership Conference</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Business Department</p>
                  </div>
                  <span className={`${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'} text-xs font-medium px-2.5 py-0.5 rounded`}>
                    June 8, 2023
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Join us for a day of inspirational talks from industry leaders and networking opportunities for business students.
                </p>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    <strong>Time:</strong> 9:00 AM - 5:00 PM
                  </p>
                  <p>
                    <strong>Location:</strong> Conference Hall, Bengaluru Campus
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sample Event 3 */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden border-t-4 border-amber-500 transition-colors`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Art & Design Exhibition</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Arts Department</p>
                  </div>
                  <span className={`${isDarkMode ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'} text-xs font-medium px-2.5 py-0.5 rounded`}>
                    May 20, 2023
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  A showcase of student artwork and design projects, featuring various mediums and contemporary techniques.
                </p>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    <strong>Time:</strong> 11:00 AM - 7:00 PM
                  </p>
                  <p>
                    <strong>Location:</strong> Art Gallery, Hyderabad Campus
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Legend */}
        <div className={`mt-8 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Event Types</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
              <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-700'} text-sm`}>Orientation</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-600 mr-2"></span>
              <span className={`${isDarkMode ? 'text-green-300' : 'text-green-700'} text-sm`}>Academic</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
              <span className={`${isDarkMode ? 'text-purple-300' : 'text-purple-700'} text-sm`}>Exhibition</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-600 mr-2"></span>
              <span className={`${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'} text-sm`}>Alumni</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></span>
              <span className={`${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} text-sm`}>Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 