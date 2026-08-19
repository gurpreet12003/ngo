"use client";

import { useState } from "react";
import {
  ExternalLink,
  Heart,
  Users,
  Briefcase,
  UserPlus,
  Building,
  CreditCard,
  HandHeart,
  ChevronDown,
  QrCode,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

const individualOptions = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Volunteer",
    description:
      "Lend your time, skills, and energy to support awareness campaigns, education, mentoring, and community development activities across tribal regions.",
    link: "https://forms.google.com",
    linkLabel: "Join as Volunteer",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Internship",
    description:
      "Gain hands-on experience in grassroots tribal development through field projects, research, documentation, and community initiatives.",
    link: "https://forms.gle/kZECH8DYzRfqwHqKA ",
    linkLabel: "Apply for Internship",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career",
    description:
      "Join AYUSH as a full-time or part-time team member and build a career dedicated to tribal development and social impact.",
    link: "https://forms.google.com",
    linkLabel: "View Careers",
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Contribution",
    description:
      "Contribute your professional skills, knowledge, time or resources. Designers, developers, researchers, trainers and volunteers are welcome.",
    link: "#",
    linkLabel: "Contribute Skills",
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Membership",
    description:
      "Become an active member of AYUSH and participate in governance, activities, events and long-term organizational development.",
    link: "https://forms.gle/1zK5wj4nxXwCBRrH8",
    linkLabel: "Become a Member",
  },
];

const organizationOptions = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Sponsor",
    description:
      "Support education, leadership, health, livelihood and community development programmes through sponsorship.",
    link: "#",
    linkLabel: "Become a Sponsor",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Collaboration",
    description:
      "Collaborate with AYUSH for research, training, awareness programmes and community initiatives.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "Collaborate",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Institutional Partnership",
    description:
      "Partner with AYUSH for innovation, research, education and sustainable tribal development.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "Partner With Us",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "CSR Partnership",
    description:
      "Implement impactful CSR projects with AYUSH through sustainable development initiatives.",
    link: "mailto:ayush@adiyuva.in",
    linkLabel: "CSR Partnership",
  },
];

const donateOptions = [
  {
    id: "bank",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Bank Transfer",
    content: (
      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Account Name
          </p>
          <p className="font-medium">
            AYUSH - Adivasi Yuva Shakti
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Bank Name
          </p>
          <p className="font-medium">
            State Bank of India
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Account Number
          </p>
          <p className="font-medium">
            XXXXXXXXXXXX
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            IFSC Code
          </p>
          <p className="font-medium">
            SBIN0XXXXXX
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            UPI ID
          </p>
          <p className="font-medium">
            ayush@sbi
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Tax Benefit
          </p>
          <p className="font-medium">
            Eligible under 80G
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "qr",
    icon: <QrCode className="w-6 h-6" />,
    title: "Scan & Pay",
    content: (
      <div className="text-center">
        <img
          src="/images/donation-qr.png"
          alt="Donation QR"
          className="w-56 h-56 mx-auto border rounded-lg"
        />
        <p className="text-gray-600 mt-6">
          Scan this QR using Google Pay, PhonePe, Paytm,
          BHIM or any UPI application.
        </p>
      </div>
    ),
  },
 {
  id: "razorpay",
  icon: <Heart className="w-6 h-6" />,
  title: "Contribute Online",
  content: (
    <div className="text-center">
      <p className="text-gray-600 mb-6">
        Donate securely using Credit Card, Debit Card,
        UPI, Net Banking or Wallet through Razorpay.
      </p>

      <a
        href="https://razorpay.me/@adiyuva"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
      >
        <Heart className="w-5 h-5" />
        Donate via Razorpay
      </a>
    </div>
  ),
},
];

export default function GetInvolved() {
  // Accordion state: tracks which item is open per section (single-open mode to minimize scrolling)
  // Set initial value to `null` instead of 0 if you want all items closed by default
  const [openIndividual, setOpenIndividual] = useState(0);
  const [openOrg, setOpenOrg] = useState(0);
  const [openDonate, setOpenDonate] = useState(0);

  return (
    <div>
      <PageHeader
        title="Let's Do It Together"
        subtitle="Choose how you would like to contribute towards empowering tribal communities."
        breadcrumbs={[
          { label: "Let's Do It Together" },
        ]}
      />

      {/* ================= FOR INDIVIDUALS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              For Individuals
            </p>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mt-2">
              Choose How You Want to Get Involved
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Whether you want to volunteer, gain practical experience,
              build your career, contribute your professional skills,
              or become a member, there are many ways to be part of
              AYUSH's mission.
            </p>
          </div>

          {/* Individuals Accordion (replaces card grid) */}
          <div className="max-w-3xl mx-auto space-y-4">
            {individualOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndividual(openIndividual === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndividual === idx}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0">
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndividual === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndividual === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-sm text-gray-600 leading-7 mb-5">
                        {option.description}
                      </p>
                      <a
                        href={option.link}
                        target={option.link !== "#" ? "_blank" : undefined}
                        rel={option.link !== "#" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
                      >
                        {option.linkLabel}
                        {option.link !== "#" && <ExternalLink className="w-4 h-4" />}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOR ORGANIZATIONS ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              For Organizations
            </p>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mt-2">
              Partner With AYUSH
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Organizations, institutions, corporate partners and development
              agencies can work together with AYUSH to create sustainable
              impact for tribal communities.
            </p>
          </div>

          {/* Organizations Accordion (replaces card grid) */}
          <div className="max-w-3xl mx-auto space-y-4">
            {organizationOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-300"
              >
                <button
                  onClick={() => setOpenOrg(openOrg === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openOrg === idx}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0">
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openOrg === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openOrg === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-sm text-gray-600 leading-7 mb-5">
                        {option.description}
                      </p>
                      <a
                        href={option.link}
                        target={option.link !== "#" ? "_blank" : undefined}
                        rel={option.link !== "#" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
                      >
                        {option.linkLabel}
                        {option.link !== "#" && <ExternalLink className="w-4 h-4" />}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT OUR MISSION ================= */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-gray-900">
            Support Our Mission
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-8">
            Your support enables AYUSH to continue empowering tribal
            communities through education, youth leadership, cultural
            preservation, sustainable livelihoods, environmental stewardship,
            and collaborative partnerships.
          </p>
        </div>
      </section>

      {/* ================= CONTRIBUTE FUNDS ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-5">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-serif text-gray-900">
              Contribute Funds
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Every contribution, big or small, helps AYUSH continue empowering
              tribal communities through education, youth leadership, cultural
              preservation, livelihoods and sustainable development.
            </p>
          </div>

          {/* Donation Options Accordion (replaces 3-column card grid) */}
          <div className="max-w-3xl mx-auto space-y-4">
            {donateOptions.map((option, idx) => (
              <div
                key={option.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all duration-300"
              >
                <button
                  onClick={() => setOpenDonate(openDonate === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openDonate === idx}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0">
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openDonate === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openDonate === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      {option.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
