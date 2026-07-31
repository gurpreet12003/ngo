import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';


import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Vision & Mission', path: '/about/vision-mission' },
      { label: 'History & Milestones', path: '/about/history' },
      { label: 'Leadership Team', path: '/about/leadership' },
      { label: 'Organization Profile', path: '/about/org-profile' },
      
    ],
  },
  {
    label: "Programs",
    path: "/programs",
    children: [
      {
        label: "Educational & Career Guidance",
        path: "/programs/education",
        children: [
          {
            label: "Career Counseling Workshops",
            path: "/programs/education/career-counseling",
          },
          {
            label: "Scholarship Assistance Program",
            path: "/programs/education/scholarship-assistance",
          },
          {
            label: "Digital Literacy Campaign",
            path: "/programs/education/digital-literacy",
          },
          {
            label: "Community Study Circles",
            path: "/programs/education/study-circles",
          },
        ],
      },

      {
        label: "Youth Leadership",
        path: "/programs/youth-leadership",
        children: [
          {
            label: "Youth Leadership Camps",
            path: "/programs/youth-leadership/leadership-camps",
          },
          {
            label: "Youth Parliament Sessions",
            path: "/programs/youth-leadership/youth-parliament",
          },
          {
            label: "AYUSH Fellowship Program",
            path: "/programs/youth-leadership/fellowship-program",
          },
        ],
      },

      {
        label: "Tribal Empowerment",
        path: "/programs/tribal-empowerment",
        children: [
          {
            label: "Tribal Rights Awareness",
            path: "/programs/tribal-empowerment/rights-awareness",
          },
          {
            label: "Cultural Heritage Preservation",
            path: "/programs/tribal-empowerment/cultural-preservation",
          },
          {
            label: "Sustainable Livelihood Programs",
            path: "/programs/tribal-empowerment/sustainable-livelihoods",
          },
          {
            label: "Health & Nutrition Awareness",
            path: "/programs/tribal-empowerment/health-nutrition",
          },
        ],
      },

      {
        label: "Social Entrepreneurship",
        path: "/programs/social-entrepreneurship",
        children: [
          {
            label: "Social Enterprise Incubation",
            path: "/programs/social-entrepreneurship/incubation-center",
          },
          {
            label: "Tribal Products Marketplace",
            path: "/programs/social-entrepreneurship/tribal-products",
          },
          {
            label: "Agricultural Enterprise Development",
            path: "/programs/social-entrepreneurship/agri-enterprise",
          },
        ],
      },

      {
        label: "Social Awareness",
        path: "/programs/social-awareness",
        children: [
          {
            label: "Gender Equality Campaigns",
            path: "/programs/social-awareness/gender-equality",
          },
          {
            label: "Environmental Conservation Drives",
            path: "/programs/social-awareness/environmental-conservation",
          },
          {
            label: "Anti-Addiction Awareness Program",
            path: "/programs/social-awareness/anti-addiction",
          },
        ],
      },
    ],
  },
  { label: 'Lets Do It Together', path: '/get-involved' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10">
            

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/adiyuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="https://twitter.com/adiyuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300"
              >
                <FaXTwitter className="text-sm" />
              </a>

              <a
                href="https://www.instagram.com/adiyuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E4405F] transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="https://www.youtube.com/user/adiyuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300"
              >
                <FaYoutube className="text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/company/adiyuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo */}


            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.jpg"
                alt="AYUSH Logo"
                className="
    w-12 h-12 lg:w-14 lg:h-14
    object-contain
    grayscale
    transition-all
    duration-300
    group-hover:grayscale-0
  "
              />
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight tracking-tight">
                Adivasi Yuva Seva Sangh
                </h1>

                <p className="text-[10px] lg:text-[10px] text-gray-500 leading-none tracking-wider uppercase">
                  Collaborative social Entrepreneurship platform
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${isActive(item.path) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gray-900" />
                  )}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-lg rounded-lg py-2 mt-0">
                      {item.children.map((child) => (
                        <div key={child.path} className="group/sub relative">
                          <Link
                            to={child.path}
                            className="flex justify-between items-center px-4 py-2.5 text-sm hover:bg-gray-50"
                          >
                            {child.label}
                            {child.children && (
                              <ChevronDown className="w-3 h-3 -rotate-90" />
                            )}
                          </Link>

                          {child.children && (
                            <div className="absolute left-full top-0 hidden group-hover/sub:block w-72 bg-white p-2 shadow-lg rounded-lg">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="block px-5 py-3 text-[15px] font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/get-involved"
                className="hidden sm:inline-flex items-center px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Contribute
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className={`flex-1 block py-2.5 text-sm font-medium ${isActive(item.path) ? 'text-gray-900' : 'text-gray-600'
                        }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="p-2 text-gray-400"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && openDropdown === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-2 text-sm ${isActive(child.path) ? 'text-gray-900 font-medium' : 'text-gray-500'
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/get-involved"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 bg-gray-900 text-white text-sm font-medium rounded-full mt-4"
              >
                Contribute Now
              </Link>
            </div>
          </div>
        )}
      </header></>
  );
}
