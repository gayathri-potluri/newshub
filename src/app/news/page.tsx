"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import { useSession } from "next-auth/react";

// Define types for news items and session
interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface NewsItem {
  _id: string;
  title: string;
  department: string;
  createdAt: string;
  author: { username: string };
  content: string;
  likes: string[];
  bookmarks: string[];
}

// News data with structure compatible with NewsCard component
const newsItems: NewsItem[] = [
  {
    _id: "1",
    title: "University Receives Grant for Research Excellence",
    department: "Computer Science",
    createdAt: "2023-04-27T09:00:00Z",
    author: { username: "Dr. Johnson" },
    content: "Our university has been awarded a prestigious grant to support ongoing research in computer science and engineering departments. The grant will fund advanced studies in artificial intelligence, machine learning, and data science.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "2",
    title: "New Arts Program Launching Next Semester",
    department: "Arts",
    createdAt: "2023-04-25T10:30:00Z",
    author: { username: "Prof. Williams" },
    content: "The Arts Department is excited to announce a new program focused on digital media and contemporary art practices. This interdisciplinary program will combine traditional art techniques with cutting-edge digital tools and technologies.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "3",
    title: "Business School Partners with Industry Leaders",
    department: "Business",
    createdAt: "2023-04-23T14:45:00Z",
    author: { username: "Dean Thompson" },
    content: "Our Business School has formed new partnerships with leading companies to provide internship opportunities for students. These partnerships will enable students to gain valuable industry experience and apply their academic knowledge in real-world business settings.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "4",
    title: "Engineering Department Unveils New Robotics Lab",
    department: "Engineering",
    createdAt: "2023-04-20T11:15:00Z",
    author: { username: "Dr. Patel" },
    content: "The Engineering Department has opened a state-of-the-art robotics laboratory equipped with the latest technology. This facility will enable students to work on advanced robotics projects and research in automation, AI, and mechanical engineering applications.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "5",
    title: "Sciences Department Discovers New Compound",
    department: "Sciences",
    createdAt: "2023-04-18T08:30:00Z",
    author: { username: "Prof. Zhang" },
    content: "Researchers in our Sciences Department have discovered a new compound with potential applications in pharmaceuticals. This breakthrough could lead to the development of more effective medications for treating various illnesses.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "6",
    title: "Computer Science Faculty Wins International Award",
    department: "Computer Science",
    createdAt: "2023-04-15T16:00:00Z",
    author: { username: "Dr. Anderson" },
    content: "Professor Robert Chen from our Computer Science Department has been awarded the prestigious International Computing Excellence Award for his groundbreaking work in quantum computing algorithms.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "7",
    title: "Arts Exhibition Showcases Student Talent",
    department: "Arts",
    createdAt: "2023-04-12T13:20:00Z",
    author: { username: "Sarah Miller" },
    content: "The annual student arts exhibition opened this week, featuring exceptional works from undergraduate and graduate students in our Arts program. The exhibition includes paintings, sculptures, digital art, and multimedia installations.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "8",
    title: "University Signs Agreement with International Institutions",
    department: "Business",
    createdAt: "2023-04-10T09:45:00Z",
    author: { username: "President Richards" },
    content: "Our university has signed exchange agreements with five leading international institutions, expanding opportunities for student exchanges, joint research projects, and collaborative academic programs.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "9",
    title: "Engineering Students Win National Competition",
    department: "Engineering",
    createdAt: "2023-04-07T15:30:00Z",
    author: { username: "Prof. Martinez" },
    content: "A team of engineering students has won first place in the National Engineering Design Competition with their innovative sustainable energy solution. The project demonstrated exceptional creativity and practical application of engineering principles.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "10",
    title: "Sciences Department Receives Environmental Research Grant",
    department: "Sciences",
    createdAt: "2023-04-05T10:00:00Z",
    author: { username: "Dr. Nakamura" },
    content: "Our Sciences Department has been awarded a major grant to study the effects of climate change on local ecosystems. The research will focus on developing strategies for environmental conservation and sustainability.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "11",
    title: "Computer Science Department Launches New Cybersecurity Center",
    department: "Computer Science",
    createdAt: "2023-04-03T11:30:00Z",
    author: { username: "Dr. Washington" },
    content: "The Computer Science Department has established a new Cybersecurity Research Center to address growing security challenges in the digital world. The center will focus on developing advanced security protocols and training the next generation of cybersecurity specialists.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "12",
    title: "Arts Department Introduces Virtual Reality Lab",
    department: "Arts",
    createdAt: "2023-03-30T14:00:00Z",
    author: { username: "Prof. Garcia" },
    content: "Our Arts Department has opened a new Virtual Reality Lab where students can explore the intersection of art and technology. The facility includes the latest VR equipment and software for creating immersive artistic experiences.",
    likes: [],
    bookmarks: [],
  },
  {
    _id: "13",
    title: "Business School Ranked Among Top 50 Globally",
    department: "Business",
    createdAt: "2023-03-28T09:15:00Z",
    author: { username: "Dean Wilson" },
    content: "The Business School has been ranked among the top 50 business schools globally in the latest international university rankings. This recognition reflects our commitment to excellence in business education and research.",
    likes: [],
    bookmarks: [],
  },
];

