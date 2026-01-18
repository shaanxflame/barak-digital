// app/jobs/page.tsx
"use client";

import { useState, useEffect } from "react";

// Types for our data
interface JobPosting {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  posted: string;
  featured?: boolean;
  local?: boolean;
}

interface EmploymentTrend {
  sector: string;
  growth: string;
  trend: "up" | "down";
  description: string;
}

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [trends, setTrends] = useState<EmploymentTrend[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Mock data fetch - in a real app, this would come from an API
    const mockJobs: JobPosting[] = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechSolutions Silchar",
        location: "Silchar, Barak Valley",
        type: "Full-time",
        category: "Technology",
        posted: "2 days ago",
        featured: true,
        local: true
      },
      {
        id: 2,
        title: "Tea Estate Manager",
        company: "Doloo Tea Gardens",
        location: "Cachar, Barak Valley",
        type: "Full-time",
        category: "Agriculture",
        posted: "5 days ago",
        local: true
      },
      {
        id: 3,
        title: "Sales Executive",
        company: "Barak Valley Motors",
        location: "Silchar, Barak Valley",
        type: "Full-time",
        category: "Sales",
        posted: "1 week ago",
        local: true
      },
      {
        id: 4,
        title: "Content Writer",
        company: "Digital Marketing Agency",
        location: "Guwahati (Remote)",
        type: "Part-time",
        category: "Marketing",
        posted: "3 days ago"
      },
      {
        id: 5,
        title: "Accountant",
        company: "Silchar Finance Group",
        location: "Silchar, Barak Valley",
        type: "Full-time",
        category: "Finance",
        posted: "1 day ago",
        featured: true,
        local: true
      },
      {
        id: 6,
        title: "Nursing Staff",
        company: "Silchar Medical College",
        location: "Silchar, Barak Valley",
        type: "Full-time",
        category: "Healthcare",
        posted: "4 days ago",
        local: true
      },
      {
        id: 7,
        title: "Teacher",
        company: "Valley Public School",
        location: "Hailakandi, Barak Valley",
        type: "Full-time",
        category: "Education",
        posted: "6 days ago",
        local: true
      },
      {
        id: 8,
        title: "Software Engineer",
        company: "Assam Tech Ventures",
        location: "Guwahati (Remote)",
        type: "Full-time",
        category: "Technology",
        posted: "2 days ago",
        featured: true
      }
    ];

    const mockTrends: EmploymentTrend[] = [
      {
        sector: "Technology",
        growth: "15%",
        trend: "up",
        description: "IT sector expanding rapidly in Barak Valley with new startups"
      },
      {
        sector: "Tea Production",
        growth: "3%",
        trend: "up",
        description: "Steady growth in tea estate employment opportunities"
      },
      {
        sector: "Education",
        growth: "8%",
        trend: "up",
        description: "New schools and colleges creating teaching positions"
      },
      {
        sector: "Retail",
        growth: "2%",
        trend: "down",
        description: "Traditional retail seeing slight decline due to e-commerce"
      }
    ];

    setJobs(mockJobs);
    setTrends(mockTrends);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "local") return matchesSearch && job.local;
    if (activeTab === "featured") return matchesSearch && job.featured;
    return matchesSearch && job.category.toLowerCase() === activeTab;
  });

  const categories = ["all", "local", "featured", "technology", "sales", "healthcare", "education", "agriculture", "finance", "marketing"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Barak Valley Job Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover employment opportunities, career resources, and local employment trends in Barak Valley
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search jobs, companies, or categories..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap mr-2 capitalize ${activeTab === category ? 
                    "bg-blue-100 text-blue-700" : 
                    "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {category === "local" ? "Barak Valley" : category}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div key={job.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                          {job.featured && (
                            <span className="ml-3 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              Featured
                            </span>
                          )}
                          {job.local && (
                            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              Local
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {job.type}
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {job.category}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                        <span className="text-sm text-gray-500 mb-2">{job.posted}</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <svg className="h-12 w-12 text-gray-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Employment Trends */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Barak Valley Employment Trends</h2>
              <div className="space-y-4">
                {trends.map((trend, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${trend.trend === "up" ? "bg-green-100" : "bg-red-100"}`}>
                      <svg 
                        className={`h-6 w-6 ${trend.trend === "up" ? "text-green-600" : "text-red-600"}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        {trend.trend === "up" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{trend.sector}</h3>
                      <p className="text-sm text-gray-600">{trend.growth} growth</p>
                      <p className="text-sm text-gray-500 mt-1">{trend.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Resources</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-100 h-8 w-8 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Resume Writing Guide</span>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-100 h-8 w-8 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Interview Preparation</span>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-100 h-8 w-8 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Local Networking Events</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Get Job Alerts</h2>
              <p className="text-blue-100 mb-4">Stay updated with the latest job opportunities in Barak Valley</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}