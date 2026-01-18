"use client";

import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import { useState, useEffect } from "react";

const businessSlides = [
  {
    title: "Market Insights",
    subtitle: "Stay informed about the latest in trade and industry.",
    image: "https://source.unsplash.com/1600x900/?business,city",
    buttonText: "Discover",
  },
  {
    title: "Startups & Innovation",
    subtitle: "See how entrepreneurs are reshaping Barak's future.",
    image: "https://source.unsplash.com/1600x900/?startup,office",
    buttonText: "Learn More",
  },
];

export default function BusinessPage() {
  const [trending, setTrending] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("highlights");

  useEffect(() => {
    // Mock fetch data (replace with API later)
    setTrending([
      "New tech park inaugurated in Barak Valley",
      "Barak startups secure ₹5 Cr funding",
      "Local businesses booming after festival season",
      "Silchar to host Northeast Business Summit 2024",
      "Cachar Tea exports increase by 15% this quarter",
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <Hero slides={businessSlides} />

      {/* Business Highlights */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 border-b border-gray-700/50 pb-2">
          <button
            onClick={() => setActiveTab("highlights")}
            className={`px-4 py-2 rounded-t-lg font-medium transition-all ${activeTab === "highlights" ? "bg-blue-500/20 text-blue-300 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Highlights
          </button>
          <button
            onClick={() => setActiveTab("snapshot")}
            className={`px-4 py-2 rounded-t-lg font-medium transition-all ${activeTab === "snapshot" ? "bg-blue-500/20 text-blue-300 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Silchar Snapshot
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-2 rounded-t-lg font-medium transition-all ${activeTab === "resources" ? "bg-blue-500/20 text-blue-300 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`}
          >
            Resources
          </button>
        </div>

        {activeTab === "highlights" && (
          <div className="mb-12 animate-fadeIn">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Business Highlights
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  Trending Now
                </h2>
                <ul className="space-y-4">
                  {trending.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.01] flex items-start"
                    >
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured Story
                </h2>
                <div className="p-4 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg border border-cyan-500/30">
                  <h3 className="text-lg font-semibold mb-2 text-cyan-300">Barak Valley Economic Growth Exceeds Expectations</h3>
                  <p className="text-gray-300 mb-3">The region has seen a 7.2% growth in GDP this year, outpacing national averages with strong performance in tea, manufacturing, and technology sectors.</p>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center">
                    Read full report
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "snapshot" && (
          <div className="animate-fadeIn">
            {/* Silchar Snapshot */}
            <Snapshot
              heading="Silchar Business Snapshot"
              sections={[
                {
                  title: "Key Industries",
                  items: [
                    "Tea production (over 100 estates: Doloo, Dewan, Koomber)",
                    "Cachar Paper Mill – bamboo-based paper",
                    "ONGC base at Srikona",
                    "Bamboo & cane artisan clusters",
                  ],
                },
                {
                  title: "Local Enterprises",
                  items: [
                    "Cachar Alloys – steel manufacturing",
                    "Assam Steel – wholesale hardware & tools",
                    "Bharat Industries – grain milling & food processing",
                    "City Style – beauty & retail services",
                  ],
                },
                {
                  title: "Civic & Governance",
                  items: [
                    "Silchar upgraded to Municipal Corporation (42 wards)",
                    "Handles water, waste, drainage, traffic",
                    "Focus on new urban infrastructure",
                  ],
                },
              ]}
            />
          </div>
        )}

        {activeTab === "resources" && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Business Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Business Guides
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Starting a business in Silchar
                  </li>
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Export regulations for tea producers
                  </li>
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Funding opportunities for startups
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Support Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Silchar Chamber of Commerce
                  </li>
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Business licensing portal
                  </li>
                  <li className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition cursor-pointer">
                    <span className="mr-3 text-blue-400">→</span>
                    Tax incentives information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}