export default function NewsPage() {
  const { data: session } = useSession();
  const userId = session?.user ? (session.user as User).id : undefined;
  
  // Filter states
  const [department, setDepartment] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [newsData, setNewsData] = useState<NewsItem[]>(newsItems);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsItems);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5;

  // Handle like functionality
  const handleLike = (newsId: string) => {
    if (!userId) return;
    
    setNewsData(prevNews => 
      prevNews.map(item => {
        if (item._id === newsId) {
          const isLiked = item.likes.includes(userId);
          return {
            ...item,
            likes: isLiked
              ? item.likes.filter(id => id !== userId)
              : [...item.likes, userId]
          };
        }
        return item;
      })
    );
  };

  // Handle bookmark functionality
  const handleBookmark = (newsId: string) => {
    if (!userId) return;
    
    setNewsData(prevNews => 
      prevNews.map(item => {
        if (item._id === newsId) {
          const isBookmarked = item.bookmarks.includes(userId);
          return {
            ...item,
            bookmarks: isBookmarked
              ? item.bookmarks.filter(id => id !== userId)
              : [...item.bookmarks, userId]
          };
        }
        return item;
      })
    );
  };
  
  // Apply filters
  useEffect(() => {
    let filtered = [...newsData];
    
    // Filter by department
    if (department) {
      filtered = filtered.filter(item => item.department === department);
    }
    
    // Filter by date range
    if (dateRange) {
      const today = new Date();
      const filterDate = new Date();
      
      switch (dateRange) {
        case "week":
          filterDate.setDate(today.getDate() - 7);
          break;
        case "month":
          filterDate.setMonth(today.getMonth() - 1);
          break;
        case "year":
          filterDate.setFullYear(today.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(item => new Date(item.createdAt) >= filterDate);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        item => item.title.toLowerCase().includes(term) || 
               item.content.toLowerCase().includes(term) ||
               item.author.username.toLowerCase().includes(term)
      );
    }
    
    setFilteredNews(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [department, dateRange, searchTerm, newsData]);
  
  // Get current news items
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  
  // Calculate page numbers
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  
  // Handle filter changes
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
  };
  
  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateRange(e.target.value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">University News</h1>
      
      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={handleDepartmentChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Arts">Arts</option>
              <option value="Sciences">Sciences</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select
              id="date"
              value={dateRange}
              onChange={handleDateRangeChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search news..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Results display */}
      {filteredNews.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center mb-8">
          <p className="text-yellow-700">No news articles match your filter criteria. Please try different filters.</p>
        </div>
      ) : (
        <p className="text-gray-600 mb-4">Showing {filteredNews.length} results</p>
      )}
      
      {/* News List */}
      <div className="grid grid-cols-1 gap-8">
        {currentNews.map((news) => (
          <NewsCard 
            key={news._id} 
            news={news} 
            onLike={handleLike} 
            onBookmark={handleBookmark} 
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className={`px-3 py-2 border rounded-md ${
              currentPage === 1 
              ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed" 
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-2 border ${
                currentPage === index + 1
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            type="button"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className={`px-3 py-2 border rounded-md ${
              currentPage === totalPages 
              ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed" 
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
} 