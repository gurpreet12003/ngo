import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, CheckCircle, GraduationCap, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES, impactStats, programCategories, successStories } from '../data/siteData';

const heroSlides = [
  {
    image: IMAGES.hero1,
    title: 'Empowering Adivasi\nCommunities',
    subtitle: 'Building a future where every tribal youth has access to education, opportunity, and dignity.',
    cta: 'Learn More',
    link: '/about',
  },
  {
    image: IMAGES.tribal3,
    title: 'Strength Through\nUnity & Culture',
    subtitle: 'Preserving heritage while creating pathways to progress for indigenous communities.',
    cta: 'Our Programs',
    link: '/programs',
  },
  {
    image: IMAGES.education1,
    title: 'Education\nChanges Everything',
    subtitle: 'From career guidance to digital literacy — transforming lives one student at a time.',
    cta: 'Get Involved',
    link: '/get-involved',
  },
];

const iconMap= {
  Users: <Users className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  IndianRupee: <span className="text-xl font-bold">₹</span>,
  Heart: <Heart className="w-6 h-6" />,
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[85vh] min-h-[600px] bg-gray-900 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight whitespace-pre-line animate-fadeInUp">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="mt-5 text-lg text-gray-200 max-w-lg animate-fadeInUp delay-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-fadeInUp delay-300">
                <Link
                  to={heroSlides[currentSlide].link}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-700">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'Donate', desc: 'Support tribal communities through your generous contribution.', link: '/get-involved', color: 'bg-gray-900' },
              { icon: <Users className="w-6 h-6" />, title: 'Volunteer', desc: 'Join our team and make a direct impact in tribal areas.', link: '/get-involved', color: 'bg-gray-700' },
              { icon: <ArrowRight className="w-6 h-6" />, title: 'Join Us', desc: 'Become a member and be part of the change movement.', link: '/get-involved', color: 'bg-gray-800' },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 mt-4 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">Our Programs</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Five key areas of intervention driving sustainable change in tribal communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCategories.map((program, idx) => (
              <Link
                key={idx}
                to={`/programs/${program.slug}`}
                className="group relative overflow-hidden rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">{program.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{program.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Auto-Slider */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Impact</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">Success Stories</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={successStories[storyIndex].image}
                    alt={successStories[storyIndex].title}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Story {storyIndex + 1} of {successStories.length}</p>
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{successStories[storyIndex].title}</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">{successStories[storyIndex].story}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length)}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              {successStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStoryIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors my-auto ${
                    idx === storyIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
              <button
                onClick={() => setStoryIndex((prev) => (prev + 1) % successStories.length)}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events / Campaigns */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Stay Updated</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">Latest Campaigns & Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tribal Youth Education Drive 2024', date: 'Ongoing', desc: 'Enrolling 500 tribal students in career guidance programs across Palghar district.', image: IMAGES.education2 },
              { title: 'Warli Art Festival', date: 'March 2024', desc: 'Annual celebration of Warli art tradition with workshops, exhibitions, and performances.', image: IMAGES.art },
              { title: 'Organic Farming Workshop', date: 'April 2024', desc: 'Training 100 farmers in organic certification and sustainable agriculture practices.', image: IMAGES.farmers },
            ].map((event, idx) => (
              <div key={idx} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{event.date}</span>
                  <h3 className="font-semibold text-gray-900 mt-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif">Be Part of the Change</h2>
            <p className="mt-4 text-gray-300 text-lg">
              Your support can transform the lives of tribal communities. Donate, volunteer, or partner with us to make a lasting impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/get-involved" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                Donate Now <Heart className="w-4 h-4" />
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                Volunteer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
