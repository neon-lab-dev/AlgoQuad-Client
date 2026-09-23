import React from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiDatabase,
  FiSettings,
  FiCpu,
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
  FiUsers,
  FiMapPin,
  FiMail,
  FiPhone,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { IMAGES } from "../../assets";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0d0d0d] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#f4f0e5] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <img src={IMAGES.logo} alt="" className="w-44" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors"
              >
                About Us
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors">
                  Solutions <FiChevronDown className="mt-0.5" />
                </button>
              </div>
              <a
                href="#"
                className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors"
              >
                Our Partners
              </a>
              <a
                href="#"
                className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors"
              >
                Our Customers
              </a>
              <a
                href="#"
                className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors"
              >
                Community
              </a>
              <a
                href="#"
                className="text-[#4a4a4a] hover:text-[#32AADB] font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="hidden md:flex">
              <a
                href="tel:+916307907413"
                className="bg-[#32AADB] hover:bg-[#2a91bb] text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-md hover:shadow-lg"
              >
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
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#32AADB] rounded-full blur-[150px] opacity-[0.05] animate-pulse-slow"
            style={{ animationDelay: "3s" }}
          ></div>

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
                <span className="text-[#32AADB] text-sm font-medium tracking-wide">
                  Empowering Digital Transformation
                </span>
              </div>

              <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 text-white">
                Think Unique, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32AADB] via-cyan-400 to-[#32AADB]">
                  Think Ahead
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
                3+ Years of Global Reach and Delivering Impactful Tailored
                Solutions. AlgoQuad, Empowering Businesses to Thrive in the
                digital era.
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
                <div
                  className="absolute top-10 -left-6 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#32AADB]/20 flex items-center justify-center border border-[#32AADB]/30">
                      <FiCpu className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        AI Processing
                      </p>
                      <p className="text-gray-400 text-xs">99.9% Accuracy</p>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Card 2 (Bottom Right) */}
                <div
                  className="absolute bottom-16 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-float-slow"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#32AADB]/20 flex items-center justify-center border border-[#32AADB]/30">
                      <FiTrendingUp className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Data Analytics
                      </p>
                      <p className="text-gray-400 text-xs">
                        Real-time insights
                      </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
              Our Suite of Solutions
            </h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full mb-6"></div>
            <p className="text-[#4a4a4a] max-w-2xl mx-auto">
              Delivering specialized, banking and financial sector-focused
              services to ensure your operations run seamlessly and securely.
            </p>
          </div>

          {/* Changed from Grid to Flexbox for perfect centering of the last item */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: <FiMonitor className="w-8 h-8 text-[#32AADB]" />,
                title: "Application Support & Maintenance",
                desc: "Comprehensive lifecycle management to keep your critical business applications running smoothly.",
              },
              {
                icon: <FiDatabase className="w-8 h-8 text-[#32AADB]" />,
                title: "Database Support",
                desc: "Expert management for Oracle, MySQL, SQL Server, PostgreSQL, and MongoDB environments.",
              },
              {
                icon: <FiSettings className="w-8 h-8 text-[#32AADB]" />,
                title: "Infrastructure Support Services",
                desc: "Robust support for Servers, Storage, Networks, and Operating Systems to ensure high availability.",
              },
              {
                icon: <FiCheckCircle className="w-8 h-8 text-[#32AADB]" />,
                title: "Quality Assurance / Testing",
                desc: "Rigorous testing frameworks to guarantee software reliability, security, and performance.",
              },
              {
                icon: <FiBriefcase className="w-8 h-8 text-[#32AADB]" />,
                title: "Business Analysis & Project Management",
                desc: "Strategic planning and execution to align technology initiatives with your business goals.",
              },
              {
                icon: <FiLayers className="w-8 h-8 text-[#32AADB]" />,
                title: "Managed Service Support",
                desc: "End-to-end managed services allowing your internal teams to focus on core business objectives.",
              },
              {
                icon: <FiUsers className="w-8 h-8 text-[#32AADB]" />,
                title: "Resource Augmentation",
                desc: "Flexible onsite and offshore staffing solutions to scale your team with top-tier talent.",
              },
            ].map((item, index) => (
              <div
                key={index}
                // Added responsive widths to mimic the 3-column grid layout
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white p-8 rounded-2xl border border-[#f4f0e5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="mb-6 p-4 bg-[#f8f6f1] rounded-xl inline-block group-hover:bg-[#32AADB]/10 transition-colors w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm mb-6 flex-grow">
                  {item.desc}
                </p>
                <button className="text-[#32AADB] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
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
              <span className="text-[#32AADB] font-semibold tracking-wider uppercase text-sm mb-2 block">
                AlgoQuad
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-6">
                Get to Know Us
              </h2>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Established in 2023,located at the Globul hub of IT technolgy
                services,Bengaluru, ALGOQUAD systems & Solutions Pvt. Ltd. is
                focused on providing innovative and cost effective IT cnsulting
                ,Technology & Support services to its clients.
                <br />
                <br />
                We are mainly focused on Banking,finanical and Insurance sector
                customers and we offer various IT services related to
                Infrastructure Support, Database Management,Application Support
                & Maintenance, Project Management and IT services consulting.{" "}
                <br />
                <br />
                Within a short span of time, We have expanded our reach to
                Global clients and we are currently serving our clients based
                out of India,UAE and Saudi Arabia. Our domain epertise in
                Banking and finacial sector with highly skilled professionals
                and substantial work experience in relevant tech stack ensures
                our commitment to deliver the best in Class Services.
                <br />
                <br />
                Our focused, sound and innovative approach is derived from the
                cumulative experience of our team members. <br />
                <br />
                As a result of their combined practical business experience with
                strong technology delivery capabilities, we are able to
                comprehend the client's business requirements and propose IT and
                creative strategies in line with the vision of the business and
                execute the business plan by building or implementing high
                quality scalable business solutions through the use of latest
                cutting edge Technologies.
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
                <span className="text-sm opacity-90">
                  Dedicated team of skilled professionals
                </span>
              </div>
              <div className="bg-[#0d0d0d] rounded-2xl p-8 text-white flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                  <FiAward className="w-8 h-8 text-[#32AADB]" />
                </div>
                <span className="text-sm opacity-90">
                  End-to-end project management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Vision & Mission Section --- */}
      <section className="py-24 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
            {/* --- Left Side: Our Vision --- */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-[#32AADB] rounded-full mb-6"></div>
                <p className="text-[#4a4a4a] text-lg leading-relaxed italic border-l-4 border-[#32AADB] pl-4 py-1">
                  "The Trust of our customers has given us a stage to dream Big.
                  We aspire to be an exceptional team in the following areas:"
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Establish ourselves as a Best in class Product development company for banking/financial services solutions.",
                  "Innovation with modern cutting edge Technology Stack to bring Unique IT solutions to our customers.",
                  "Best in domain knowledge and stay focused in banking and financial sectors.",
                  "Commitment for value proposition with competitive price advantage to our clients.",
                  "Highly reputed resourcing company with skilled workforce deployment Offshore and Onsite with flexible engagement models to meet our clients needs.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-white p-5 rounded-xl border border-[#f4f0e5] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <FiCheckCircle className="w-6 h-6 text-[#32AADB]" />
                    </div>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Side: Our Mission --- */}
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-[#32AADB] rounded-full mb-6"></div>
              </div>

              {/* Mission Content Card */}
              <div className="bg-[#0d0d0d] rounded-3xl p-8 lg:p-12 relative overflow-hidden flex-grow flex flex-col justify-center">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#32AADB] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#32AADB] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <FiMessageSquare className="w-12 h-12 text-[#32AADB] mb-6 opacity-80" />

                  <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
                    Bringing Value and result driven services and solutions to
                    our Clients. Our clients trust us for what we do, We owe the
                    responsibility of keeping this Trust uplift and unwavering.
                  </p>

                  <div className="border-t border-white/10 pt-8 mt-auto">
                    <p className="text-[#32AADB] font-semibold tracking-wider uppercase text-sm mb-4">
                      Our Core Philosophy
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-white font-medium text-lg">
                      <span>We Think Unique,</span>
                      <span>We think Ahead,</span>
                      <span>We build Trust,</span>
                      <span>We deliver on our commitments.</span>
                    </div>
                  </div>
                </div>
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
                <span className="text-5xl font-bold">3+</span>
                <span className="text-lg text-[#b0b0b0]">Years</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FiGlobe className="w-12 h-12 text-[#32AADB] mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">15+</span>
                <span className="text-lg text-[#b0b0b0]">Global Experts</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FiUserCheck className="w-12 h-12 text-[#32AADB] mb-4" />
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">100+</span>
                <span className="text-lg text-[#b0b0b0]">
                  Satisfied Customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
              Why Choose ALGOQUAD?
            </h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiBriefcase />,
                title: "Deep Expertise",
                desc: "Specializing in Data Management & Analytics, Service Management, and Automation software solutions.",
              },
              {
                icon: <FiMonitor />,
                title: "Advanced Tech Stack",
                desc: "Utilizing cutting-edge technologies tailored for business optimization.",
              },
              {
                icon: <FiSliders />,
                title: "Flexibility & Scalability",
                desc: "Offering scalable solutions that adapt and grow with your business needs.",
              },
              {
                icon: <FiLayers />,
                title: "Seamless Integration",
                desc: "Ensuring smooth integration with your existing infrastructure and workflows.",
              },
              {
                icon: <FiGlobe />,
                title: "Global Reach",
                desc: "Operating across the Middle East, Africa, and beyond with strategic local presence.",
              },
              {
                icon: <FiCheckCircle />,
                title: "Proven Track Record",
                desc: "Delivering successful digital transformation projects for over a decade.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-[#f4f0e5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[#32AADB] text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- News Section --- */}
      {/* <section className="py-24 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-4">
              News
            </h2>
            <div className="w-20 h-1 bg-[#32AADB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title:
                  "ALGOQUAD Strengthens Regional Data & AI Momentum Following Cloudera Feature on GEC Newsire",
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
              },
              {
                title:
                  "ALGOQUAD Information Systems Becomes Alteryx Value Added Reseller and Solutions Provider",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title:
                  "ALGOQUAD Awarded BMC's 2025 DSOM Partner of the Year for EMEA",
                img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title:
                  "AlgoQuad and OpenDataSoft Partner to Deliver Next-Level Data Solutions",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
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
      </section> */}

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
              <a href="tel:+916307907413" className="inline-flex items-center gap-2 bg-[#32AADB] hover:bg-[#2a91bb] text-white px-8 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Connect with us <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#f8f6f1] border-t border-[#f4f0e5] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/">
                <img
                  src={IMAGES.logo}
                  alt="AlgoQuad Logo"
                  className="w-48 mb-6"
                />
              </Link>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                Empowering businesses to thrive in the digital era with
                tailored, impactful technology solutions.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">About</h4>
              <ul className="space-y-3 text-[#4a4a4a] text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">Solutions</h4>
              <ul className="space-y-3 text-[#4a4a4a] text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Application Support & Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Database Support{" "}
                    <span className="text-xs text-[#949494]">
                      (Oracle, MySQL, SQL Server, Postgre, MongoDB)
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Infrastructure Support Services{" "}
                    <span className="text-xs text-[#949494]">
                      (Server, Storage, Network, OS)
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Quality Assurance / Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Business Analysis and Project Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Managed Service Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#32AADB] transition-colors block leading-snug"
                  >
                    Resource Augmentation for Onsite & Offshore
                  </a>
                </li>
              </ul>
            </div>

            {/* New Contact Information Column */}
            <div>
              <h4 className="font-bold text-[#0d0d0d] mb-4">Contact</h4>
              <ul className="space-y-4 text-[#4a4a4a] text-sm">
                <li className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-[#32AADB] flex-shrink-0 mt-0.5" />
                  <span>Bengaluru, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 text-[#32AADB] flex-shrink-0" />
                  <a
                    href="mailto:info@algoquad.com"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                    info@algoquad.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5 text-[#32AADB] flex-shrink-0" />
                  <a
                    href="tel:+916307907413"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                    +91 63079 07413
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#f4f0e5] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#4a4a4a] text-sm order-2 md:order-1">
              Copyright © 2026 ALGOQUAD
            </p>

            {/* Social Media Icons Moved Here */}
            <div className="flex gap-4 order-1 md:order-2">
              <a
                href="https://www.linkedin.com/company/algoquad-systems-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#f4f0e5] flex items-center justify-center text-[#4a4a4a] hover:bg-[#32AADB] hover:text-white hover:border-[#32AADB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-[#f4f0e5] flex items-center justify-center text-[#4a4a4a] hover:bg-[#32AADB] hover:text-white hover:border-[#32AADB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-[#f4f0e5] flex items-center justify-center text-[#4a4a4a] hover:bg-[#32AADB] hover:text-white hover:border-[#32AADB] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6 text-sm text-[#4a4a4a] order-3">
              <a href="#" className="hover:text-[#32AADB] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[#32AADB] transition-colors">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
