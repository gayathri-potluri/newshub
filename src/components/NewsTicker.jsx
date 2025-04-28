"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * @typedef {Object} NewsItem
 * @property {string} id - Unique identifier for the news item
 * @property {string} title - Title of the news item
 * @property {string} link - Link to the news detail page
 */

/**
 * News ticker component that displays scrolling news headlines
 * @param {Object} props - Component props
 * @param {NewsItem[]} [props.items=[]] - Array of news items to display
 */
export default function NewsTicker({ items = [] }) {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef(null);
  
  // Default news items if none provided
  /**
   * @type {NewsItem[]}
   */
  const defaultItems = [
    { id: '1', title: 'Computer Science Department Wins National Coding Championship', link: '/news/1' },
    { id: '2', title: 'Engineering Faculty Publishes Groundbreaking Research in Renewable Energy', link: '/news/2' },
    { id: '3', title: 'Business School Launches New MBA Program with Industry Partnerships', link: '/news/3' },
    { id: '4', title: 'Arts Department Announces International Exhibition Series', link: '/news/4' },
    { id: '5', title: 'Visakhapatnam Campus Opens New Research Center', link: '/news/5' },
  ];
  
  const newsItems = items.length > 0 ? items : defaultItems;
  
  const togglePause = () => {
    setIsPaused(!isPaused);
    if (tickerRef.current) {
      tickerRef.current.style.animationPlayState = !isPaused ? 'paused' : 'running';
    }
  };
  
  // Pause ticker on hover
  useEffect(() => {
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    
    const handleMouseEnter = () => {
      if (tickerRef.current && !isPaused) {
        tickerRef.current.style.animationPlayState = 'paused';
      }
    };
    
    const handleMouseLeave = () => {
      if (tickerRef.current && !isPaused) {
        tickerRef.current.style.animationPlayState = 'running';
      }
    };
    
    if (tickerWrapper) {
      tickerWrapper.addEventListener('mouseenter', handleMouseEnter);
      tickerWrapper.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        tickerWrapper.removeEventListener('mouseenter', handleMouseEnter);
        tickerWrapper.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isPaused]);
  
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2 relative overflow-hidden">
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        
        .animate-ticker-paused {
          animation-play-state: paused;
        }
        
        .ticker-item {
          position: relative;
          display: inline-block;
          margin-right: 30px;
        }
        
        .ticker-item:not(:last-child)::after {
          content: "•";
          display: inline-block;
          position: absolute;
          right: -20px;
          color: #A3BFFA;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="ticker-wrapper overflow-hidden relative w-full">
            <ul 
              ref={tickerRef} 
              className={`whitespace-nowrap inline-block animate-ticker ${isPaused ? 'animate-ticker-paused' : ''}`}
              style={{ animation: 'ticker 30s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {newsItems.map((item) => (
                <li key={item.id} className="ticker-item inline-block px-4">
                  <Link href={item.link} className="hover:text-blue-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="ml-3 flex space-x-2">
            {!isPaused ? (
              <button 
                onClick={togglePause} 
                className="p-1 hover:bg-blue-800 rounded-full focus:outline-none" 
                aria-label="Pause news ticker"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            ) : (
              <button 
                onClick={togglePause} 
                className="p-1 hover:bg-blue-800 rounded-full focus:outline-none" 
                aria-label="Play news ticker"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 