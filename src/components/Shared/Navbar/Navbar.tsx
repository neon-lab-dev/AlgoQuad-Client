/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { IMAGES } from '../../../assets';

// Removed Careers from here. These are strictly Home Page sections.
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Our Services' },
  { id: 'why-us', label: 'Why Choose Us' },
  { id: 'contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  /* ===== Track Scroll (Shadow only) ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ===== Track Active Section (ONLY on Home Page) ===== */
  useEffect(() => {
    if (!isHomePage) {
      setActiveId(''); // No active tabs on other pages
      return;
    }

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120; // offset for fixed nav
      let current = 'home';

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActiveId(current);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isHomePage]);

  /* ===== Handle Nav Clicks ===== */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (!isHomePage) {
      // If not on home page, go to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`
        fixed w-full z-50
        bg-white/90 backdrop-blur-md border-b border-[#f4f0e5] transition-all duration-300
        ${scrolled ? 'shadow-sm' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={IMAGES.logo} alt="Logo" className="w-44" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              // Only show active if we are on the home page AND the id matches
              const isActive = isHomePage && activeId === link.id;
              
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`
                    relative font-medium transition-colors
                    ${isActive ? 'text-[#32AADB]' : 'text-[#4a4a4a] hover:text-[#32AADB]'}
                  `}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#32AADB]
                      origin-center transition-transform duration-300
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href="tel:+916307907413"
              className="bg-[#32AADB] hover:bg-[#2a91bb] text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-md hover:shadow-lg"
            >
              Connect With Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#4a4a4a]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-fade-in absolute top-20 left-4 right-4">
            <div className="flex flex-col gap-1 bg-white border border-[#f4f0e5] rounded-xl p-3 shadow-lg">
              {NAV_LINKS.map((link) => {
                const isActive = isHomePage && activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`
                      px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${isActive ? 'bg-[#32AADB]/10 text-[#32AADB]' : 'text-[#4a4a4a] hover:bg-[#f4f0e5]/60'}
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="tel:+916307907413"
                className="mt-2 text-center bg-[#32AADB] hover:bg-[#2a91bb] text-white px-6 py-2.5 rounded-md font-medium transition-all"
              >
                Connect With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;