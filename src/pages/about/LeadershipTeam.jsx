
import { useRef, useState } from "react";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PageHeader from "../../components/PageHeader";
import { leadershipTeam } from "../../data/siteData";

export default function LeadershipTeam() {
  const [activeTeam, setActiveTeam] = useState("founding");

  const foundingPrevRef = useRef(null);
  const foundingNextRef = useRef(null);

  const currentPrevRef = useRef(null);
  const currentNextRef = useRef(null);

  const isFounding = activeTeam === "founding";

  return (
    <div className="min-h-screen flex flex-col">

      <PageHeader
        title="Leadership Team"
        subtitle="Meet the founders and governing team leading AYUSH's mission of tribal empowerment."
        breadcrumbs={[
          { label: "About Us", path: "/about" },
          { label: "Leadership Team" },
        ]}
      />

      {/* ==================== TEAM TOGGLE ==================== */}

      <section className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-center">
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full border border-gray-200">

              <button
                type="button"
                onClick={() => setActiveTeam("founding")}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isFounding
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Founding Team
              </button>

              <button
                type="button"
                onClick={() => setActiveTeam("current")}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !isFounding
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Current Team
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ==================== FOUNDING TEAM ==================== */}

      {isFounding && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Founders
                </p>

                <h2 className="text-3xl font-bold font-serif text-gray-900 mt-2">
                  Founding Team
                </h2>
              </div>

              <div className="flex gap-3">

                <button
                  ref={foundingPrevRef}
                  type="button"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  ref={foundingNextRef}
                  type="button"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

            <Swiper
              key="founding"
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = foundingPrevRef.current;
                swiper.params.navigation.nextEl = foundingNextRef.current;
              }}
              navigation
              loop={leadershipTeam.founding.length > 3}
              speed={600}
              grabCursor
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {leadershipTeam.founding.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div className="mx-2 bg-white border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all duration-300">

                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-5">
                      <User className="w-7 h-7 text-gray-500" />
                    </div>

                    <h3 className="text-lg font-semibold text-center text-gray-900">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-500 text-center mt-1">
                      {member.role}
                    </p>

                    <p className="text-sm text-gray-600 text-center leading-6 mt-4 line-clamp-3">
                      {member.bio}
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </section>
      )}

      {/* ==================== CURRENT TEAM ==================== */}

      {!isFounding && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Current Year
                </p>

                <h2 className="text-3xl font-bold font-serif text-gray-900 mt-2">
                  Current Team
                </h2>
              </div>

              <div className="flex gap-3">

                <button
                  ref={currentPrevRef}
                  type="button"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  ref={currentNextRef}
                  type="button"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

            <Swiper
              key="current"
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = currentPrevRef.current;
                swiper.params.navigation.nextEl = currentNextRef.current;
              }}
              navigation
              loop={leadershipTeam.current.length > 3}
              speed={600}
              grabCursor
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {leadershipTeam.current.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div className="mx-2 bg-white border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all duration-300">

                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-5">
                      <User className="w-7 h-7 text-gray-500" />
                    </div>

                    <h3 className="text-lg font-semibold text-center text-gray-900">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-500 text-center mt-1">
                      {member.role}
                    </p>

                    <p className="text-sm text-gray-600 text-center leading-6 mt-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {member.social && (
                      <div className="flex justify-center gap-3 mt-5 pt-5 border-t border-gray-100">

                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0 4.124 2.062 2.062 0 0 1 0-4.124zm1.782 13.019H3.555V9h3.564v11.452z" />
                            </svg>
                          </a>
                        )}

                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
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
      )}

    </div>
  );
}