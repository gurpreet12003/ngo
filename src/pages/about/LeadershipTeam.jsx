import { User } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { leadershipTeam } from '../../data/siteData';

export default function LeadershipTeam() {
  return (
    <div>
      <PageHeader
       title="Leadership Team"
  subtitle="Meet the founders and governing team leading AYUSH's mission of tribal empowerment."
        breadcrumbs={[
          { label: 'About Us', path: '/about' },
          { label: 'Leadership Team' },
        ]}
      />

      {/* Founding Team */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Founders</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Founding Team</h2>
            <p className="text-gray-600 mt-2"> The founding members who established AYUSH and laid the foundation for tribal empowerment since 1999.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.founding.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-5">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Team */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Current Year</p>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Current Team</h2>
            <p className="text-gray-600 mt-2">  The present Governing Board responsible for guiding AYUSH's programs, partnerships, and community initiatives.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.current.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
                {member.social && (
                  <div className="flex justify-center gap-3 mt-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="LinkedIn">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Twitter">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
