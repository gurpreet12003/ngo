import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGlobe,
} from 'react-icons/fa6';
import PageHeader from '../components/PageHeader';

const socialProfiles = [
  {
    name: 'Facebook Page',
    url: 'https://www.facebook.com/adiyuva',
    type: 'Page',
    icon: FaFacebookF,
    color: 'group-hover:bg-[#1877F2]',
  },
  
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/user/adiyuva',
    type: 'Channel',
    icon: FaYoutube,
    color: 'group-hover:bg-[#FF0000]',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/adiyuva',
    type: 'Profile',
    icon: FaXTwitter,
    color: 'group-hover:bg-black',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/adiyuva',
    type: 'Profile',
    icon: FaInstagram,
    color: 'group-hover:bg-[#E4405F]',
  },
];
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const mailtoLink = `mailto:ayush@adiyuva.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for inquiries, partnerships, or to learn more about our work."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Contact Form & Details */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Office Address</h3>
                    <p className="text-sm text-gray-600 mt-1">AYUSH, Adivasi Yuva Shakti, Waghadi, Kothal Pada, Post Kasa, Taluka Dahanu, Dist Palghar, Maharashtra, India 401607</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
                    <a href="mailto:ayush@adiyuva.in" className="text-sm text-gray-600 mt-1 hover:text-gray-900 transition-colors">ayush@adiyuva.in</a>
                  </div>
                </div>
                <div className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
                    <a href="tel:+919246361249" className="text-sm text-gray-600 mt-1 hover:text-gray-900 transition-colors">+91 9246 361 249</a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 border border-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.3!2d72.77!3d19.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzQ4LjAiTiA3MsKwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0, filter: 'grayscale(1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AYUSH Location"
                />
                <div className="p-3 bg-gray-50">
                  <a
                    href="https://maps.app.goo.gl/tyn9WfHCG6hTH8ob6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Connect With Us</h2>
            <p className="text-gray-500 mt-2">Follow us on social media for regular updates.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {socialProfiles.map((profile, idx) => (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all group"
              >
               <>
  {(() => {
    const Icon = profile.icon;

    return (
      <>
        <div
          className={`w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center
          text-gray-800 transition-all duration-300
          ${profile.color}
          group-hover:text-white`}
        >
          <Icon className="text-lg" />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-950">
            {profile.name}
          </p>
          <p className="text-xs text-gray-500">
            {profile.type}
          </p>
        </div>
      </>
    );
  })()}
</>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
