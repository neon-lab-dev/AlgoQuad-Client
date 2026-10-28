/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { FiX, FiUploadCloud, FiCheckCircle, FiFileText } from 'react-icons/fi';
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
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---- File Upload Logic ----
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) {
      setResumeFile(null);
      return;
    }

    // Validate strict PDF only
    if (file.type !== 'application/pdf') {
      setFileError('Only PDF files are allowed.');
      e.target.value = '';
      return;
    }

    // Validate size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File must be smaller than 5 MB.');
      e.target.value = '';
      return;
    }

    setResumeFile(file);
  };

  const clearFile = () => {
    setResumeFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ---- Submit ----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMessage('');

    if (!resumeFile) {
      setFileError('Please upload your resume.');
      return;
    }

    setLoading(true);

    try {
      // Use FormData because we are sending a file
      const formDataPayload = new FormData();
      formDataPayload.append('name', formData.name);
      formDataPayload.append('email', formData.email);
      formDataPayload.append('phoneNumber', formData.phoneNumber);
      formDataPayload.append('experience', formData.experience);
      formDataPayload.append('jobId', jobId);
      
      // Append the file! (Assuming your backend expects "resume")
      // If your backend expects "file", change this key to "file"
      formDataPayload.append('file', resumeFile); 

      const response = await api.post(`/application/apply/${jobId}`, formDataPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
        
        {/* Header */}
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
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Phone Number *</label>
                <input 
                  type="tel" name="phoneNumber" required
                  value={formData.phoneNumber} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                  placeholder="+971 50 123 4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Email Address *</label>
              <input 
                type="email" name="email" required
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Years of Experience *</label>
              <input 
                type="text" name="experience" required
                value={formData.experience} onChange={handleChange}
                className="w-full px-4 py-2.5 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#32AADB]/50 text-sm"
                placeholder="e.g. 5 years"
              />
            </div>

            {/* NEW: PDF Upload Field */}
            <div>
              <label className="block text-sm font-medium text-[#0d0d0d] mb-1">Resume / CV (PDF only) *</label>
              
              {!resumeFile ? (
                <label 
                  htmlFor="resume-upload"
                  className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 bg-[#f8f6f1] border-2 border-dashed border-[#f4f0e5] rounded-xl cursor-pointer hover:border-[#32AADB] hover:bg-[#32AADB]/5 transition-all"
                >
                  <FiUploadCloud className="w-6 h-6 text-[#32AADB]" />
                  <span className="text-sm font-medium text-[#0d0d0d]">Click to upload your resume</span>
                  <span className="text-xs text-[#949494]">PDF only, max 5MB</span>
                  <input 
                    id="resume-upload"
                    ref={fileInputRef}
                    type="file" 
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between w-full p-3 bg-[#f8f6f1] border border-[#f4f0e5] rounded-xl">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-10 bg-white border border-[#f4f0e5] rounded flex items-center justify-center shrink-0">
                      <FiFileText className="text-red-500" />
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-medium text-[#0d0d0d] truncate">{resumeFile.name}</p>
                      <p className="text-xs text-[#949494]">{(resumeFile.size / 1024).toFixed(0)} KB</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={clearFile}
                    className="text-[#949494] hover:text-red-500 p-1"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {fileError && <p className="text-xs text-red-500 mt-1">{fileError}</p>}
            </div>

            <div className="pt-4 flex gap-3">
              <button 
                type="button" onClick={onClose}
                className="flex-1 py-3 bg-white border border-[#f4f0e5] text-[#4a4a4a] rounded-lg font-medium hover:bg-[#f8f6f1] transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" disabled={loading}
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