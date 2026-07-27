import { ExternalLink } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const orgDetails = [
  { label: 'Organization Name', value: 'Adivasi Yuva Seva Sangh (AYUSH)' },
  { label: 'Legal Status', value: 'Registered Non-Governmental Organization (NGO)' },
  {
    label: 'Registered Under',
    value: 'Society Registration Act, 1860 & The Bombay Public Trusts Act, 1950',
  },
  { label: 'Area of Work', value: 'All India' },
  { label: 'Year of Registration', value: '2011' },

  { label: 'NITI Aayog Darpan', value: 'Registered' },
  { label: 'CSR-1 Status', value: 'Registered' },

  {
    label: 'Income Tax Exemption',
    value: 'Registered under Section 12AB(1)(b) & Section 80G(5)',
  },

  { label: 'GSTN', value: 'Registered' },
  { label: 'Udyam Registration', value: 'Registered' },
  { label: 'IEC Certificate', value: 'Registered' },
  { label: 'Professional Tax Certificate', value: 'Registered' },
  { label: 'FSSAI Licence', value: 'Registered' },

  {
    label: 'Geographical Indication',
    value: 'Proprietor & Authorized User of Warli Painting Geographical Indication (GI)',
  },
];
const policies = [
  { name: 'Anti-Harassment Policy', type: 'PDF' },
  { name: 'Child Protection Policy', type: 'PDF' },
  { name: 'Financial Management Policy', type: 'PDF' },
  { name: 'Human Resources Policy', type: 'PDF' },
  { name: 'Whistleblower Policy', type: 'PDF' },
  { name: 'Conflict of Interest Policy', type: 'PDF' },
  { name: 'Data Protection & Privacy Policy', type: 'PDF' },
  { name: 'Volunteer Management Policy', type: 'PDF' },
  { name: 'Environmental & Social Safeguards', type: 'PDF' },
];

export default function OrgProfile() {
  return (
    <div>
      <PageHeader
        title="Organization Profile"
        subtitle="Legal status, registrations, compliance, and organizational credentials and policies."
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: 'Organization Profile' },
        ]}
      />

      {/* Organization Details Table */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">Introduction</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {orgDetails.map((detail, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-3.5 text-sm font-medium text-gray-700 w-1/3 border-r border-gray-100">{detail.label}</td>
                      <td className="px-6 py-3.5 text-sm text-gray-600">{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8 text-center">Organization Structure</h2>
           <div className="flex flex-col items-center">
  <div className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium">
    General Body
  </div>

  <div className="w-px h-6 bg-gray-300" />

  <div className="bg-gray-800 text-white px-8 py-3 rounded-lg text-sm font-medium">
    Governing Board
  </div>

  <div className="w-px h-6 bg-gray-300" />

  <div className="bg-gray-700 text-white px-8 py-3 rounded-lg text-sm font-medium">
    President • Secretary • Treasurer
  </div>

  <div className="w-px h-6 bg-gray-300" />

  <div className="bg-gray-600 text-white px-8 py-3 rounded-lg text-sm font-medium">
    Program & Administrative Team
  </div>

  <div className="w-px h-6 bg-gray-300" />

  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
    {[
      'Education',
      'Youth Development',
      'Warli Painting GI',
      'Social Entrepreneurship',
      'Community Development',
    ].map((dept) => (
      <div
        key={dept}
        className="bg-white border border-gray-200 px-4 py-3 rounded-lg text-xs font-medium text-gray-700 text-center"
      >
        {dept}
      </div>
    ))}
  </div>

  <div className="flex gap-3 mt-3 w-full">
    {[
      'Community Members',
      'Volunteers',
      'CSR Partners',
      'Government Departments',
    ].map((role) => (
      <div
        key={role}
        className="flex-1 bg-gray-100 px-3 py-2 rounded text-xs text-gray-500 text-center"
      >
        {role}
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">Policies & Guidelines</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
              {policies.map((policy, idx) => (
                <div key={idx} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700">{policy.name}</span>
                  <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {policy.type}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
