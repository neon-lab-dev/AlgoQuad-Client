import React from 'react';
import { 
  FiArrowRight, 
  FiChevronDown, 
  FiDatabase, 
  FiSettings, 
  FiCpu, 
  FiBox, 
  FiUsers, 
  FiCheckCircle, 
  FiLinkedin,
  FiMessageSquare,
  FiTrendingUp,
  FiAward,
  FiGlobe,
  FiLayers,
  FiSliders,
  FiBriefcase,
  FiUserCheck,
  FiMonitor,
} from 'react-icons/fi';
import { IMAGES } from '../../assets';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0d0d0d] overflow-x-hidden">
      {/* Nav */}
       <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#f4f0e5] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <img src={IMAGES.logo} alt="" className='w-44' />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">About Us</a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">
                  Solutions <FiChevronDown className="mt-0.5" />
                </button>
              </div>
              <a href="#" className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">Our Partners</a>
              <a href="#" className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">Our Customers</a>
              <a href="#" className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">Community</a>
              <a href="#" className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">Contact Us</a>
            </div>
            <div className="hidden md:flex">
              <a href="#" className="bg-[#32AADB] hover:bg-[#2a91bb] text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- FANCY HERO SECTION --- */}
            {/* --- FANCY HERO SECTION --- */}
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0a] min-h-screen flex items-center">
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Radial Glow */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#32AADB] rounded-full blur-[150px] opacity-[0.07] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#32AADB] rounded-full blur-[150px] opacity-[0.05] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Top Gradient Overlay to blend with Navbar */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Side: Text Content */}
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32AADB]/10 border border-[#32AADB]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#32AADB] animate-pulse"></span>
                <span className="text-[#32AADB] text-sm font-medium tracking-wide">Empowering Digital Transformation</span>
              </div>
              
              <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-white">
                ALGOQUAD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32AADB] via-cyan-400 to-[#32AADB]">
                  Connect Great Minds
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
                12+ Years of Global Reach and Delivering Impactful Tailored Solutions. 
                AlgoQuad, Empowering Businesses to Thrive in the digital era.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                <button className="group relative flex items-center justify-center gap-2 bg-[#32AADB] hover:bg-[#2a91bb] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(50,170,219,0.3)] hover:shadow-[0_0_30px_rgba(50,170,219,0.5)] hover:-translate-y-1">
                  Get Started 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Side: Structured Fancy Graphic */}
            <div className="relative hidden lg:block animate-fade-in-up delay-300">
              <div className="relative w-full h-[600px] flex items-center justify-center">
                
                {/* Main Image Container */}
                <div className="relative w-[500px] h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-float-slow bg-[#111]">
                  {/* High-quality abstract tech image */}
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2064&auto=format&fit=crop" 
                    alt="Technology Abstract" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Gradient overlay to blend image into background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-50"></div>
                </div>

                {/* Floating Glass Card 1 (Top Left) */}
                <div className="absolute top-10 -left-6 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float-slow" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#32AADB]/20 flex items-center justify-center border border-[#32AADB]/30">
                      <FiCpu className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">AI Processing</p>
                      <p className="text-gray-400 text-xs">99.9% Accuracy</p>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Card 2 (Bottom Right) */}
                <div className="absolute bottom-16 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float-slow" style={{ animationDelay: '2.5s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#32AADB]/20 flex items-center justify-center border border-[#32AADB]/30">
                      <FiTrendingUp className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Data Analytics</p>
                      <p className="text-gray-400 text-xs">Real-time insights</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Glowing Lines */}
                <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#32AADB]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-transparent via-[#32AADB]/50 to-transparent"></div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- Solutions Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">Our Suite of Solutions</h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiDatabase className="w-12 h-12 text-[#32AADB]" />, title: 'Data & AI', desc: 'Data Management and Analytics' },
              { icon: <FiSettings className="w-12 h-12 text-[#32AADB]" />, title: 'DSM', desc: 'Digital Service Management' },
              { icon: <FiCpu className="w-12 h-12 text-[#32AADB]" />, title: 'IA', desc: 'Hyper Automation and Enterprise Content Services' },
              { icon: <FiBox className="w-12 h-12 text-[#32AADB]" />, title: 'MAGDIA', desc: 'Data Intelligent Automation' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#f4f0e5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="mb-6 p-4 bg-[#f8f6f1] rounded-xl inline-block group-hover:bg-[#32AADB]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-2">{item.title}</h3>
                <p className="text-[#4a4a4a] text-sm mb-6 min-h-[40px]">{item.desc}</p>
                <button className="text-[#32AADB] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section className="py-24 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#32AADB] font-semibold tracking-wider uppercase text-sm mb-2 block">AlgoQuad</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-6">Get to Know Us</h2>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Established in 2012, ALGOQUAD stands as a premier Software Value Added Reseller and Technology Implementation firm, operating prominently across the Middle East and Africa. Based in Abu Dhabi, UAE, our expertise extends across key sectors including Banking, Telecoms, and Government. Boasting a dedicated team of over 150 skilled professionals, and a strategic presence in Saudi Arabia, India, Lebanon, Pakistan, and Greece, we specialize in delivering tailored digital transformation solutions. With a focus on impartial consultation and end-to-end project management, ALGOQUAD is committed to maximizing the business advantages of modern technology investments for our clients.
              </p>
              <button className="flex items-center gap-2 bg-[#32AADB] hover:bg-[#2a91bb] text-white px-6 py-3 rounded-md font-medium transition-all shadow-md">
                Discover more <FiArrowRight />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 rounded-2xl overflow-hidden h-64 relative bg-[#0d0d0d]">
                 <img 
                   src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                   alt="Technology" 
                   className="w-full h-full object-cover opacity-80"
                 />
              </div>
              <div className="bg-[#32AADB] rounded-2xl p-8 text-white flex flex-col justify-center">
                <span className="text-5xl font-bold mb-2">150+</span>
                <span className="text-sm opacity-90">Dedicated team of skilled professionals</span>
              </div>
              <div className="bg-[#0d0d0d] rounded-2xl p-8 text-white flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                </div>
                <span className="text-sm opacity-90">End-to-end project management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-24 bg-[#0d0d0d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
             alt="Server Room" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FiTrendingUp className="w-12 h-12 text-[#32AADB] mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">12+</span>
                <span className="text-lg text-[#b0b0b0]">Years</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FiUsers className="w-12 h-12 text-[#32AADB] mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">150+</span>
                <span className="text-lg text-[#b0b0b0]">Employees</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FiUserCheck className="w-12 h-12 text-[#32AADB] mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">100+</span>
                <span className="text-lg text-[#b0b0b0]">Satisfied Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">Why Choose ALGOQUAD?</h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FiBriefcase />, title: 'Deep Expertise', desc: 'Specializing in Data Management & Analytics, Service Management, and Automation software solutions.' },
              { icon: <FiMonitor />, title: 'Advanced Tech Stack', desc: 'Utilizing cutting-edge technologies tailored for business optimization.' },
              { icon: <FiSliders />, title: 'Flexibility & Scalability', desc: 'Offering scalable solutions that adapt and grow with your business needs.' },
              { icon: <FiLayers />, title: 'Seamless Integration', desc: 'Ensuring smooth integration with your existing infrastructure and workflows.' },
              { icon: <FiGlobe />, title: 'Global Reach', desc: 'Operating across the Middle East, Africa, and beyond with strategic local presence.' },
              { icon: <FiCheckCircle />, title: 'Proven Track Record', desc: 'Delivering successful digital transformation projects for over a decade.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#f4f0e5] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#32AADB] text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">{item.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- News Section --- */}
      <section className="py-24 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">News</h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ALGOQUAD Strengthens Regional Data & AI Momentum Following Cloudera Feature on GEC Newsire', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop' },
              { title: 'ALGOQUAD Information Systems Becomes Alteryx Value Added Reseller and Solutions Provider', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
              { title: 'ALGOQUAD Awarded BMC\'s 2025 DSOM Partner of the Year for EMEA', img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop' },
              { title: 'AlgoQuad and OpenDataSoft Partner to Deliver Next-Level Data Solutions', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop' },
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0d0d0d] text-lg leading-tight mb-4 group-hover:text-[#32AADB] transition-colors">
                    {news.title}
                  </h3>
                  <span className="text-[#32AADB] text-sm font-medium flex items-center gap-1">
                    Read More <FiArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d0d0d] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#32AADB]/20 to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <FiMessageSquare className="w-16 h-16 text-[#32AADB] mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transforming Your Business <br /> Is One-Click Away!
              </h2>
              <p className="text-[#b0b0b0] mb-10 text-lg">
                Take the Step. Let's Turn Your Business Goals into Reality
              </p>
              <button className="inline-flex items-center gap-2 bg-[#32AADB] hover:bg-[#2a91bb] text-white px-8 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Connect with us <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#f8f6f1] border-t border-[#f4f0e5] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/">
              <img src={IMAGES.logo} alt="" className='w-56' />
            </Link>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">About</h4>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">Solutions</h4>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Data & AI</a></li>
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Digital Service Management</a></li>
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Intelligent Automation</a></li>
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">MAGDIA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">Our Partners</h4>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Our Customers</a></li>
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">Community</h4>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li><a href="#" className="hover:text-[#32AADB] transition-colors">Connect with us</a></li>
              </ul>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-[#0d0d0d] hover:text-[#32AADB] transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#f4f0e5] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4a4a4a] text-sm">
              Copyright © 2026 ALGOQUAD
            </p>
            <div className="flex gap-6 text-sm text-[#4a4a4a]">
              <a href="#" className="hover:text-[#32AADB] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#32AADB] transition-colors">Terms of use</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;