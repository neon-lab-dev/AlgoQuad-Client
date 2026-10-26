import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
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
                    href="/"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                   Home
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="hover:text-[#32AADB] transition-colors"
                  >
                    Career
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
  );
};

export default Footer;