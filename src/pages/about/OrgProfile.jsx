
import { useState } from 'react';
import { ExternalLink, CheckCircle, XCircle } from 'lucide-react';

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
    value:
      'Proprietor & Authorized User of Warli Painting Geographical Indication (GI)',
  },
];

const policies = [
  {
    name: 'IT & Internet Usage Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1YTY6vIh3UzVmtJoU6STjeEJcX8apm52Y/view',
  },
  {
    name: 'Anti-Harassment Policy',
    type: 'PDF',
    url: '/documents/anti-harassment-policy.pdf',
  },
  {
    name: 'Child Protection Policy',
    type: 'PDF',
    url: '/documents/child-protection-policy.pdf',
  },
  {
    name: 'Financial Management Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1St-olBBdoF55a0ybewps4sOzTs9u2v_Q/view',
  },
  {
    name: 'Human Resources Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1-umG2Tbg34FpibL5CjO9JLMfaekQLq4G/view',
  },
  {
    name: 'Whistleblower Policy',
    type: 'PDF',
    url: '/documents/whistleblower-policy.pdf',
  },
  {
    name: 'Conflict of Interest Policy',
    type: 'PDF',
    url: '/documents/conflict-of-interest-policy.pdf',
  },
  {
    name: 'Data Protection & Privacy Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1_mtvldDClZwTpYzffDBtlbtaFQeYzEmL/view',
  },
  {
    name: 'Volunteer Management Policy',
    type: 'PDF',
    url: '/documents/volunteer-management-policy.pdf',
  },
  {
    name: 'Environmental & Social Safeguards',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1fxyOWLSKc_chQQlwkEA4P4x6ofweULPU/view',
  },
  {
    name: 'Posh Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1GgG_9ttMWxGU5HdJZVUfvE3fZono_OmG/view',
  },
  {
    name: 'Policy on Media and Communication',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1Co2uhr1b14vowpCUxr0dW_AKVxUco_gE/view',
  },
  {
    name: 'Partnership & Collaboration Policy',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1QfOHhNMBCKZd30Me629EIJz2GvKOwg5M/view',
  },
];

const reports = [
  {
    name: 'Annual Report 2023-24',
    type: 'Annual Report',
    url: '/documents/annual-report-2023-24.pdf',
  },
  {
    name: 'Annual Report 2022-23',
    type: 'Annual Report',
    url: '/documents/annual-report-2022-23.pdf',
  },
  {
    name: 'Annual Report 2021-22',
    type: 'Annual Report',
    url: '/documents/annual-report-2021-22.pdf',
  },
  {
    name: 'Annual Report 2020-21',
    type: 'Annual Report',
    url: '/documents/annual-report-2020-21.pdf',
  },
  {
    name: 'Audit Report 2023-24',
    type: 'Audit Report',
    url: '/documents/audit-report-2023-24.pdf',
  },
  {
    name: 'Audit Report 2022-23',
    type: 'Audit Report',
    url: '/documents/audit-report-2022-23.pdf',
  },
  {
    name: 'Audit Report 2021-22',
    type: 'Audit Report',
    url: '/documents/audit-report-2021-22.pdf',
  },
  {
    name: 'Audit Report 2020-21',
    type: 'Audit Report',
    url: '/documents/audit-report-2020-21.pdf',
  },
  {
    name: 'Impact Assessment Report 2023',
    type: 'Impact Report',
    url: '/documents/impact-assessment-report-2023.pdf',
  },
  {
    name: 'Financial Statements 2023-24',
    type: 'Financial',
    url: '/documents/financial-statements-2023-24.pdf',
  },
];

const dueDiligence = [
  {
    item: 'Legal Registration (Trust & Society)',
    status: true,
    details: 'Valid and up to date',
  },
  {
    item: '12A Registration',
    status: true,
    details: 'Income Tax exemption under Section 12A',
  },
  {
    item: '80G Certification',
    status: true,
    details: 'Donors eligible for tax deduction',
  },
  {
    item: 'FCRA Registration',
    status: false,
    details: 'Application submitted',
  },
  {
    item: 'Annual Compliance Filing',
    status: true,
    details: 'Filed for all years',
  },
  {
    item: 'Statutory Audit',
    status: true,
    details: 'Conducted by certified CA firm',
  },
  {
    item: 'Board Governance',
    status: true,
    details: 'Regular board meetings conducted',
  },
  {
    item: 'Internal Audit',
    status: true,
    details: 'Quarterly internal reviews',
  },
  {
    item: 'GuideStar India Profile',
    status: true,
    details: 'Bronze level certification',
  },
  {
    item: 'CSR1 Registration',
    status: true,
    details: 'Eligible for CSR funding',
  },
];

