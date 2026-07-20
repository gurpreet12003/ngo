import PageHeader from '../../components/PageHeader';
import { completedProjects } from '../../data/siteData';

const supporters = [
  { name: 'Volunteer Group A', details: 'Field support for education programs', year: '2023-24' },
  { name: 'College Intern Batch 1', details: 'Research and documentation support', year: '2023-24' },
  { name: 'Volunteer Group B', details: 'Community mobilization for health camps', year: '2022-23' },
  { name: 'Corporate Volunteer Team', details: 'Digital literacy training support', year: '2022-23' },
  { name: 'College Intern Batch 2', details: 'Social media and communications', year: '2021-22' },
  { name: 'Local Support Committee', details: 'Logistics and event management', year: '2021-22' },
];

export default function CompletedProjects() {
  return (
    <div>
      <PageHeader
        title="Completed Projects"
        subtitle="A comprehensive record of our successfully completed projects and their outcomes."
        breadcrumbs={[
          { label: 'Programs', path: '/programs' },
          { label: 'Completed Projects' },
        ]}
      />

      {/* Projects Table */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">Project Summary</h2>
          <div className="space-y-4">
            {completedProjects.map((project) => (
              <div key={project.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">{project.id}</span>
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-3 ml-11">
                      <div><span className="text-xs font-medium text-gray-400 uppercase">Objective:</span><p className="text-sm text-gray-600">{project.objective}</p></div>
                      <div><span className="text-xs font-medium text-gray-400 uppercase">Scope:</span><p className="text-sm text-gray-600">{project.scope}</p></div>
                      <div><span className="text-xs font-medium text-gray-400 uppercase">Outcome:</span><p className="text-sm text-gray-600">{project.outcome}</p></div>
                      <div><span className="text-xs font-medium text-gray-400 uppercase">Sponsored By:</span><p className="text-sm text-gray-600">{project.sponsor}</p></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-center md:items-end gap-2 ml-11 md:ml-0">
                    <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{project.year}</span>
                    <span className="text-xs font-medium px-3 py-1 bg-gray-900 text-white rounded-full">{project.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-8">List of Supporters</h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name / Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Support Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {supporters.map((s, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{s.name}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-600">{s.details}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-500">{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
