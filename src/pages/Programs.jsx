import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { programCategories, sdgGoals, impactStats, successStories } from '../data/siteData';

export default function Programs() {
  const [sdgIndex, setSdgIndex] = useState(0);
  const [storyIdx, setStoryIdx] = useState(0);
  const visibleSdgs = 3;

  useEffect(() => {
    const t = setInterval(() => setSdgIndex((p) => (p + 1) % sdgGoals.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStoryIdx((p) => (p + 1) % successStories.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <PageHeader
        title="Programs & Activities"
        subtitle="Five pillars of intervention creating sustainable change in tribal communities."
        breadcrumbs={[{ label: 'Programs & Activities' }]}
      />

      {/* Activities Summary */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Overview</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Activities Summary</h2>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Program Area</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Activities</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Beneficiaries</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider hidden sm:table-cell">Villages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { area: 'Education & Career Guidance', activities: 12, beneficiaries: '5,000+', villages: 50 },
                  { area: 'Youth Leadership', activities: 8, beneficiaries: '3,000+', villages: 35 },
                  { area: 'Tribal Empowerment', activities: 15, beneficiaries: '10,000+', villages: 80 },
                  { area: 'Social Entrepreneurship', activities: 6, beneficiaries: '2,000+', villages: 25 },
                  { area: 'Social Awareness', activities: 10, beneficiaries: '30,000+', villages: 100 },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{row.area}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-600 text-center">{row.activities}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-600 text-center">{row.beneficiaries}</td>
                    <td className="px-6 py-3.5 text-sm text-gray-600 text-center hidden sm:table-cell">{row.villages}</td>
                  </tr>
                ))}
                <tr className="bg-gray-900 text-white">
                  <td className="px-6 py-3 text-sm font-bold">Total</td>
                  <td className="px-6 py-3 text-sm font-bold text-center">51</td>
                  <td className="px-6 py-3 text-sm font-bold text-center">50,000+</td>
                  <td className="px-6 py-3 text-sm font-bold text-center hidden sm:table-cell">150+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Impact - Graphical */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Impact</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Outcomes & Reach</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-900 rounded-full" style={{ width: `${70 + idx * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Our Programs</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Explore by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/programs/${cat.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{cat.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{cat.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{cat.activities.length} activities</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 group-hover:gap-2 transition-all">
                    View Activities <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Impact</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Success Stories</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img src={successStories[storyIdx].image} alt="" className="w-full h-64 md:h-full object-cover grayscale" />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 font-serif">{successStories[storyIdx].title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{successStories[storyIdx].story}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button onClick={() => setStoryIdx((p) => (p - 1 + successStories.length) % successStories.length)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center"><ChevronLeft className="w-5 h-5 text-gray-700" /></button>
            {successStories.map((_, i) => (
              <button key={i} onClick={() => setStoryIdx(i)} className={`w-2.5 h-2.5 rounded-full my-auto ${i === storyIdx ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
            <button onClick={() => setStoryIdx((p) => (p + 1) % successStories.length)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center"><ChevronRight className="w-5 h-5 text-gray-700" /></button>
          </div>
        </div>
      </section>

      {/* SDG Coverage Slider */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Global Goals</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">SDG Coverage</h2>
            <p className="text-gray-600 mt-2">Our programs contribute to 12 of the 17 UN Sustainable Development Goals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sdgGoals.slice(sdgIndex % sdgGoals.length, (sdgIndex % sdgGoals.length) + visibleSdgs).concat(
              sdgGoals.slice(0, Math.max(0, (sdgIndex % sdgGoals.length) + visibleSdgs - sdgGoals.length))
            ).map((sdg, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center text-sm font-bold mb-3">
                  {sdg.number}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{sdg.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{sdg.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-6">
            {sdgGoals.map((_, i) => (
              <button key={i} onClick={() => setSdgIndex(i)} className={`w-2 h-2 rounded-full ${Math.floor(sdgIndex % sdgGoals.length) === i ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
