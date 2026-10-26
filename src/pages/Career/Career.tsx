import React from 'react';
import CareerHero from '../../components/CareerPage/CareerHero/CareerHero';
import AllJobs from '../../components/CareerPage/AllJobs/AllJobs';

const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0d0d0d] overflow-x-hidden">
      <CareerHero />
      <AllJobs />
    </div>
  );
};

export default Career;