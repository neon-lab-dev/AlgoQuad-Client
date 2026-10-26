import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CareerHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0a] flex items-center min-h-[70vh]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#32AADB] rounded-full blur-[150px] opacity-[0.07] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#32AADB] rounded-full blur-[150px] opacity-[0.05] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#32AADB]/10 border border-[#32AADB]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#32AADB] animate-pulse"></span>
            <span className="text-[#32AADB] text-sm font-medium tracking-wide">We are hiring!</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Build the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32AADB] via-cyan-400 to-[#32AADB]">
              With AlgoQuad
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Join a team of passionate innovators dedicated to transforming the banking and financial sectors through cutting-edge technology and impactful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#open-positions" className="group flex items-center justify-center gap-2 bg-[#32AADB] hover:bg-[#2a91bb] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(50,170,219,0.3)] hover:shadow-[0_0_30px_rgba(50,170,219,0.5)] hover:-translate-y-1">
              View Open Positions 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;