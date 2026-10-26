/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiArrowRight, FiSearch, FiBriefcase, FiUsers } from 'react-icons/fi';
import { api } from '../../../services/api';

// Types based on your backend
interface Job {
  _id: string;
  title: string;
  department: string;
  openings: number;
  description: string;
  skills: string[];
  location: string;
  employmentType: string;
  status: string;
  responsibilities: string[];
  qualifications: string[];
  perks: string[];
}

const AllJobs: React.FC = () => {
  const navigate = useNavigate();
  
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeTab, setActiveTab] = useState("All Roles");
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetch Data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Assuming your API returns { data: [...] } or just [...]. Adjust if needed.
        const response = await api.get('/job');
        // If your API returns { success: true, data: [...] }, use response.data.data
        console.log(response);
        setJobs(response?.data?.data?.jobs); 
      } catch (err: any) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Dynamically create departments from fetched jobs + "All Roles"
  const departments = ["All Roles", ...Array.from(new Set(jobs.map(job => job.department)))];

  // 2. Filter Logic
  const filteredJobs = jobs.filter(job => {
    const matchesDept = activeTab === "All Roles" || job.department === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="open-positions" className="py-24 bg-[#f8f6f1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
            Open Positions
          </h2>
          <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4a4a4a] max-w-2xl mx-auto text-lg">
            Find your next career move. We are looking for talented individuals to join our growing global team.
          </p>
        </div>

        {/* Filter & Search Container */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-[#f4f0e5] mb-10 flex flex-col lg:flex-row gap-4 items-center">
          
          {/* Department Tabs */}
          <div className="flex overflow-x-auto w-full lg:w-auto no-scrollbar gap-1 p-1 bg-[#f8f6f1] rounded-xl">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === dept 
                    ? "bg-white text-[#0d0d0d] shadow-sm ring-1 ring-black/5" 
                    : "text-[#4a4a4a] hover:text-[#0d0d0d] hover:bg-black/5"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 lg:ml-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#949494] w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by title or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#f8f6f1] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm text-[#0d0d0d] placeholder-[#949494]"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-[#32AADB] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#4a4a4a]">Loading open positions...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20 bg-white rounded-2xl border border-red-100">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="text-[#32AADB] font-medium hover:underline">
              Try Again
            </button>
          </div>
        )}

        {/* Job Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job._id} 
                  className="bg-white p-6 rounded-2xl border border-[#f4f0e5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full cursor-pointer"
                  onClick={() => navigate(`/career/job/${job._id}`)}
                >
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#32AADB]/10 flex items-center justify-center flex-shrink-0">
                      <FiBriefcase className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-block px-2.5 py-1 bg-[#32AADB]/10 text-[#32AADB] text-xs font-semibold rounded-md uppercase">
                        {job.employmentType.replace('_', ' ')}
                      </span>
                      <span className="text-xs font-medium text-[#949494] flex items-center gap-1">
                        <FiUsers className="w-3 h-3" /> {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Dept */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#32AADB] tracking-wider uppercase mb-1 block">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-bold text-[#0d0d0d] group-hover:text-[#32AADB] transition-colors leading-snug">
                      {job.title}
                    </h3>
                  </div>
                  
                  {/* Truncated Description */}
                  <p className="text-[#4a4a4a] text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs bg-[#f8f6f1] text-[#4a4a4a] px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-xs bg-[#f8f6f1] text-[#4a4a4a] px-2 py-1 rounded-md">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Location & Action */}
                  <div className="pt-4 border-t border-[#f4f0e5] flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-sm text-[#4a4a4a]">
                      <FiMapPin className="text-[#32AADB]" /> {job.location}
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double navigation if clicking button
                        navigate(`/career/job/${job._id}`);
                      }}
                      className="flex items-center gap-2 text-[#0d0d0d] font-semibold text-sm hover:text-[#32AADB] transition-colors group/btn"
                    >
                      View Details 
                      <span className="w-8 h-8 rounded-full bg-[#f8f6f1] flex items-center justify-center group-hover/btn:bg-[#32AADB] group-hover/btn:text-white transition-colors">
                        <FiArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-24 bg-white rounded-2xl border border-[#f4f0e5]">
                <FiSearch className="w-12 h-12 text-[#bfbfbf] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-2">No positions found</h3>
                <p className="text-[#4a4a4a] mb-6">We couldn't find any roles matching your search criteria.</p>
                <button 
                  onClick={() => { setActiveTab("All Roles"); setSearchTerm(""); }}
                  className="px-6 py-2.5 bg-[#32AADB] text-white rounded-lg font-medium hover:bg-[#2a91bb] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* General Application CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#4a4a4a] mb-3">Don't see a role that fits your skills?</p>
          <button className="inline-flex items-center gap-2 text-[#0d0d0d] font-semibold border-b-2 border-[#32AADB] pb-1 hover:text-[#32AADB] transition-colors">
            Send us your resume for future opportunities <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AllJobs;