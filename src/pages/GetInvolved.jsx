import { ExternalLink, Heart, Users, Briefcase, UserPlus, FolderOpen, Building, CreditCard } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const involvementOptions = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Volunteer',
    description: 'Contribute your time and skills to our programs in education, health, environment, and community development.',
    scope: 'Field work, training, documentation, communications',
    tasks: 'Teaching, mentoring, organizing events, data collection',
    impact: '500+ volunteers have contributed 20,000+ hours',
    link: 'https://forms.google.com',
    linkLabel: 'Register as Volunteer',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Intern',
    description: 'Gain hands-on experience in rural development while making a real difference in tribal communities.',
    scope: 'Research, program management, social media, field immersion',
    tasks: 'Project documentation, impact assessment, content creation',
    impact: '100+ interns from 30+ colleges/universities',
    link: 'https://forms.google.com',
    linkLabel: 'Apply for Internship',
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: 'Become a Member',
    description: 'Join our growing network of change-makers committed to tribal empowerment.',
    scope: 'Annual/lifetime membership with governance participation',
    tasks: 'Attend meetings, vote on decisions, contribute expertise',
    impact: 'Active membership community driving organizational decisions',
    link: 'https://forms.google.com',
    linkLabel: 'Join as Member',
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: 'Sponsor a Project',
    description: 'Fund specific projects that align with your interests and see the direct impact of your support.',
    scope: '5 projects available for sponsorship',
    tasks: 'Receive regular updates, impact reports, and field visit opportunities',
    impact: 'Direct, measurable outcomes in tribal communities',
    link: '#',
    linkLabel: 'View Projects',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Careers',
    description: 'Join our team and build a meaningful career in social development.',
    scope: 'Program management, field coordination, communications, finance',
    tasks: 'Full-time positions at headquarters and field offices',
    impact: 'Competitive compensation with purpose-driven work',
    link: 'https://forms.google.com',
    linkLabel: 'View Openings',
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Corporate Partnerships',
    description: 'Partner with us for CSR initiatives, employee engagement, and shared value creation.',
    scope: 'CSR projects, employee volunteering, skill-based support',
    tasks: 'Customized partnership models aligned with your CSR goals',
    impact: 'Multiple corporate partners across sectors',
    link: 'mailto:ayush@adiyuva.in',
    linkLabel: 'Write to Us',
  },
];

const sponsorableProjects = [
  { name: 'Digital Literacy Center', budget: '₹5 Lakhs', duration: '1 Year', beneficiaries: '200 youth', summary: 'Setup and run a computer training center in a tribal village.' },
  { name: 'Scholarship Fund', budget: '₹3 Lakhs', duration: 'Annual', beneficiaries: '50 students', summary: 'Sponsor higher education for meritorious tribal students.' },
  { name: 'Organic Farm Setup', budget: '₹8 Lakhs', duration: '2 Years', beneficiaries: '100 farmers', summary: 'Help farmers transition to organic farming with certification support.' },
  { name: 'Youth Leadership Camp', budget: '₹2 Lakhs', duration: 'Per Camp', beneficiaries: '100 youth', summary: 'Sponsor a 5-day residential leadership training program.' },
  { name: 'Water Harvesting', budget: '₹10 Lakhs', duration: '1 Year', beneficiaries: '500 families', summary: 'Build water harvesting structures in water-scarce tribal villages.' },
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

      {/* Sponsor Projects */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Sponsor a Project</h2>
            <p className="text-gray-500 mt-2">Choose a project that aligns with your passion and see the direct impact.</p>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">Summary</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider hidden md:table-cell">Beneficiaries</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sponsorableProjects.map((p, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{p.name}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-500 hidden sm:table-cell">{p.summary}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-600 text-center font-medium">{p.budget}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-500 text-center hidden md:table-cell">{p.beneficiaries}</td>
                    <td className="px-6 py-3.5 text-center">
                      <a href="#" className="text-xs font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors">
                        Details <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
