import { User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import PageHeader from '../../components/PageHeader';
import { leadershipTeam } from '../../data/siteData';

export default function LeadershipTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Leadership Team"
        subtitle="Meet the founders and governing team leading AYUSH's mission of tribal empowerment."
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: 'Leadership Team' },
        ]}
      />

      {/* Founding Team */}
      <section className="flex-1 flex flex-col justify-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Founders</p>
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Founding Team</h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            grabCursor
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
           
            loop
            speed={500}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {leadershipTeam.founding.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="border border-gray-200 rounded-lg p-6 mx-2 hover:border-gray-400 transition-colors duration-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <User className="w-7 h-7 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Current Team */}
      <section className="flex-1 flex flex-col justify-center py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Current Year</p>
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Current Team</h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            grabCursor
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          
            loop
            speed={500}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {leadershipTeam.current.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="border border-gray-200 rounded-lg p-6 mx-2 hover:border-gray-400 transition-colors duration-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <User className="w-7 h-7 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-3">{member.bio}</p>
                  {member.social && (
                    <div className="flex justify-center gap-3 mt-3 pt-3 border-t border-gray-100">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-300 hover:text-gray-600 transition-colors" aria-label="LinkedIn">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-300 hover:text-gray-600 transition-colors" aria-label="Twitter">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
