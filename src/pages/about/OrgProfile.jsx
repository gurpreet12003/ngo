import { ExternalLink, CheckCircle, XCircle  } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import OrganizationChart from '../../components/orgChart';

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

const reports = [
  { name: 'Annual Report 2023-24', type: 'Annual Report' },
  { name: 'Annual Report 2022-23', type: 'Annual Report' },
  { name: 'Annual Report 2021-22', type: 'Annual Report' },
  { name: 'Annual Report 2020-21', type: 'Annual Report' },
  { name: 'Audit Report 2023-24', type: 'Audit Report' },
  { name: 'Audit Report 2022-23', type: 'Audit Report' },
  { name: 'Audit Report 2021-22', type: 'Audit Report' },
  { name: 'Audit Report 2020-21', type: 'Audit Report' },
  { name: 'Impact Assessment Report 2023', type: 'Impact Report' },
  { name: 'Financial Statements 2023-24', type: 'Financial' },
];

const dueDiligence = [
  { item: 'Legal Registration (Trust & Society)', status: true, details: 'Valid and up to date' },
  { item: '12A Registration', status: true, details: 'Income Tax exemption under Section 12A' },
  { item: '80G Certification', status: true, details: 'Donors eligible for tax deduction' },
  { item: 'FCRA Registration', status: false, details: 'Application submitted' },
  { item: 'Annual Compliance Filing', status: true, details: 'Filed for all years' },
  { item: 'Statutory Audit', status: true, details: 'Conducted by certified CA firm' },
  { item: 'Board Governance', status: true, details: 'Regular board meetings conducted' },
  { item: 'Internal Audit', status: true, details: 'Quarterly internal reviews' },
  { item: 'GuideStar India Profile', status: true, details: 'Bronze level certification' },
  { item: 'CSR1 Registration', status: true, details: 'Eligible for CSR funding' },
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
    <OrganizationChart/>

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

         <div>
     
 {/* Reports */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">Annual Reports & Audits</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.map((report, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3.5 text-sm text-gray-700">{report.name}</td>
                      <td className="px-6 py-3.5">
                        <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{report.type}</span>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" /> PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">Due Diligence Status</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Compliance Item</th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dueDiligence.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3.5 text-sm text-gray-700">{item.item}</td>
                      <td className="px-6 py-3.5 text-center">
                        {item.status ? (
                          <CheckCircle className="w-5 h-5 text-gray-700 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-sm text-gray-500">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
      </section>
    </div>
  );
}
