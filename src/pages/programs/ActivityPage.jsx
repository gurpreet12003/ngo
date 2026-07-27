import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, Lightbulb, Wrench, BarChart3, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { programCategories } from '../../data/siteData';


export default function ActivityPage({ category }) {
  const { activityId } = useParams();
  const cat = programCategories.find((c) => c.slug === category);
  const activity = cat?.activities.find((a) => a.id === activityId);

  if (!cat || !activity) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Activity Not Found</h2>
          <Link to="/programs" className="text-gray-600 mt-4 inline-block hover:text-gray-900">← Back to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={activity.title}
        subtitle={activity.aim}
        breadcrumbs={[
          { label: 'Programs', path: '/programs' },
          { label: cat.title, path: `/programs/${cat.slug}` },
          { label: activity.title },
        ]}
        bgImage={activity.image}
      />

      {/* Activity Detail */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden mb-8">
                <img src={activity.image} alt={activity.title} className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>

              {/* Detail Cards */}
              <div className="space-y-6">
                <div className="border border-gray-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Aim</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.aim}</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Purpose</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.purpose}</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Method</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.method}</p>
                </div>

                <div className="border border-gray-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Impact</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.impact}</p>
                </div>
              </div>

              {/* Overview Table */}
              <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" colSpan={2}>Activity Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50"><td className="px-6 py-3 text-sm font-medium text-gray-700 w-1/3">Aim</td><td className="px-6 py-3 text-sm text-gray-600">{activity.aim}</td></tr>
                    <tr className="bg-white"><td className="px-6 py-3 text-sm font-medium text-gray-700">Purpose</td><td className="px-6 py-3 text-sm text-gray-600">{activity.purpose}</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-3 text-sm font-medium text-gray-700">Method</td><td className="px-6 py-3 text-sm text-gray-600">{activity.method}</td></tr>
                    <tr className="bg-white"><td className="px-6 py-3 text-sm font-medium text-gray-700">Impact</td><td className="px-6 py-3 text-sm text-gray-600">{activity.impact}</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-3 text-sm font-medium text-gray-700">Program</td><td className="px-6 py-3 text-sm text-gray-600">{cat.title}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gray-900 text-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-2">Get Involved</h3>
                <p className="text-gray-300 text-sm mb-4">{activity.cta}</p>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Join Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Activities */}
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Other Activities</h3>
                <div className="space-y-3">
                  {cat.activities
                    .filter((a) => a.id !== activityId)
                    .map((a, idx) => (
                      <Link
                        key={idx}
                        to={`/programs/${cat.slug}/${a.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-50"
                      >
                        <p className="text-sm font-medium text-gray-700">{a.title}</p>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{a.aim}</p>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Back Link */}
              <Link
                to={`/programs/${cat.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mt-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {cat.title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
