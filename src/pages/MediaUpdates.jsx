import { useState } from 'react';
import { ExternalLink, Play,  FileText, BookOpen, Image, Video } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { IMAGES } from '../data/siteData';

const blogs = [
  { title: 'How AYUSH is Transforming Tribal Education in Palghar', date: 'Dec 15, 2024', tags: ['Education', 'Impact'], excerpt: 'A deep dive into our educational programs and their transformative impact on tribal youth in Palghar district.' },
  { title: 'The Revival of Warli Art: A Cultural Journey', date: 'Nov 28, 2024', tags: ['Culture', 'Art'], excerpt: 'How AYUSH workshops are helping preserve and promote the ancient Warli art tradition among new generations.' },
  { title: 'Forest Rights: Empowering Communities Through Legal Awareness', date: 'Oct 10, 2024', tags: ['Rights', 'Empowerment'], excerpt: 'The story of how 1,200 tribal families successfully filed forest rights claims with AYUSH support.' },
  { title: 'Youth Leadership: Building Tomorrow\'s Change Agents', date: 'Sep 5, 2024', tags: ['Youth', 'Leadership'], excerpt: 'Meet the graduates of our Youth Leadership Academy who are now driving change in their communities.' },
];

const pressReleases = [
  { title: 'AYUSH Receives UNDP Recognition for Tribal Development', date: 'Nov 2024', topic: 'Recognition' },
  { title: 'Launch of Digital Literacy Mission Phase 2', date: 'Aug 2024', topic: 'Education' },
  { title: 'Annual Youth Leadership Summit 2024', date: 'Jun 2024', topic: 'Youth' },
  { title: 'Partnership with State Government for Tribal Welfare', date: 'Mar 2024', topic: 'Partnership' },
  { title: 'AYUSH Tribal Products Featured at National Exhibition', date: 'Jan 2024', topic: 'Enterprise' },
];

const newsCoverage = [
  { title: 'Times of India: Tribal Youth Organization Making Waves in Maharashtra', date: 'Dec 2024' },
  { title: 'Maharashtra Times: Digital Literacy Campaign in Palghar', date: 'Oct 2024' },
  { title: 'Lokmat: Forest Rights Victory for 500 Tribal Families', date: 'Aug 2024' },
  { title: 'Indian Express: Youth Leadership Model Praised by Experts', date: 'Jun 2024' },
];


const resources = {
  toolkits: [
    { name: 'Career Counseling Toolkit for Rural Schools', format: 'PDF' },
    { name: 'Organic Farming Best Practices Guide', format: 'PDF' },
    { name: 'Youth Leadership Training Manual', format: 'PDF' },
    { name: 'SHG Formation & Management Guide', format: 'PDF' },
  ],
  research: [
    { name: 'Tribal Education Landscape in Palghar: A Study', format: 'PDF' },
    { name: 'Impact of Forest Rights Act on Tribal Livelihoods', format: 'PDF' },
    { name: 'Youth Aspirations in Tribal Maharashtra', format: 'PDF' },
  ],
  training: [
    { name: 'Community Health Worker Training Module', format: 'PDF' },
    { name: 'Digital Literacy Curriculum', format: 'PDF' },
    { name: 'Environmental Conservation Workshop Guide', format: 'PDF' },
  ],
};

const tabs = ['Blog', 'Press', 'News', 'Gallery', 'Videos', 'Resources'] 

export default function MediaUpdates() {
  const [activeTab, setActiveTab] = useState('Blog');

  return (
    <div>
      <PageHeader
        title="Media & Updates"
        subtitle="Stay updated with our latest news, stories, media coverage, and resources."
        breadcrumbs={[{ label: 'Media & Updates' }]}
      />

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Blog */}
          {activeTab === 'Blog' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-5 h-5 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Blog & Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900">{blog.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{blog.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-3">{blog.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Press */}
          {activeTab === 'Press' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-5 h-5 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Press Releases</h2>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Topic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pressReleases.map((pr, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-3.5 text-sm text-gray-700">{pr.title}</td>
                        <td className="px-6 py-3.5"><span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{pr.topic}</span></td>
                        <td className="px-6 py-3.5 text-sm text-gray-500">{pr.date}</td>
                        <td className="px-6 py-3.5 text-center"><a href="#" className="text-gray-500 hover:text-gray-900"><ExternalLink className="w-4 h-4 inline" /></a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* News */}
          {activeTab === 'News' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-5 h-5 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900 font-serif">News Coverage</h2>
              </div>
              <div className="space-y-4">
                {newsCoverage.map((nc, idx) => (
                  <div key={idx} className="flex items-center justify-between border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{nc.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{nc.date}</p>
                    </div>
                    <a href="#" className="text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors shrink-0 ml-4">
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {activeTab === 'Gallery' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Image className="w-5 h-5 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Photo Gallery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {Object.values(IMAGES).slice(0, 12).map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="https://www.facebook.com/adiyuva/photos_albums" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors">
                  View All Albums on Facebook <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Videos */}
          {activeTab === 'Videos' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Video className="w-5 h-5 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Video Gallery</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'AYUSH Introduction', desc: 'Learn about our mission and programs' },
                  { title: 'Tribal Education Impact', desc: 'Stories from our education programs' },
                  { title: 'Youth Leadership Camp 2024', desc: 'Highlights from our annual camp' },
                  { title: 'Warli Art Workshop', desc: 'Cultural heritage preservation in action' },
                  { title: 'Forest Rights Campaign', desc: 'Advocacy and rights awareness' },
                  { title: 'Organic Farming Initiative', desc: 'Sustainable livelihoods for farmers' },
                ].map((video, idx) => (
                  <a
                    key={idx}
                    href="https://www.youtube.com/user/adiyuva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                      <img src={Object.values(IMAGES)[idx % Object.values(IMAGES).length]} alt={video.title} className="w-full h-full object-cover grayscale opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-gray-900/80 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-gray-900">{video.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{video.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="https://www.youtube.com/user/adiyuva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors">
                  View All Videos on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          
          {/* Resources */}
          {activeTab === 'Resources' && (
            <div className="space-y-10">
              {[
                { title: 'Toolkits & Guides', items: resources.toolkits },
                { title: 'Research & Policy Papers', items: resources.research },
                { title: 'Community Training Materials', items: resources.training },
              ].map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Format</th>
                          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Download</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {section.items.map((item, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-3.5 text-sm text-gray-700">{item.name}</td>
                            <td className="px-6 py-3.5 text-center"><span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">{item.format}</span></td>
                            <td className="px-6 py-3.5 text-center"><a href="#" className="text-gray-500 hover:text-gray-900"><ExternalLink className="w-4 h-4 inline" /></a></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
