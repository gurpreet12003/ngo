import PageHeader from '../../components/PageHeader';
import { IMAGES } from '../../data/siteData';

const values = [
  {
    title: "Unity & Volunteerism",
    desc: "Strengthening community through collective effort.",
  },
  {
    title: "Empowerment",
    desc: " Providing education, skills, and leadership opportunities.",
  },
  {
    title: "Cultural Pride",
    desc: "Preserving and promoting tribal traditions and identity.",
  },
  {
    title: "Sustainability",
    desc: " Advocating eco-friendly practices and environmental care.",
  },
  {
    title: "Integrity & Social Responsibility",
    desc: "Building trust and accountability within communities.",
  },
  {
    title: "Knowledge Sharing",
    desc: "Creating a network of mentors, professionals, and youth who learn, grow, and support one another.",
  },
];
const pillars = [
  {
    title: "Empowered Youth Leadership",
    desc: "Develop confident, skilled, and socially responsible tribal youth leaders.",
  },
  {
    title: "Knowledge & Skills Network",
    desc: "Connect mentors, professionals, educators, and youth through knowledge sharing.",
  },
  {
    title: "Cultural Heritage",
    desc: "Preserve tribal art, language, music, traditions, and indigenous wisdom.",
  },
  {
    title: "Social Awareness",
    desc: "Promote unity, social responsibility, and collective identity across tribal communities.",
  },
  {
    title: "Environmental Stewardship",
    desc: "Protect forests, biodiversity, and natural resources through sustainable practices.",
  },
  {
    title: "Collaborative Volunteerism",
    desc: "Encourage every individual to contribute through community service and collective action.",
  },
];
const objectives = [
  {
    title: "Education & Skill Development",
    desc: "Establish mentorship programs for academic and career guidance while facilitating vocational training and digital literacy for tribal youth.",
  },
  {
    title: "Cultural Preservation",
    desc: "Organize cultural festivals and workshops to promote tribal art, music, and language, while documenting and digitizing indigenous knowledge for future generations.",
  },
  {
    title: "Youth Leadership & Social Responsibility",
    desc: "Create leadership training modules for tribal youth and launch community service initiatives that strengthen social responsibility and community bonds.",
  },
  {
    title: "Sustainable Livelihoods",
    desc: "Support entrepreneurship, self-help groups, eco-friendly livelihood initiatives, and sustainable agriculture in tribal communities.",
  },
  {
    title: "Environmental Stewardship",
    desc: "Conduct awareness campaigns on conservation and climate resilience while implementing tree plantation drives and biodiversity conservation projects.",
  },
  {
    title: "Networking & Partnerships",
    desc: "Build alliances with educational institutions, NGOs, and government bodies while developing a volunteer network for resource sharing and capacity building.",
  },
];

const sdgs = [
  {
    no: "04",
    title: "Quality Education",
    why: "AYUSH focuses on education and skill development for tribal youth through mentorship, vocational training, and digital literacy programs.",
    impact: "Improves access to inclusive and equitable education, reducing dropout rates and enhancing employability.",
  },
  {
    no: "08",
    title: "Decent Work and Economic Growth",
    why: "Promotes sustainable livelihoods, entrepreneurship, and self-help groups in tribal communities.",
    impact: "Creates economic opportunities and reduces poverty through skill-based employment.",
  },
  {
    no: "10",
    title: "Reduced Inequalities",
    why: "Works to empower marginalized tribal communities, ensuring equal access to resources and opportunities.",
    impact: "Bridges gaps between tribal and mainstream society, fostering social inclusion.",
  },
  {
    no: "11",
    title: "Sustainable Cities and Communities",
    why: "Strengthens community bonds and promotes cultural heritage preservation.",
    impact: "Builds resilient tribal communities with strong cultural identity and sustainable practices.",
  },
  {
    no: "13",
    title: "Climate Action",
    why: "Implements tree plantation drives, biodiversity projects, and eco-friendly livelihood initiatives.",
    impact: "Contributes to climate resilience and environmental conservation.",
  },
  {
    no: "15",
    title: "Life on Land",
    why: "Protects forests and biodiversity through awareness and conservation programs.",
    impact: "Ensures sustainable use of terrestrial ecosystems and indigenous knowledge preservation.",
  },
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
                AYUSH envisions a vibrant and self-reliant Adivasi community where empowered
                youth become the torchbearers of cultural preservation, environmental
                stewardship, and sustainable development. Through knowledge-sharing,
                volunteerism, and intergenerational mentorship, tribal youth confidently
                embrace modern opportunities while remaining deeply connected to their
                heritage.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                We believe in building a future where communities grow together through
                education, leadership, social awareness, and environmental responsibility,
                creating lasting positive change for both people and the planet.
              </p>

              <div className="mt-8  border-l-4 border-black p-6 rounded-r-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Vision Statement
                </h3>

                <p className="italic text-grey-800 leading-relaxed">
                  "Let us do it together—connecting Adivasi youth through knowledge and
                  cultural pride to foster self-reliance, unity, and sustainable
                  development for a better planet."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pillar  */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
              Our Vision
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-black">
              Key Pillars
            </h2>

            <div className="w-20 h-px bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-black hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-full border-2 border-black text-black flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-black mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {pillar.desc}
                </p>
              </div>
            ))}
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
                  AYUSH is committed to uniting and empowering tribal youth through
                  education, skill development, cultural preservation, and leadership
                  development. We create opportunities that strengthen communities,
                  encourage sustainable livelihoods, and inspire socially responsible
                  citizens.
                </p>

                <p>
                  Through knowledge-sharing, volunteerism, collaboration, and environmental
                  stewardship, we strive to preserve indigenous wisdom while preparing young
                  people to confidently meet the challenges and opportunities of the modern
                  world.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Tagline
                  </h4>

                  <p className="italic text-amber-800">
                    "Let us do it together – Empowering Tribal Youth, Preserving Heritage,
                    Building a Sustainable Future."
                  </p>
                </div>
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
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {idx + 1}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {obj.title}
                      </h3>

                      <p className="text-gray-600 leading-7">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SDGs */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
    <div className="text-center mb-12">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        United Nations Sustainable Development Goals
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold font-serif mt-2">
        SDGs AYUSH is Working On
      </h2>
    </div>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {sdgs.map((sdg) => (
    <div
      key={sdg.no}
      className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
    >
      <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center mb-6">
        <span className="text-xl font-bold">{sdg.no}</span>
      </div>

      <h3 className="text-2xl font-bold mb-2">
        SDG {sdg.no}
      </h3>

      <h4 className="text-lg font-semibold mb-5">
        {sdg.title}
      </h4>

      <div className="mb-5">
        <h5 className="font-semibold text-black mb-2">Why?</h5>
        <p className="text-gray-600 leading-7">
          {sdg.why}
        </p>
      </div>

      <div>
        <h5 className="font-semibold text-black mb-2">Impact</h5>
        <p className="text-gray-600 leading-7">
          {sdg.impact}
        </p>
      </div>
    </div>
  ))}
</div>

    <div className="mt-12 bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-semibold mb-4">
        Additional Indirect Contributions
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>
          <strong>SDG 3 – Good Health & Well-being:</strong> Through awareness
          programs and promotion of traditional medicinal knowledge.
        </li>

        <li>
          <strong>SDG 17 – Partnerships for the Goals:</strong> By collaborating
          with NGOs, educational institutions, government bodies, volunteers,
          and community organizations.
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  );
}
