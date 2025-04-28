import NewsTicker from "@/components/NewsTicker";
import Link from "next/link";
import Image from "next/image";
//import { ChevronLeftIcon, ChevronRightIcon, FunnelIcon } from "@heroicons/react/24/outline";

interface NewsItem {
  id: string;
  title: string;
  link: string;
  department?: string;
  excerpt?: string;
  author?: string;
  date?: string;
}

export default function Home() {
// Mock data for news ticker
const tickerItems: NewsItem[] = [
  { id: '1', title: 'Computer Science Department Wins National Coding Championship', link: '/newspgs/newspg.html' },
  { id: '2', title: 'Engineering Faculty Publishes Groundbreaking Research in Renewable Energy', link: '/newspgs/newspg.html' },
  { id: '3', title: 'Business School Launches New MBA Program with Industry Partnerships', link: '/newspgs/newspg.html' },
  { id: '4', title: 'Arts Department Announces International Exhibition Series', link: '/newspgs/newspg.html' },
  { id: '5', title: 'Visakhapatnam Campus Opens New Research Center', link: '/newspgs/newspg.html' },
];

// Mock data for featured news
const featuredNews: NewsItem[] = [
  { 
    id: '1', 
    title: 'University Team Wins National Coding Championship', 
    link: '/newspgs/newspg.html',
    department: 'computer-science',
    excerpt: 'Our Computer Science students secured first place in the prestigious National Coding Championship, demonstrating exceptional problem-solving skills and algorithmic thinking.',
    author: 'Dr. Rajesh Kumar',
    date: 'May 10, 2023'
  },
  { 
    id: '2', 
    title: 'Faculty Publishes Groundbreaking Research in Renewable Energy', 
    link: '/newspgs/newspg.html',
    department: 'engineering',
    excerpt: 'Dr. Priya Sharma\'s research on sustainable energy solutions has been published in the International Journal of Engineering, making significant contributions to solar technology development.',
    author: 'Dr. Priya Sharma',
    date: 'May 8, 2023'
  },
  { 
    id: '3', 
    title: 'Business School Launches New MBA Program with Industry Partnerships', 
    link: '/newspgs/newspg.html',
    department: 'business',
    excerpt: 'Our Business School has introduced an innovative MBA program featuring collaborations with leading corporations, providing students with real-world experience and mentorship opportunities.',
    author: 'Prof. Amit Patel',
    date: 'May 7, 2023'
  },
  { 
    id: '4', 
    title: 'Arts Department Announces International Exhibition Series', 
    link: '/newspgs/newspg.html',
    department: 'arts',
    excerpt: 'The Arts Department is proud to announce a series of international exhibitions featuring works from our students and faculty alongside renowned artists from around the world.',
    author: 'Dr. Meera Reddy',
    date: 'May 6, 2023'
  },
  { 
    id: '5', 
    title: 'Biotechnology Breakthrough: New Research on Cancer Treatment', 
    link: '/newspgs/newspg.html',
    department: 'science',
    excerpt: 'Scientists from our Science Department have made a significant breakthrough in cancer research, developing a novel approach that shows promising results in early-stage clinical trials.',
    author: 'Dr. Vikram Rao',
    date: 'May 5, 2023'
  },
  { 
    id: '6', 
    title: 'New AI Research Lab Established with Industry Funding', 
    link: '/newspgs/newspg.html',
    department: 'computer-science',
    excerpt: 'The Computer Science Department has secured substantial funding to establish a state-of-the-art AI research laboratory that will focus on developing practical applications for emerging technologies.',
    author: 'Prof. Sanjay Gupta',
    date: 'May 4, 2023'
  }
];

  
  return (
    <>
      <NewsTicker items={tickerItems} />
      
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-neutral-900 to-gitam-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">University News &amp; Events Portal</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-300">Stay informed with the latest news, events, and announcements from all university departments and campuses.</p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/news" className="bg-gitam-blue hover:bg-blue-400 text-gitam-navy font-bold py-3 px-6 rounded-md transition-colors">
                  Latest News
                </Link>
                <Link href="/calendar" className="bg-[#FF9900] hover:bg-[#E08800] text-white font-bold py-3 px-6 rounded-md transition-colors">
                  Upcoming Events
                </Link>
              </div>
              
              <div className="mt-10 bg-neutral-800 bg-opacity-50 p-4 rounded-lg border-l-4 border-gitam-blue">
                <h3 className="font-bold text-xl mb-2">Featured Highlight</h3>
                <p className="mb-2">International Research Conference on Environmental Sustainability</p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF9900] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 15-18, 2023 • Visakhapatnam Campus</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate__animated animate__fadeInRight">
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-gitam-blue opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#FF9900] opacity-20 rounded-full blur-xl"></div>
              
              <div className="bg-neutral-800 p-6 rounded-xl shadow-2xl relative z-10 transform transition-all hover:scale-[1.02]">
                <h2 className="text-2xl font-bold mb-4 text-center border-b border-neutral-700 pb-2">This Week's Highlights</h2>
                
                <div className="space-y-4 mt-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-gitam-navy p-2 rounded-md text-center min-w-[4rem]">
                      <div className="text-xs uppercase">May</div>
                      <div className="text-xl font-bold">12</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Research Symposium</h3>
                      <p className="text-sm text-gray-300">Engineering Department</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-gitam-navy p-2 rounded-md text-center min-w-[4rem]">
                      <div className="text-xs uppercase">May</div>
                      <div className="text-xl font-bold">14</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Career Fair 2023</h3>
                      <p className="text-sm text-gray-300">Business Department</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <div className="bg-gitam-navy p-2 rounded-md text-center min-w-[4rem]">
                      <div className="text-xs uppercase">May</div>
                      <div className="text-xl font-bold">16</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI &amp; Machine Learning Workshop</h3>
                      <p className="text-sm text-gray-300">Computer Science Department</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link href="/calendar" className="inline-flex items-center text-gitam-blue hover:underline">
                    View All Events
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-neutral-800 bg-opacity-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gitam-blue mb-2">3</div>
              <div className="text-gray-300">Campuses</div>
            </div>
            <div className="bg-neutral-800 bg-opacity-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gitam-blue mb-2">5+</div>
              <div className="text-gray-300">Departments</div>
            </div>
            <div className="bg-neutral-800 bg-opacity-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-gitam-blue mb-2">50+</div>
              <div className="text-gray-300">Monthly Events</div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-8">
        {/* Latest News Section */}
        <section id="featured-news" className="py-16 bg-blue-50 -mx-4">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Featured News</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">Stay updated with the latest news and announcements from all departments across our campuses.</p>
            </div>

            {/* Department Filter Tabs */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <button className="department-filter-btn active bg-blue-600 text-white px-4 py-2 rounded-md transition-colors" data-department="all">
                  All Departments
                </button>
                <button className="department-filter-btn bg-blue-200 text-blue-800 hover:bg-blue-300 px-4 py-2 rounded-md transition-colors" data-department="computer-science">
                  Computer Science
                </button>
                <button className="department-filter-btn bg-blue-200 text-blue-800 hover:bg-blue-300 px-4 py-2 rounded-md transition-colors" data-department="engineering">
                  Engineering
                </button>
                <button className="department-filter-btn bg-blue-200 text-blue-800 hover:bg-blue-300 px-4 py-2 rounded-md transition-colors" data-department="business">
                  Business
                </button>
                <button className="department-filter-btn bg-blue-200 text-blue-800 hover:bg-blue-300 px-4 py-2 rounded-md transition-colors" data-department="arts">
                  Arts
                </button>
                <button className="department-filter-btn bg-blue-200 text-blue-800 hover:bg-blue-300 px-4 py-2 rounded-md transition-colors" data-department="science">
                  Science
                </button>
              </div>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredNews.map((news) => (
                <article key={news.id} className="news-card bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 duration-300" data-department={news.department}>
                  <div className="h-48 relative overflow-hidden group">
                    {news.department === 'computer-science' && (
                      <Image 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                        alt="Computer Science" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {news.department === 'engineering' && (
                      <Image 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
                        alt="Engineering" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {news.department === 'business' && (
                      <Image 
                        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2071" 
                        alt="Business" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {news.department === 'arts' && (
                      <Image 
                        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080" 
                        alt="Arts" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {news.department === 'science' && (
                      <Image 
                        src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2187" 
                        alt="Science" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    <div className="absolute top-0 left-0 m-4">
                      <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                        {news.department === 'computer-science' && 'Computer Science'}
                        {news.department === 'engineering' && 'Engineering'}
                        {news.department === 'business' && 'Business'}
                        {news.department === 'arts' && 'Arts'}
                        {news.department === 'science' && 'Science'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-800">
                      <Link href={news.link} className="hover:text-blue-600">{news.title}</Link>
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="flex items-center text-sm text-neutral-500 mb-4">
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{news.author}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{news.date}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href={news.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <div className="flex space-x-2">
                        <button className="text-neutral-400 hover:text-blue-600 transition-colors" aria-label="Like article">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="text-neutral-400 hover:text-blue-600 transition-colors" aria-label="Bookmark article">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                        <button className="text-neutral-400 hover:text-blue-600 transition-colors copy-link-btn" data-url={news.link} aria-label="Copy link">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/news" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                View All News
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Link copied notification */}
          <div id="copy-notification" className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 transform translate-y-16 opacity-0 transition-all duration-300">
            Link copied to clipboard!
          </div>
        </section>
        
        {/* Event Calendar Section */}
        <section className="mb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Event Calendar</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Stay updated with all academic, cultural, and special events across all university campuses.</p>
            </div>
            
            {/* Calendar Controls */}
            <div className="bg-gray-900 rounded-t-lg border border-gray-700 p-4 mb-1 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center">
                  <button className="p-2 rounded-full hover:bg-gray-700 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <h3 className="text-xl font-semibold mx-4 text-white">April 2025</h3>
                  <button className="p-2 rounded-full hover:bg-gray-700 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-blue-300 rounded text-sm border border-gray-600">
                    Today
                  </button>
                 
                </div>
                
                <div className="flex space-x-1 bg-gray-800 rounded-md p-1 border border-gray-600">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                    Month
                  </button>
                  <button className="px-3 py-1 hover:bg-gray-700 text-blue-300 rounded text-sm">
                    List
                  </button>
                </div>
              </div>
            </div>
            
            {/* Calendar (Month View) */}
            <div className="bg-gray-800 rounded-b-lg border border-gray-700 shadow-lg overflow-hidden">
              <div className="grid grid-cols-7 border-b border-gray-700">
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Sun
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Mon
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Tue
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Wed
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Thu
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Fri
                </div>
                <div className="border-r border-b border-gray-700 py-2 text-center text-sm font-semibold text-blue-300">
                  Sat
                </div>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 min-h-[500px]">
                {/* Week 1 */}
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">27</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">28</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">29</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">30</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">31</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">1</div>
                  <div className="mt-1 p-1 text-xs bg-blue-900 text-blue-100 rounded shadow-sm border border-blue-700">
                    <div className="font-semibold">Orientation</div>
                    <div className="text-blue-200">9:00 AM</div>
                  </div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">2</div>
                </div>

                {/* Week 2 */}
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">3</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">4</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">5</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">6</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">7</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">8</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">9</div>
                </div>

                {/* Week 3 */}
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">10</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">11</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">12</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">13</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">14</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">15</div>
                  <div className="mt-1 p-1 text-xs bg-green-900 text-green-100 rounded shadow-sm border border-green-700">
                    <div className="font-semibold">Exam Registration</div>
                    <div className="text-green-200">All Day</div>
                  </div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">16</div>
                </div>

                {/* Week 4 */}
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">17</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">18</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">19</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">20</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">21</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">22</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">23</div>
                  <div className="mt-1 p-1 text-xs bg-purple-900 text-purple-100 rounded shadow-sm border border-purple-700">
                    <div className="font-semibold">Science Exhibition</div>
                    <div className="text-purple-200">10:00 AM</div>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">24</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">25</div>
                  <div className="mt-1 p-1 text-xs bg-yellow-900 text-yellow-100 rounded shadow-sm border border-yellow-700">
                    <div className="font-semibold">Alumni Meet</div>
                    <div className="text-yellow-200">5:00 PM</div>
                  </div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">26</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">27</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">28</div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">29</div>
                  <div className="mt-1 p-1 text-xs bg-indigo-900 text-indigo-100 rounded shadow-sm border border-indigo-700">
                    <div className="font-semibold">Tech Meetup</div>
                    <div className="text-indigo-200">2:00 PM</div>
                  </div>
                </div>
                <div className="border-r border-b border-gray-700 min-h-24 p-1 bg-gray-850">
                  <div className="text-white text-sm p-1">30</div>
                </div>

                {/* Upcoming month - Week 1 */}
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">1</div>
                </div>
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">2</div>
                </div>
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">3</div>
                </div>
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">4</div>
                </div>
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">5</div>
                </div>
                <div className="border-r border-gray-700 min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">6</div>
                </div>
                <div className="min-h-24 p-1 bg-gray-900 opacity-50">
                  <div className="text-gray-500 text-sm p-1">7</div>
                </div>
              </div>

              {/* Event Legend */}
              <div className="bg-gray-900 p-4 flex flex-wrap gap-4 border-t border-gray-700">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                  <span className="text-blue-300 text-sm">Orientation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-600 mr-2"></span>
                  <span className="text-green-300 text-sm">Academic</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
                  <span className="text-purple-300 text-sm">Exhibition</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-600 mr-2"></span>
                  <span className="text-yellow-300 text-sm">Alumni</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></span>
                  <span className="text-indigo-300 text-sm">Tech</span>
                </div>
              </div>

              {/* View Full Calendar Link */}
              <div className="mt-4 text-center">
                <Link href="/calendar" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  <span>View Full Calendar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
       
      
      </div>
      
      <script dangerouslySetInnerHTML={{__html: `
        // Department filtering
        document.addEventListener('DOMContentLoaded', function() {
          const filterButtons = document.querySelectorAll('.department-filter-btn');
          const newsCards = document.querySelectorAll('.news-card');
          
          filterButtons.forEach(button => {
            button.addEventListener('click', () => {
              // Update active button state
              filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-blue-200', 'text-blue-800', 'hover:bg-blue-300');
              });
              button.classList.add('active', 'bg-blue-600', 'text-white');
              button.classList.remove('bg-blue-200', 'text-blue-800', 'hover:bg-blue-300');
              
              // Filter news cards
              const department = button.getAttribute('data-department');
              
              if (department === 'all') {
                newsCards.forEach(card => {
                  card.style.display = 'block';
                  // Add animation
                  card.classList.add('animate__animated', 'animate__fadeIn');
                  setTimeout(() => {
                    card.classList.remove('animate__animated', 'animate__fadeIn');
                  }, 1000);
                });
              } else {
                newsCards.forEach(card => {
                  if (card.getAttribute('data-department') === department) {
                    card.style.display = 'block';
                    // Add animation
                    card.classList.add('animate__animated', 'animate__fadeIn');
                    setTimeout(() => {
                      card.classList.remove('animate__animated', 'animate__fadeIn');
                    }, 1000);
                  } else {
                    card.style.display = 'none';
                  }
                });
              }
            });
          });
          
          // Copy link functionality
          const copyButtons = document.querySelectorAll('.copy-link-btn');
          const copyNotification = document.getElementById('copy-notification');
          
          copyButtons.forEach(button => {
            button.addEventListener('click', () => {
              const url = window.location.href.split('#')[0] + button.getAttribute('data-url');
              
              // Copy to clipboard
              navigator.clipboard.writeText(url).then(() => {
                // Show notification
                copyNotification.classList.remove('translate-y-16', 'opacity-0');
                copyNotification.classList.add('translate-y-0', 'opacity-1');
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                  copyNotification.classList.remove('translate-y-0', 'opacity-1');
                  copyNotification.classList.add('translate-y-16', 'opacity-0');
                }, 3000);
              });
            });
          });

          // Calendar functionality
          // Toggle between month and list views
          const monthViewBtn = document.getElementById('month-view-btn');
          const listViewBtn = document.getElementById('list-view-btn');
          const calendarMonthView = document.getElementById('calendar-month-view');
          const calendarListView = document.getElementById('calendar-list-view');
          
          if (monthViewBtn && listViewBtn && calendarMonthView && calendarListView) {
            monthViewBtn.addEventListener('click', function() {
              // Update button styling
              monthViewBtn.classList.remove('bg-blue-200', 'hover:bg-blue-300');
              monthViewBtn.classList.add('bg-blue-600', 'text-white');
              listViewBtn.classList.remove('bg-blue-600', 'text-white');
              listViewBtn.classList.add('bg-blue-200', 'hover:bg-blue-300');
              
              // Show month view, hide list view
              calendarMonthView.classList.remove('hidden');
              calendarListView.classList.add('hidden');
            });
            
            listViewBtn.addEventListener('click', function() {
              // Update button styling
              listViewBtn.classList.remove('bg-blue-200', 'hover:bg-blue-300');
              listViewBtn.classList.add('bg-blue-600', 'text-white');
              monthViewBtn.classList.remove('bg-blue-600', 'text-white');
              monthViewBtn.classList.add('bg-blue-200', 'hover:bg-blue-300');
              
              // Show list view, hide month view
              calendarListView.classList.remove('hidden');
              calendarMonthView.classList.add('hidden');
            });
          }
          
          // Toggle filter dropdown
          const filterDropdownBtn = document.getElementById('filter-dropdown-btn');
          const filterDropdown = document.getElementById('filter-dropdown');
          
          if (filterDropdownBtn && filterDropdown) {
            filterDropdownBtn.addEventListener('click', function() {
              filterDropdown.classList.toggle('hidden');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
              if (!filterDropdownBtn.contains(event.target) && !filterDropdown.contains(event.target)) {
                filterDropdown.classList.add('hidden');
              }
            });
          }
          
          // Apply filter button
          const applyFilterBtn = document.getElementById('apply-filter');
          
          if (applyFilterBtn) {
            applyFilterBtn.addEventListener('click', function() {
              // Here we would implement actual filtering logic
              filterDropdown.classList.add('hidden');
              
              // Show a success message
              const successMessage = document.createElement('div');
              successMessage.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 animate__animated animate__fadeIn';
              successMessage.textContent = 'Filters applied successfully!';
              document.body.appendChild(successMessage);
              
              setTimeout(() => {
                successMessage.classList.remove('animate__fadeIn');
                successMessage.classList.add('animate__fadeOut');
                setTimeout(() => {
                  document.body.removeChild(successMessage);
                }, 1000);
              }, 3000);
            });
          }
          
          // Month navigation
          const prevMonthBtn = document.getElementById('prev-month');
          const nextMonthBtn = document.getElementById('next-month');
          const currentMonthDisplay = document.getElementById('current-month-display');
          
          if (prevMonthBtn && nextMonthBtn && currentMonthDisplay) {
            let currentDate = new Date();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            function updateMonthDisplay() {
              currentMonthDisplay.textContent = \`\${months[currentDate.getMonth()]} \${currentDate.getFullYear()}\`;
            }
            
            prevMonthBtn.addEventListener('click', function() {
              currentDate.setMonth(currentDate.getMonth() - 1);
              updateMonthDisplay();
              // Here we would load the previous month's data
            });
            
            nextMonthBtn.addEventListener('click', function() {
              currentDate.setMonth(currentDate.getMonth() + 1);
              updateMonthDisplay();
              // Here we would load the next month's data
            });
            
            // Today button
            const todayBtn = document.getElementById('today-btn');
            
            if (todayBtn) {
              todayBtn.addEventListener('click', function() {
                currentDate = new Date();
                updateMonthDisplay();
                // Here we would reset to current month's view
              });
            }
          }
        });
      `}} />
    </>
  );
}
