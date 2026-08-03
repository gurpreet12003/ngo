import PageHeader from '../../components/PageHeader';
import { milestones, IMAGES } from '../../data/siteData';

const plans = [
  {
    period: 'Mid-Term (2024-2026)', goals: [
      { goal: 'Expand to 10 districts in Maharashtra', status: 'In Progress' },
      { goal: 'Launch AYUSH Fellowship 2.0 with 50 fellows/year', status: 'Planned' },
      { goal: 'Establish 5 new digital literacy centers', status: 'In Progress' },
      { goal: 'Create 100 sustainable livelihood enterprises', status: 'Planned' },
      { goal: 'Document 10 tribal languages and art forms', status: 'Planned' },
    ]
  },
  {
    period: 'Long-Term (2026-2030)', goals: [
      { goal: 'Reach 200,000 beneficiaries across Western India', status: 'Vision' },
      { goal: 'Establish AYUSH as a national-level tribal development resource center', status: 'Vision' },
      { goal: 'Launch tribal products brand with pan-India presence', status: 'Vision' },
      { goal: 'Create a tribal youth leadership network of 5,000 members', status: 'Vision' },
      { goal: 'Influence tribal development policy at state and national levels', status: 'Vision' },
    ]
  },
];

export default function HistoryMilestones() {
  return (
    <div>
      <PageHeader
        title="History & Milestones"
        subtitle="Our journey of empowerment — from a small youth group to a comprehensive tribal development organization."
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: 'History & Milestones' },
        ]}
      />

      {/* Story of Formation */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Our Story
              </p>

              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                The Journey of Adivasi Yuva Seva Sangh
              </h2>

              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">

                <p>
                  In 1999 Started casually by students to support/guide tribal students. After several years’ experience started career & Education guidance, then Online & Offline activities using Social networking Since 2007. Registered as NGO in 2011 to take it in a more organized way. Started voluntary activities for Tribal empowerment. For preserving Traditional knowledge & exploring alternative livelihood We Register Warli Painting Geographical Indication Under Intellectual Property Rights Act & working on Post GI Activities. We were selected among National Best Practices by ISRN & Ministry of Culture.
                  Currently exploring Social Entrepreneurship with Traditional Knowledge (Tribal Art & Craft, Agriculture/Forest Produce) to strengthen Tribal eco system. In collaboration together with Community, Volunteers, Sponsors, Government Scheme, CSR, Crowd Fund.

                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.socialAwareness} alt="AYUSH early days" className="rounded-lg grayscale w-full aspect-square object-cover" />
              <img src={IMAGES.education1} alt="Education program" className="rounded-lg grayscale w-full aspect-square object-cover mt-8" />
              <img src={IMAGES.YouthLeadership} alt="Community work" className="rounded-lg grayscale w-full aspect-square object-cover -mt-4" />
              <img src={IMAGES.tribal3} alt="Tribal community" className="rounded-lg grayscale w-full aspect-square object-cover mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Timeline</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Key Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-px bg-gray-300" />
              <div className="space-y-8">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-start gap-8"
                  >
                    <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <span className="text-sm font-bold text-gray-800 text-center leading-5">
                        {m.year}
                      </span>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-5 flex-1 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900">{m.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Looking Ahead</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Mid & Long Term Plans</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h3 className="font-semibold">{plan.period}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {plan.goals.map((g, gIdx) => (
                    <div key={gIdx} className="px-6 py-4 flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-700">{g.goal}</span>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${g.status === 'In Progress' ? 'bg-gray-100 text-gray-700' :
                        g.status === 'Planned' ? 'bg-gray-50 text-gray-500' :
                          'bg-gray-50 text-gray-400'
                        }`}>
                        {g.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