export default function OrgProfile() {
  const [activeTab, setActiveTab] = useState('introduction');

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'organization', label: 'Organization Chart' },
    { id: 'policies', label: 'Policies' },
    { id: 'reports', label: 'Reports' },
    { id: 'due-diligence', label: 'Due Diligence' },
  ];

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

      {/* ==================== TOGGLE NAVIGATION ==================== */}

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max py-3">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-5 sm:px-6 py-3
                    rounded-xl
                    text-sm font-medium
                    transition-all duration-300
                    whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* ==================== INTRODUCTION ==================== */}

      {activeTab === 'introduction' && (
        <section className="bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">
                Introduction
              </h2>

              <div className="border border-gray-200 rounded-xl overflow-hidden">

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[600px]">

                    <tbody>

                      {orgDetails.map((detail, idx) => (

                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? 'bg-gray-50'
                              : 'bg-white'
                          }
                        >

                          <td className="px-6 py-3.5 text-sm font-medium text-gray-700 w-1/3 border-r border-gray-100">
                            {detail.label}
                          </td>

                          <td className="px-6 py-3.5 text-sm text-gray-600">
                            {detail.value}
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ==================== ORGANIZATION CHART ==================== */}

      {activeTab === 'organization' && (
        <section className="bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="text-center mb-10">

              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Structure
              </p>

              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Organization Chart
              </h2>

            </div>

            <OrganizationChart />

          </div>

        </section>
      )}

      {/* ==================== POLICIES ==================== */}

      {activeTab === 'policies' && (
        <section className="bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="max-w-3xl mx-auto">

              <div className="text-center mb-10">

                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Governance
                </p>

                <h2 className="text-3xl font-bold text-gray-900 font-serif">
                  Policies & Guidelines
                </h2>

              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">

                {policies.map((policy, idx) => (

                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors gap-4"
                  >

                    <span className="text-sm text-gray-700">
                      {policy.name}
                    </span>

                    <a
                      href={policy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors shrink-0"
                    >

                      <ExternalLink className="w-3.5 h-3.5" />

                      {policy.type}

                    </a>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ==================== REPORTS ==================== */}

      {activeTab === 'reports' && (
        <section className="bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="max-w-3xl mx-auto">

              <div className="text-center mb-10">

                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Transparency
                </p>

                <h2 className="text-3xl font-bold text-gray-900 font-serif">
                  Annual Reports & Audits
                </h2>

              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden">

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[650px]">

                    <thead>

                      <tr className="bg-gray-900 text-white">

                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Document
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Type
                        </th>

                        <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                          Download
                        </th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-gray-100">

                      {reports.map((report, idx) => (

                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? 'bg-white'
                              : 'bg-gray-50'
                          }
                        >

                          <td className="px-6 py-3.5 text-sm text-gray-700">
                            {report.name}
                          </td>

                          <td className="px-6 py-3.5">

                            <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                              {report.type}
                            </span>

                          </td>

                          <td className="px-6 py-3.5 text-right">

                            <a
                              href={report.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
                            >

                              <ExternalLink className="w-3.5 h-3.5" />

                              PDF

                            </a>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ==================== DUE DILIGENCE ==================== */}

      {activeTab === 'due-diligence' && (
        <section className="bg-gray-50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="max-w-3xl mx-auto">

              <div className="text-center mb-10">

                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Compliance
                </p>

                <h2 className="text-3xl font-bold text-gray-900 font-serif">
                  Due Diligence Status
                </h2>

              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[700px]">

                    <thead>

                      <tr className="bg-gray-900 text-white">

                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Compliance Item
                        </th>

                        <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                          Status
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Details
                        </th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-gray-100">

                      {dueDiligence.map((item, idx) => (

                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? 'bg-white'
                              : 'bg-gray-50'
                          }
                        >

                          <td className="px-6 py-3.5 text-sm text-gray-700">
                            {item.item}
                          </td>

                          <td className="px-6 py-3.5 text-center">

                            {item.status ? (
                              <CheckCircle className="w-5 h-5 text-gray-700 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-gray-400 mx-auto" />
                            )}

                          </td>

                          <td className="px-6 py-3.5 text-sm text-gray-500">
                            {item.details}
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}
