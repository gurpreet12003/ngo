

import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Info,
  Lightbulb,
  Users,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

import PageHeader from '../../components/PageHeader';
import { programCategories } from '../../data/siteData';

export default function ActivityPage({ category }) {
  const { activityId } = useParams();

  const cat = programCategories.find(
    (c) => c.slug === category
  );

  const activity = cat?.activities.find(
    (a) => a.id === activityId
  );

  // Activity not found
  if (!cat || !activity) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Activity Not Found
          </h2>

          <p className="text-gray-500 mt-2">
            The activity you are looking for does not exist.
          </p>

          <Link
            to="/programs"
            className="text-gray-600 mt-4 inline-flex items-center gap-2 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title={activity.title}
        subtitle={activity.subtitle}
        breadcrumbs={[
          {
            label: 'Programs',
            path: '/programs',
          },
          {
            label: cat.title,
            path: `/programs/${cat.slug}`,
          },
          {
            label: activity.title,
          },
        ]}
        bgImage={activity.image}
      />

      {/* Activity Detail */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* =========================
                MAIN CONTENT
            ========================== */}
            <div className="lg:col-span-2">

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Activity Intro */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  {cat.title}
                </span>

                <h2 className="text-3xl font-bold text-gray-900 font-serif mt-2">
                  {activity.title}
                </h2>

                {activity.subtitle && (
                  <p className="text-gray-500 mt-3 text-lg">
                    {activity.subtitle}
                  </p>
                )}
              </div>

              {/* Detail Cards */}
              <div className="space-y-6">

                {/* Importance */}
                {activity.importance && (
                  <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
                        <Lightbulb className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Why It Matters
                        </h3>

                        <p className="text-xs text-gray-400 mt-0.5">
                          Importance of this initiative
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {activity.importance}
                    </p>
                  </div>
                )}

                {/* Impact */}
                {activity.impact && (
                  <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
                        <BarChart3 className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Expected Impact
                        </h3>

                        <p className="text-xs text-gray-400 mt-0.5">
                          How this activity creates change
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {activity.impact}
                    </p>
                  </div>
                )}

                {/* Collaboration */}
                {activity.collaboration?.length > 0 && (
                  <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-5">

                      <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
                        <Users className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Collaboration
                        </h3>

                        <p className="text-xs text-gray-400 mt-0.5">
                          Partners and implementation opportunities
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {activity.collaboration.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-3"
                        >
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* =========================
                  ACTIVITY SUMMARY
              ========================== */}
              <div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden">

                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th
                        className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                        colSpan={2}
                      >
                        Activity Summary
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* Activity */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700 w-1/3">
                        Activity
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {activity.title}
                      </td>
                    </tr>

                    {/* Subtitle */}
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        Overview
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {activity.subtitle || '—'}
                      </td>
                    </tr>

                    {/* Importance */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        Importance
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600 leading-relaxed">
                        {activity.importance || '—'}
                      </td>
                    </tr>

                    {/* Impact */}
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        Impact
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600 leading-relaxed">
                        {activity.impact || '—'}
                      </td>
                    </tr>

                    {/* Program */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        Program
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {cat.title}
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>

            {/* =========================
                SIDEBAR
            ========================== */}
            <div className="lg:col-span-1">

              {/* Get Involved */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 mb-6">

                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  Get Involved
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  Support this initiative and help us create meaningful
                  and sustainable change within communities.
                </p>

                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Activities */}
              <div className="border border-gray-100 rounded-2xl p-6">

                <h3 className="font-semibold text-gray-900 mb-1">
                  Other Activities
                </h3>

                <p className="text-xs text-gray-400 mb-4">
                  Explore more initiatives under {cat.title}
                </p>

                <div className="space-y-3">

                  {cat.activities
                    .filter((a) => a.id !== activityId)
                    .map((a, idx) => (
                      <Link
                        key={idx}
                        to={`/programs/${cat.slug}/${a.id}`}
                        className="group block p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50"
                      >
                        <div className="flex items-start justify-between gap-3">

                          <div>
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              {a.title}
                            </p>

                            {a.subtitle && (
                              <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                {a.subtitle}
                              </p>
                            )}
                          </div>

                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-700 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />

                        </div>
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

