"use client";
/// 
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function NewsCard({ news, onLike, onBookmark }) {
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);
  
  const isLiked = session?.user ? news.likes.includes(session.user.id) : false;
  const isBookmarked = session?.user ? news.bookmarks.includes(session.user.id) : false;
  
  // Format date
  const formattedDate = new Date(news.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  // Handle copy link
  const copyLink = () => {
    const newsUrl = `${window.location.origin}/news/${news._id}`;
    navigator.clipboard.writeText(newsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Link href={`/news/${news._id}`} className="text-xl font-semibold text-blue-700 hover:text-blue-800 mb-2 block">
              {news.title}
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium text-blue-600">{news.department}</span> • {formattedDate}
            </p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-700 line-clamp-3">
            {news.content.length > 200
              ? `${news.content.substring(0, 200)}...`
              : news.content}
          </p>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <p className="text-sm text-gray-600">
              By <span className="font-medium">{news.author?.username || "Unknown"}</span>
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => session?.user && onLike(news._id)}
              className={`p-2 rounded-full ${
                isLiked ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500 hover:bg-gray-100"
              }`}
              disabled={!session?.user}
              title={session?.user ? "Like" : "Login to like"}
            >
              <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
            
            <button
              onClick={() => session?.user && onBookmark(news._id)}
              className={`p-2 rounded-full ${
                isBookmarked ? "text-yellow-500 bg-yellow-50" : "text-gray-400 hover:text-yellow-500 hover:bg-gray-100"
              }`}
              disabled={!session?.user}
              title={session?.user ? "Bookmark" : "Login to bookmark"}
            >
              <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </button>
            
            <button
              onClick={copyLink}
              className={`p-2 rounded-full ${
                copied ? "text-green-500 bg-green-50" : "text-gray-400 hover:text-blue-500 hover:bg-gray-100"
              }`}
              title="Copy link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}