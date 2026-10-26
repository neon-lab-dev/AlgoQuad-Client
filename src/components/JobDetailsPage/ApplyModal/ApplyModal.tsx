/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FiX, FiUploadCloud, FiCheckCircle } from 'react-icons/fi';
import { api } from '../../../services/api';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  jobTitle: string;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, jobId, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    experience: '',
    resumeUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await api.post(`/application/apply/${jobId}`, {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        experience: formData.experience,
        resumeUrl: formData.resumeUrl,
        jobId: jobId 
      });

      if (response.status === 200 || response.status === 201) {
        setStatus('success');
      }
    } catch (err: any) {
      console.error("Application Error:", err);
      setStatus('error');
      setErrorMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative animate-fade-in-up">
        
        {/* Light Theme Header */}
        <div className="bg-[#f8f6f1] border-b border-[#f4f0e5] p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[#949494] hover:text-[#0d0d0d] transition-colors z-20 bg-white/50 hover:bg-white p-1 rounded-full"
          >
            <FiX className="w-5 h-5" />
          </button>
          
          <div className="inline-block px-3 py-1 bg-[#32AADB]/10 text-[#32AADB] text-xs font-bold tracking-wider rounded-full mb-3 uppercase">
            Application Form
          </div>
          <h2 className="text-2xl font-bold text-[#0d0d0d] relative z-10">Apply for Position</h2>
          <p className="text-[#4a4a4a] font-medium mt-1 relative z-10">{jobTitle}</p>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <FiCheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0d0d0d] mb-2">Application Submitted!</h3>
            <p className="text-[#4a4a4a] mb-8">Thank you for applying. Our HR team will review your profile and get back to you shortly.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-[#32AADB] text-white rounded-lg font-medium hover:bg-[#2a91bb] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {status === 'error' && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phoneNumber" 
                  required
                  value={formData.phoneNumber} 
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                  placeholder="+971 50 123 4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Years of Experience *</label>
              <input 
                type="text" 
                name="experience" 
                required
                value={formData.experience} 
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                placeholder="e.g. 5 years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Resume Link (Drive/Portfolio URL) *</label>
              <div className="relative">
                <FiUploadCloud className="absolute left-4 top-1/2 -translate-y-1/2 text-[#949494]" />
                <input 
                  type="url" 
                  name="resumeUrl" 
                  required
                  value={formData.resumeUrl} 
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                  placeholder="https://drive.google.com/your-resume"
                />
              </div>
              <p className="text-xs text-[#949494] mt-1">Paste a public link to your resume.</p>
            </div>

            <div className="pt-4 flex gap-3">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 py-3 bg-white border border-[#f4f0e5] text-[#4a4a4a] rounded-lg font-medium hover:bg-[#f8f6f1] transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={loading}
                className="flex-1 py-3 bg-[#32AADB] text-white rounded-lg font-medium hover:bg-[#2a91bb] transition-colors disabled:opacity-70 flex justify-center items-center shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;