import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';
// import { ProgramCategory } from '../data/siteData';



export default function ProgramCategoryPage({ category }) {
  return (
    <div>
      <PageHeader
        title={category.title}
        subtitle={category.description}
        breadcrumbs={[
          { label: 'Programs', path: '/programs' },
          { label: category.title },
        ]}
        bgImage={category.image}
      />

      {/* Overview Table */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Activity Overview</h2>
            <p className="text-gray-500 mt-2">Detailed breakdown of our activities in this program area.</p>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider">Activity</th>
                  <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider">Aim</th>
                  <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider">Method</th>
                  <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider">Impact</th>
                  <th className="px-5 py-3 text-center text-xs font-medium uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {category.activities.map((activity, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 text-sm font-medium text-gray-700 min-w-[150px]">{activity.title}</td>
                    <td className="px-5 py-4 text-sm text-gray-600 min-w-[150px]">{activity.aim}</td>
                    <td className="px-5 py-4 text-sm text-gray-600 min-w-[200px]">{activity.method}</td>
                    <td className="px-5 py-4 text-sm text-gray-600 min-w-[150px]">{activity.impact}</td>
                    <td className="px-5 py-4 text-center">
                      <Link
                        to={`/programs/${category.slug}/${activity.id}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Activity Cards */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Explore Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.activities.map((activity, idx) => (
              <Link
                key={idx}
                to={`/programs/${category.slug}/${activity.id}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-5">
                  <div className="sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="sm:col-span-3 p-5">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{activity.aim}</p>
                    <p className="text-xs text-gray-400 mt-2">{activity.impact}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
