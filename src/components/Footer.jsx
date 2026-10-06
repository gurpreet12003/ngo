import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/adiyuva',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },

  {
    name: 'Twitter',
    url: 'https://twitter.com/adiyuva',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },

  {
    name: 'YouTube',
    url: 'https://www.youtube.com/user/adiyuva',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },

  {
    name: 'Instagram',
    url: 'https://www.instagram.com/adiyuva',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },

  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/adiyuva',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0 4.124 2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },

  {
    name: 'WhatsApp',
    url: 'https://wa.me/919246361249',
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5.17.17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.07 24l6.34-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.76.98 1-3.67-.23-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.42 4.42-9.84 9.85-9.84a9.8 9.8 0 0 1 6.97 2.89 9.82 9.82 0 0 1 2.88 6.98c0 5.42-4.42 9.84-9.81 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-700 text-white">

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <div className="border-b border-gray-800">

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-8 md:py-9">

          <div className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-6
            lg:gap-12
          ">

            {/* Newsletter Text */}
            <div className="w-full md:w-auto">

              <h3 className="text-xl md:text-lg font-semibold">
                Stay Connected
              </h3>

              <p className="
                text-gray-400
                text-sm
                mt-2
                leading-relaxed
                max-w-xl
              ">
                Subscribe to our newsletter for updates on our programs and impact.
              </p>

            </div>


            {/* Newsletter Form */}
            <div className="
              flex
              flex-col
              sm:flex-row
              w-full
              md:w-auto
              gap-3
            ">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  sm:w-72
                  lg:w-80
                  px-5
                  py-3
                  bg-gray-800
                  border
                  border-gray-700
                  rounded-full
                  text-sm
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-gray-500
                "
              />

              <button
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-3
                  bg-white
                  text-gray-900
                  text-sm
                  font-medium
                  rounded-full
                  hover:bg-gray-100
                  transition-colors
                  whitespace-nowrap
                "
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="border-b border-gray-800">

        <div className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-10
          md:py-12
          lg:py-14
        ">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.9fr_1fr_1.35fr]
            gap-10
            sm:gap-12
            lg:gap-x-20
            xl:gap-x-24
            lg:items-start
          ">


            {/* =====================================================
                ABOUT / LOGO
            ===================================================== */}
            <div className="text-center sm:text-left">

              <div className="
                flex
                flex-col
                sm:flex-row
                items-center
                sm:items-center
                gap-4
                mb-5
              ">

                <img
                  src="/mainLogo.png"
                  alt="Adivasi Yuva Seva Sangh Logo"
                  className="
                    w-24
                    h-24
                    lg:w-24
                    lg:h-24
                    object-contain
                    shrink-0
                  "
                />

                <div className="text-center sm:text-left">

                  <h3 className="
                    font-bold
                    text-lg
                    lg:text-xl
                    leading-tight
                    text-white
                    max-w-[240px]
                  ">
                    Adivasi Yuva Seva Sangh
                  </h3>

                </div>

              </div>


              <p className="
                text-gray-400
                text-sm
                leading-relaxed
                max-w-[330px]
                mx-auto
                sm:mx-0
              ">
                Collaborative social Entrepreneurship platform
              </p>


              {/* Social Icons */}
              <div className="
                flex
                justify-center
                sm:justify-start
                gap-3
                mt-7
              ">

                {socialLinks.map((s) => (

                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="
                      w-10
                      h-10
                      bg-gray-800
                      rounded-full
                      flex
                      items-center
                      justify-center
                      hover:bg-gray-600
                      transition-colors
                      shrink-0
                    "
                  >
                    {s.icon}
                  </a>

                ))}

              </div>

            </div>


            {/* =====================================================
                QUICK LINKS
            ===================================================== */}
            <div className="text-center sm:text-left">

              <h4 className="
                font-semibold
                text-sm
                uppercase
                tracking-wider
                mb-5
                lg:mb-6
                text-white
              ">
                Quick Links
              </h4>


              <ul className="space-y-3.5 lg:space-y-4">

                {[
                  {
                    label: 'About Us',
                    path: '/about',
                  },
                  {
                    label: 'Programs',
                    path: '/programs',
                  },
                  {
                    label: 'Get Involved',
                    path: '/get-involved',
                  },
                  {
                    label: 'Media & Updates',
                    path: '/media',
                  },
                  {
                    label: 'Contact Us',
                    path: '/contact',
                  },
                  {
                    label: 'Transparency',
                    path: '/about/transparency',
                  },
                ].map((link) => (

                  <li key={link.path}>

                    <Link
                      to={link.path}
                      className="
                        text-gray-400
                        text-sm
                        hover:text-white
                        transition-colors
                      "
                    >
                      {link.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* =====================================================
                PROGRAMS
            ===================================================== */}
            <div className="text-center sm:text-left">

              <h4 className="
                font-semibold
                text-sm
                uppercase
                tracking-wider
                mb-5
                lg:mb-6
                text-white
              ">
                Programs
              </h4>


              <ul className="space-y-3.5 lg:space-y-4">

                {[
                  {
                    label: 'Education & Career',
                    path: '/programs/education',
                  },
                  {
                    label: 'Youth Leadership',
                    path: '/programs/youth-leadership',
                  },
                  {
                    label: 'Tribal Empowerment',
                    path: '/programs/tribal-empowerment',
                  },
                  {
                    label: 'Social Enterprise',
                    path: '/programs/social-entrepreneurship',
                  },
                  {
                    label: 'Social Awareness',
                    path: '/programs/social-awareness',
                  },
                ].map((link) => (

                  <li key={link.path}>

                    <Link
                      to={link.path}
                      className="
                        text-gray-400
                        text-sm
                        hover:text-white
                        transition-colors
                      "
                    >
                      {link.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* =====================================================
                CONTACT
            ===================================================== */}
            <div className="text-center sm:text-left">

              <h4 className="
                font-semibold
                text-sm
                uppercase
                tracking-wider
                mb-4
                lg:mb-6
                text-white
              ">
                Contact
              </h4>


              <ul className="space-y-4 lg:space-y-5">


                {/* Address */}
                <li className="
                  flex
                  items-start
                  justify-center
                  sm:justify-start
                  gap-2
                  text-sm
                  text-gray-400
                ">

                  <MapPin
                    className="
                      w-4
                      h-4
                      mt-0.5
                      shrink-0
                    "
                  />

                  <span className="
                    leading-relaxed
                    text-left
                    max-w-[300px]
                  ">
                    AYUSH, Waghadi, Kothal Pada, Post Kasa,
                    Taluka Dahanu, Dist Palghar, Maharashtra 401607
                  </span>

                </li>


                {/* Email */}
                <li>

                  <a
                    href="mailto:ayush@adiyuva.in"
                    className="
                      flex
                      items-center
                      justify-center
                      sm:justify-start
                      gap-3
                      text-sm
                      text-gray-400
                      hover:text-white
                      transition-colors
                    "
                  >

                    <Mail className="w-4 h-4 shrink-0" />

                    <span>
                      ayush@adiyuva.in
                    </span>

                  </a>

                </li>


                {/* Phone */}
                <li>

                  <a
                    href="tel:+919246361249"
                    className="
                      flex
                      items-center
                      justify-center
                      sm:justify-start
                      gap-3
                      text-sm
                      text-gray-400
                      hover:text-white
                      transition-colors
                    "
                  >

                    <Phone className="w-4 h-4 shrink-0" />

                    <span>
                      +91 9246 361 249
                    </span>

                  </a>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div>

        <div className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-5
          lg:py-6
        ">

          <div className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
            text-center
            sm:text-left
          ">


            {/* Copyright */}
            <p className="
              text-gray-500
              text-xs
              leading-relaxed
            ">
              © {new Date().getFullYear()} AYUSH - Adivasi Yuva Shakti.
              All rights reserved.
            </p>


            {/* Bottom Links */}
            <div className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
            ">

              <a
                href="#"
                className="
                  text-gray-500
                  text-xs
                  hover:text-gray-300
                  transition-colors
                "
              >
                Privacy Policy
              </a>


              <a
                href="#"
                className="
                  text-gray-500
                  text-xs
                  hover:text-gray-300
                  transition-colors
                "
              >
                Terms of Use
              </a>


              <a
                href="#"
                className="
                  text-gray-500
                  text-xs
                  hover:text-gray-300
                  transition-colors
                "
              >
                Accessibility
              </a>


              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  w-9
                  h-9
                  bg-gray-800
                  rounded-full
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-600
                  transition-colors
                "
              >
                <ArrowUp className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}