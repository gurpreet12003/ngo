import PageHeader from '../../components/PageHeader';
import { IMAGES } from '../../data/siteData';

const values = [
  { title: 'Community First', desc: 'Every decision centers on the needs and aspirations of tribal communities.' },
  { title: 'Youth Power', desc: 'Young people are the driving force of sustainable social transformation.' },
  { title: 'Cultural Pride', desc: 'Tribal heritage and traditions are sources of strength, not barriers to progress.' },
  { title: 'Transparency', desc: 'Open, accountable, and honest in all our dealings with stakeholders.' },
  { title: 'Sustainability', desc: 'Building programs that communities can own and sustain independently.' },
  { title: 'Collaboration', desc: 'Partnerships amplify impact — we work with government, civil society, and corporates.' },
];

const objectives = [
  'Provide quality educational guidance and career support to tribal youth',
  'Develop a cadre of young leaders committed to community development',
  'Strengthen tribal communities through rights awareness and cultural preservation',
  'Promote sustainable livelihood models through social entrepreneurship',
  'Drive awareness campaigns on gender equality, environment, and civic participation',
  'Build institutional capacity for effective program delivery and scale',
  'Advocate for policy changes that benefit tribal communities',
  'Create knowledge resources and training materials for community development',
];

export default function VisionMission() {
  return (
    <div>
      <PageHeader
        title="Vision & Mission"
        subtitle="Our guiding principles that drive every initiative and decision at AYUSH."
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: 'Vision & Mission' },
        ]}
      />

      {/* Vision */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={IMAGES.nature} alt="Nature" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Our Vision</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-serif italic leading-relaxed">
                  "A just and equitable society where every Adivasi community thrives with dignity, knowledge, and self-determination."
                </h2>
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We envision a future where tribal communities are empowered to shape their own destinies — where access to education is universal, cultural heritage is celebrated, livelihoods are sustainable, and youth lead with confidence and purpose.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our vision is rooted in the belief that Adivasi communities possess deep wisdom, resilience, and creativity that, when nurtured and supported, can transform not just their own lives but inspire broader societal change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Empowering Through Action
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To empower Adivasi (tribal) communities, particularly the youth, through comprehensive programs in education, leadership development, rights awareness, sustainable livelihoods, and cultural preservation.
                </p>
                <p>
                  We achieve this mission through grassroots engagement, participatory development approaches, strategic partnerships, and evidence-based interventions that are culturally sensitive and community-owned.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src={IMAGES.art} alt="Tribal Art" className="rounded-xl grayscale w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Core Values</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-gray-700">{idx + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Strategic Objectives</p>
              <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Objectives</h2>
            </div>
            <div className="space-y-3">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
