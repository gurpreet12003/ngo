import { Link } from 'react-router-dom';
import { ArrowRight, Eye, BookOpen, Award, Building, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { IMAGES } from '../data/siteData';

const aboutSections = [
  { icon: <Eye className="w-6 h-6" />, title: 'Vision & Mission', desc: 'Our guiding principles and aspirations for tribal empowerment.', path: '/about/vision-mission' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'History & Milestones', desc: 'Our journey from inception to becoming a leading tribal organization.', path: '/about/history' },
  { icon: <Award className="w-6 h-6" />, title: 'Leadership Team', desc: 'Meet the dedicated team driving change in tribal communities.', path: '/about/leadership' },
  { icon: <Building className="w-6 h-6" />, title: 'Organization Profile', desc: 'Our structure, policies, and organizational framework.', path: '/about/org-profile' },
  { icon: <FileText className="w-6 h-6" />, title: 'Transparency', desc: 'Annual reports, audits, and due diligence information.', path: '/about/transparency' },
];

export default function AboutUs() {
  return (
    <div>
      <PageHeader
        title="About AYUSH"
        subtitle="Adivasi Yuva Seva Sangh (AYUSH) is a tribal-led organization dedicated to empowering indigenous communities through education, traditional knowledge, social entrepreneurship, and sustainable development since 1999."
        breadcrumbs={[{ label: 'About Us' }]}
      />
      {/* Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Who We Are
              </p>

              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                A Tribal-Led Organization for Community Empowerment
              </h2>

              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Adivasi Yuva Seva Sangh (AYUSH)</strong> is a tribal-led
                  non-profit organization that began as an informal initiative in
                  <strong>1999</strong> when a group of tribal students started supporting
                  fellow students pursuing higher education. What started as voluntary
                  guidance gradually evolved into a structured movement dedicated to
                  empowering tribal communities through education, leadership, cultural
                  preservation, and sustainable livelihoods.
                </p>

                <p>
                  After years of grassroots experience, AYUSH formally registered as an NGO
                  in <strong>2011</strong> under the Society Registration Act, 1860 and the
                  Bombay Public Trusts Act, 1950. Today, the organization works across
                  India in collaboration with communities, government departments, CSR
                  partners, volunteers, academic institutions, and development
                  organizations.
                </p>

                <p>
                  AYUSH is committed to preserving tribal heritage while creating modern
                  opportunities. The organization is the
                  <strong> Proprietor and Authorized User of the Warli Painting
                    Geographical Indication (GI)</strong>, has been recognized among
                  <strong> National Best Practices</strong>, and has received
                  <strong> UN ECOSOC Special Consultative Status</strong>. Through social
                  entrepreneurship and community-driven initiatives, AYUSH continues to
                  strengthen the tribal ecosystem for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.tribal1} alt="AYUSH Community" className="rounded-xl grayscale w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 rounded-lg p-5 shadow-lg">
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-500">Years of Community Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Explore More About Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSections.map((section, idx) => (
              <Link
                key={idx}
                to={section.path}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  {section.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{section.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 mt-4 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-serif">Want to know more?</h3>
              <p className="text-gray-400 mt-1">Reach out to us or explore our programs and impact.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link to="/programs" className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
