"use client";

import Hero from "@/components/Hero";
import { useState, useEffect } from "react";

const homeSlides = [
  {
    title: "Trending Now in the City",
    subtitle: "Stay updated with local events, politics, and culture.",
    image: "https://source.unsplash.com/1600x900/?city,news",
    buttonText: "Read More",
  },
  {
    title: "Breaking Headlines",
    subtitle: "Top stories shaping today's business landscape.",
    image: "https://source.unsplash.com/1600x900/?breaking,news",
    buttonText: "Explore",
  },
];

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: "City Nightlife Thrives Again",
    excerpt:
      "After months of quiet streets, cafes and clubs are buzzing with energy again. Discover what's trending downtown.",
    image: "https://source.unsplash.com/600x400/?city,night",
    category: "Lifestyle",
    date: "2 hours ago",
    url: "#",
  },
  {
    id: 2,
    title: "Market Updates You Need",
    excerpt:
      "Stocks are surging as global markets respond to new trade deals. Here's what it means for local businesses.",
    image: "https://source.unsplash.com/600x400/?business,stock",
    category: "Business",
    date: "5 hours ago",
    url: "#",
  },
  {
    id: 3,
    title: "Jobs on the Rise",
    excerpt:
      "From tech startups to local shops, job listings are expanding fast. Find opportunities trending near you.",
    image: "https://source.unsplash.com/600x400/?jobs,career",
    category: "Employment",
    date: "1 day ago",
    url: "#",
  },
];

// Trending in the city section start
const trendingTopics = [
  {
    rank: 1,
    title: "Food Festival brings global flavors downtown.",
    url: "#",
  },
  {
    rank: 2,
    title: "Tech startup hub launches new incubator program.",
    url: "#",
  },
  {
    rank: 3,
    title: "Local sports team sets new winning streak.",
    url: "#",
  },
  {
    rank: 4,
    title: "MMA fight draws record audience.",
    url: "https://www.mmafighting.com/",
  },
];

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header with date/time */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-sm">
          <div className="font-medium">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Hero slides={homeSlides} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Headline Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4 md:mb-0 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Latest News
          </h1>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Local
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md">
              National
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md">
              International
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-md">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {article.date}
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:shadow-md">
                  Read More
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advertisement Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-purple-500/20"></div>
            <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-pink-500/20"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Reach Thousands of Engaged Readers</h2>
              <p className="mb-6 text-purple-100 text-lg">Promote your business to our dedicated audience.</p>
              <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Advertise With Us
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Trending topics */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trending in the City */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-100 text-gray-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                Trending in the City
              </h2>
              <ul className="space-y-4">
                {trendingTopics.map((topic) => (
                  <li key={topic.rank}>
                    <button
                      onClick={() => window.open(topic.url, "_blank")}
                      className="flex items-start gap-4 p-3 w-full text-left rounded-xl hover:bg-blue-50 transition-all duration-300 group/trending"
                    >
                      <span className="text-blue-600 font-bold text-xl flex-shrink-0 transform group-hover/trending:scale-110 transition-transform duration-300">
                        #{topic.rank}
                      </span>
                      <span className="text-gray-700 group-hover/trending:text-blue-600 transition-colors duration-300">
                        {topic.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 py-3 text-center text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-all duration-300 flex items-center justify-center group/viewall">
                View all trends
                <svg className="w-4 h-4 ml-1 transform group-hover/viewall:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-md p-6 overflow-hidden relative">
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Stay Updated
                </h2>
                <p className="text-blue-100 mb-5">
                  Get the latest news delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 border-0 shadow-sm"
                  />
                  <button className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Additional content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-100 text-gray-800">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/400x300/?technology" 
                      alt="Technology" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors duration-300">Tech Innovations Changing Our City</h3>
                  <p className="text-gray-600 text-sm mb-3">How local startups are transforming the tech landscape with groundbreaking solutions.</p>
                  <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors duration-300">
                    Read story
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/400x300/?culture" 
                      alt="Culture" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors duration-300">Cultural Events This Weekend</h3>
                  <p className="text-gray-600 text-sm mb-3">From art exhibitions to live performances, don't miss these cultural highlights.</p>
                  <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors duration-300">
                    Read story
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  );
}