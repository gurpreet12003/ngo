import { ExternalLink, Heart, Users, Briefcase, UserPlus, FolderOpen, Building, CreditCard } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const involvementOptions = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Volunteer",
    description:
      "Lend your time, skills, and energy to support awareness campaigns, education, mentoring, and community development activities across tribal regions.",
    scope: "Community outreach, education, awareness drives, mentoring",
    tasks:
      "Teaching, conducting workshops, mentoring students, organizing campaigns and field activities.",
    impact:
      "Become part of a volunteer network creating lasting change in tribal communities.",
    link: "https://forms.google.com",
    linkLabel: "Join as a Volunteer",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Internship",
    description:
      "Gain hands-on experience in grassroots tribal development while working on rural projects, research, and community initiatives.",
    scope: "Field research, project management, documentation, social initiatives",
    tasks:
      "Research, surveys, impact assessment, community engagement and reporting.",
    impact:
      "Develop practical experience while contributing to meaningful social change.",
    link: "https://forms.google.com",
    linkLabel: "Apply for Internship",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Careers",
    description:
      "Join AYUSH as a full-time or part-time team member and build a career dedicated to tribal development and social impact.",
    scope: "Program management, field operations, administration, communications",
    tasks:
      "Coordinate projects, manage programs and strengthen long-term community initiatives.",
    impact:
      "Work with purpose while improving the lives of indigenous communities.",
    link: "https://forms.google.com",
    linkLabel: "View Job Openings",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Sponsors",
    description:
      "Support our education, health, leadership, and livelihood initiatives through financial sponsorship.",
    scope: "Educational kits, workshops, health camps, community projects",
    tasks:
      "Sponsor specific programs and receive regular impact updates.",
    impact:
      "Your support directly empowers tribal families and youth.",
    link: "#",
    linkLabel: "Sponsor a Program",
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Members",
    description:
      "Become an active member of AYUSH and participate in governance, events, and long-term organizational planning.",
    scope: "Membership and organizational participation",
    tasks:
      "Attend meetings, support events, contribute ideas, and participate in decision making.",
    impact:
      "Help shape the future direction of AYUSH.",
    link: "https://forms.google.com",
    linkLabel: "Become a Member",
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Contributors",
    description:
      "Contribute your professional skills or resources. Designers, developers, photographers, writers, translators, and donors are all welcome.",
    scope: "Skill-based volunteering and resource contribution",
    tasks:
      "Content creation, technology support, design, photography, translation, equipment donation.",
    impact:
      "Every contribution strengthens our reach and community impact.",
    link: "#",
    linkLabel: "Contribute Today",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "CSR Partners",
    description:
      "Partner with AYUSH to implement sustainable Corporate Social Responsibility initiatives that create measurable social impact.",
    scope: "CSR implementation, employee engagement, development projects",
    tasks:
      "Co-design and support community development initiatives aligned with CSR objectives.",
    impact:
      "Build long-term, sustainable impact together.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "Explore CSR Partnerships",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Collaborators",
    description:
      "We welcome healthcare professionals, educators, trainers, researchers, and NGOs to jointly implement impactful community initiatives.",
    scope: "Technical expertise and collaborative projects",
    tasks:
      "Conduct workshops, provide expert guidance and co-create community programs.",
    impact:
      "Expand the reach and quality of grassroots development initiatives.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "Collaborate with Us",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Institutional Partnerships",
    description:
      "Partner with AYUSH to advance research, capacity building, innovation, and sustainable tribal development.",
    scope: "Universities, NGOs, Government, CSR, Social Enterprises",
    tasks:
      "Research collaboration, field projects, training, innovation and knowledge sharing.",
    impact:
      "Create scalable and sustainable development models together.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "Partner with Us",
  },
];

export default function GetInvolved() {
  return (
    <div>
      <PageHeader
        title="Lets Do It Together"
        subtitle="There are many ways to be part of the change. Choose how you'd like to contribute."
        breadcrumbs={[{ label: 'Lets Do It Together' }]}
      />

      {/* Involvement Options */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementOptions.map((option, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4">
                  {option.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{option.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{option.description}</p>
                <div className="mt-4 space-y-2 flex-1">
                  <div><span className="text-xs font-medium text-gray-400 uppercase">Scope:</span><p className="text-xs text-gray-600">{option.scope}</p></div>
                  <div><span className="text-xs font-medium text-gray-400 uppercase">Tasks:</span><p className="text-xs text-gray-600">{option.tasks}</p></div>
                  <div><span className="text-xs font-medium text-gray-400 uppercase">Impact:</span><p className="text-xs text-gray-600">{option.impact}</p></div>
                </div>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-5 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  {option.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <h2 className="text-3xl font-bold font-serif text-gray-900">
      Support Our Mission
    </h2>

    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      Your support enables AYUSH to continue empowering tribal communities
      through education, youth leadership, social entrepreneurship, traditional
      knowledge preservation, awareness campaigns, and sustainable livelihoods.
    </p>
  </div>
</section>

      {/* Contribute Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif">Contribute Funds</h2>
              <p className="text-gray-500 mt-2">Every contribution, big or small, creates a lasting impact in tribal communities.</p>
            </div>

            
<div className="space-y-6">

  {/* Bank Details */}
  <div className="border border-gray-200 rounded-xl p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Bank Transfer
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <p className="text-xs uppercase text-gray-500">Account Name</p>
        <p className="font-medium text-gray-900">
          AYUSH - Adivasi Yuva Shakti
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">Bank Name</p>
        <p className="font-medium text-gray-900">
          State Bank of India
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">Account Number</p>
        <p className="font-medium text-gray-900">
          XXXXXXXXXXXX
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">IFSC Code</p>
        <p className="font-medium text-gray-900">
          SBIN0XXXXXX
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">UPI ID</p>
        <p className="font-medium text-gray-900">
          ayush@sbi
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">Tax Benefit</p>
        <p className="font-medium text-gray-900">
          Eligible under 80G
        </p>
      </div>
    </div>
  </div>

  {/* QR Code */}
  <div className="border border-gray-200 rounded-xl p-6 text-center">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      Scan & Pay
    </h3>

    <img
      src="/images/donation-qr.png"
      alt="Donation QR"
      className="w-52 h-52 mx-auto rounded-lg border"
    />

    <p className="mt-4 text-gray-600">
      Scan this QR using any UPI app like Google Pay, PhonePe, Paytm or BHIM.
    </p>
  </div>

  {/* Razorpay */}
  <div className="border border-gray-200 rounded-xl p-6 text-center">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">
      Contribute Online
    </h3>

    <p className="text-gray-600 mb-6">
      Make a secure online donation using Credit Card, Debit Card, UPI,
      Net Banking or Wallet.
    </p>

    <button
      className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
    >
      <Heart className="w-5 h-5" />
      Contribute with Razorpay
    </button>
  </div>

</div>
          </div>
        </div>
      </section>
    </div>
  );
}
