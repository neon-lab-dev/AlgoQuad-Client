import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiMapPin, FiArrowLeft, FiBriefcase, FiCheckCircle, 
  FiStar, FiAward, FiUsers
} from 'react-icons/fi';
import { api } from '../../services/api';
import ApplyModal from '../../components/JobDetailsPage/ApplyModal/ApplyModal';

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

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/job/${id}`);
        setJob(response.data.data || response.data);
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to load job details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJobDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f1]">
        <div className="w-12 h-12 border-4 border-[#32AADB] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f6f1]">
        <h2 className="text-2xl font-bold text-[#0d0d0d] mb-4">{error || 'Job not found'}</h2>
        <button onClick={() => navigate('/career')} className="text-[#32AADB] hover:underline flex items-center gap-2">
          <FiArrowLeft /> Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f6f1] min-h-screen pb-24 pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/career')} 
          className="flex items-center gap-2 text-[#4a4a4a] hover:text-[#32AADB] font-medium mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to all jobs
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Main Job Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#f4f0e5] shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#32AADB]/10 text-[#32AADB] text-sm font-semibold rounded-full mb-4">
                {job.department}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4 leading-tight">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-[#4a4a4a] mb-6">
                <div className="flex items-center gap-1.5 bg-[#f8f6f1] px-3 py-1.5 rounded-lg">
                  <FiMapPin className="text-[#32AADB]" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 bg-[#f8f6f1] px-3 py-1.5 rounded-lg">
                  <FiBriefcase className="text-[#32AADB]" /> {job.employmentType.replace('_', ' ')}
                </div>
                <div className="flex items-center gap-1.5 bg-[#f8f6f1] px-3 py-1.5 rounded-lg">
                  <FiUsers className="text-[#32AADB]" /> {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                </div>
              </div>

              <div className="prose max-w-none text-[#4a4a4a]">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">Job Description</h3>
                <p className="leading-relaxed whitespace-pre-line">{job.description}</p>
              </div>
            </div>

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-[#f4f0e5] shadow-sm">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-6">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#4a4a4a]">
                      <FiCheckCircle className="w-5 h-5 text-[#32AADB] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qualifications */}
            {job.qualifications?.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-[#f4f0e5] shadow-sm">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-6">Qualifications</h3>
                <ul className="space-y-3">
                  {job.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#4a4a4a]">
                      <FiAward className="w-5 h-5 text-[#32AADB] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar (Skills, Perks, Apply) */}
          <div className="space-y-6">
            
            {/* Apply Box */}
            <div className="bg-[#0d0d0d] p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#32AADB] rounded-full blur-[80px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Interested in this role?</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Take the next step in your career with AlgoQuad.</p>
              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full bg-[#32AADB] hover:bg-[#2a91bb] text-white py-3 rounded-lg font-semibold transition-all relative z-10"
              >
                Apply Now
              </button>
            </div>

            {/* Skills */}
            {job.skills?.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-[#f4f0e5] shadow-sm">
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="bg-[#f8f6f1] text-[#4a4a4a] text-sm px-3 py-1.5 rounded-lg border border-[#f4f0e5]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Perks */}
            {job.perks?.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-[#f4f0e5] shadow-sm">
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-4">Perks & Benefits</h3>
                <ul className="space-y-3">
                  {job.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#4a4a4a] text-sm">
                      <FiStar className="w-4 h-4 text-[#f17556] flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Render the Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        jobId={job._id}
        jobTitle={job.title}
      />
    </div>
  );
};

export default JobDetails;