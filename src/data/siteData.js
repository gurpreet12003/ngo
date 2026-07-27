

export const IMAGES = {
  hero1: 'https://images.pexels.com/photos/9144156/pexels-photo-9144156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  hero2: 'https://images.pexels.com/photos/11276073/pexels-photo-11276073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  hero3: 'https://images.pexels.com/photos/20356777/pexels-photo-20356777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  tribal1: 'https://images.pexels.com/photos/14382802/pexels-photo-14382802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  tribal2: 'https://images.pexels.com/photos/4579692/pexels-photo-4579692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  tribal3: 'https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  tribal4: 'https://images.pexels.com/photos/4579796/pexels-photo-4579796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  education1: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  education2: 'https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  education3: 'https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  volunteer1: 'https://images.pexels.com/photos/6647027/pexels-photo-6647027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  volunteer2: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  volunteer3: 'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  workshop1: 'https://images.pexels.com/photos/9034213/pexels-photo-9034213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  workshop2: 'https://images.pexels.com/photos/7413908/pexels-photo-7413908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  nature: 'https://images.pexels.com/photos/5264383/pexels-photo-5264383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  art: 'https://images.pexels.com/photos/22820076/pexels-photo-22820076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  farmers: 'https://images.pexels.com/photos/20356777/pexels-photo-20356777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  YouthLeadership:"Youth_Leadership.jpg",
  career_guid:"/public/Career_Guidance.jpg",
  socialAwareness:"/Social_Awareness.jpg",
  socialEntrepren:"/Social_Entrepreneruship.jpg",
  tribal_empowerment:"/Tribal_Empowerment.jpg"

};

export const programCategories = [
{
  slug: "education",
  title: "Educational & Career Guidance",
  description:
    "Connecting tribal students with educational opportunities, career guidance, mentorship, scholarships, and digital learning to build confident future leaders.",
  image: IMAGES.career_guid,

  activities: [
    {
      id: "career-guidance",
      title: "Career Guidance & Mentorship",
      aim: "Guide tribal students towards higher education and meaningful careers.",
      purpose:
        "Bridge the information gap regarding education, competitive exams, scholarships, and career opportunities.",
      method:
        "Career counselling camps, mentorship by tribal professionals, group discussions, educational seminars, and one-to-one guidance.",
      impact:
        "Since 2007, thousands of tribal students have received career guidance, scholarship support, and mentorship, helping many pursue higher education and professional careers.",
      cta: "Become a Mentor",
      image: IMAGES.education1,
    },
    {
      id: "scholarship-support",
      title: "Scholarship & Admission Support",
      aim: "Help deserving students continue higher education.",
      purpose:
        "Ensure talented tribal youth do not miss educational opportunities due to lack of awareness or financial guidance.",
      method:
        "Scholarship awareness, admission counselling, application support, and document assistance.",
      impact:
        "Improved scholarship awareness and increased admissions into colleges, universities, and vocational institutes.",
      cta: "Sponsor a Student's Future",
      image: IMAGES.education2,
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      aim: "Improve digital skills among tribal youth.",
      purpose:
        "Prepare students for today's technology-driven educational and professional environment.",
      method:
        "Basic computer training, internet awareness, digital tools, and online learning sessions.",
      impact:
        "Hundreds of rural students became digitally empowered for education and employment.",
      cta: "Support Digital Education",
      image: IMAGES.education3,
    },
  ],
},
 {
  slug: "youth-leadership",
  title: "Youth Leadership",
  description:
    "Developing confident tribal youth leaders capable of creating positive change within their own communities.",
  image: IMAGES.YouthLeadership,

  activities: [
    {
      id: "leadership-development",
      title: "Youth Leadership Development",
      aim: "Build future tribal leaders.",
      purpose:
        "Encourage tribal youth to actively participate in community development and decision making.",
      method:
        "Leadership workshops, personality development, volunteering opportunities, exposure visits, and mentoring.",
      impact:
        "A strong network of youth leaders now conducts awareness campaigns, social initiatives, and village development activities.",
      cta: "Register Your Interest",
      image: IMAGES.workshop2,
    },
  ],
},
 {
  slug: "tribal-empowerment",
  title: "Tribal Empowerment",
  description:
    "Empowering indigenous communities through rights awareness, community organization, traditional knowledge preservation, and self-reliance.",
  image: IMAGES.tribal_empowerment,

  activities: [
    {
      id: "community-empowerment",
      title: "Rights & Community Empowerment",
      aim: "Strengthen tribal communities.",
      purpose:
        "Increase awareness about constitutional rights, welfare schemes, and community participation.",
      method:
        "Village meetings, awareness camps, legal guidance, and community mobilization.",
      impact:
        "Thousands of tribal families have become more aware of their rights, government schemes, and community leadership.",
      cta: "Join as a Community Volunteer",
      image: IMAGES.tribal2,
    },
    {
      id: "traditional-knowledge",
      title: "Traditional Knowledge Preservation",
      aim: "Protect indigenous knowledge systems.",
      purpose:
        "Preserve tribal culture while promoting sustainable livelihoods.",
      method:
        "Documentation, community workshops, artisan support, and cultural promotion.",
      impact:
        "Warli Painting GI activities and traditional knowledge initiatives continue to strengthen tribal identity.",
      cta: "Support Cultural Preservation",
      image: IMAGES.art,
    },
  ],
},
  {
  slug: "social-entrepreneurship",
  title: "Social Entrepreneurship Model",
  description:
    "Creating sustainable livelihoods by combining traditional tribal knowledge with modern entrepreneurship.",
  image: IMAGES.socialEntrepren,

  activities: [
    {
      id: "tribal-enterprise",
      title: "Tribal Enterprise Development",
      aim: "Build community-owned enterprises.",
      purpose:
        "Generate sustainable income using tribal art, crafts, forest produce, and agriculture.",
      method:
        "Business mentoring, product development, branding, digital marketing, and market linkages.",
      impact:
        "Emerging tribal entrepreneurs are creating local employment while preserving traditional skills.",
      cta: "Become an Enterprise Mentor",
      image: IMAGES.tribal1,
    },
    {
      id: "market-linkage",
      title: "Market Linkages",
      aim: "Connect tribal producers with wider markets.",
      purpose:
        "Reduce exploitation by middlemen and improve artisan incomes.",
      method:
        "Exhibitions, buyer connections, branding, online promotion, and fair-trade partnerships.",
      impact:
        "Improved market access for tribal artisans and producer groups.",
      cta: "Fund a Micro-Enterprise",
      image: IMAGES.farmers,
    },
  ],
},
 {
  slug: "social-awareness",
  title: "Social Awareness",
  description:
    "Promoting awareness on health, education, constitutional rights, environment, addiction prevention, and social responsibility.",
  image: IMAGES.socialAwareness,

  activities: [
    {
      id: "awareness-campaigns",
      title: "Community Awareness Campaigns",
      aim: "Educate and empower rural tribal communities.",
      purpose:
        "Improve awareness regarding health, hygiene, rights, gender equality, and environmental conservation.",
      method:
        "Street plays, rallies, workshops, public meetings, creative campaigns, and village outreach.",
      impact:
        "Thousands of families have adopted healthier practices, increased civic participation, and become more informed about government welfare programs.",
      cta: "Join as an Awareness Volunteer",
      image: IMAGES.volunteer1,
    },
  ],
},
];

export const completedProjects = [
  { id: 1, name: 'Tribal Youth Education Initiative', objective: 'Provide quality education access to 1000 tribal students', scope: 'Dahanu & Palghar taluka', budget: '₹25 Lakhs', outcome: '950 students enrolled, 85% retention rate', sponsor: 'Tata Trusts', year: '2018-2019' },
  { id: 2, name: 'Forest Rights Documentation Project', objective: 'Help tribal families file forest rights claims', scope: '50 villages in Palghar district', budget: '₹12 Lakhs', outcome: '1200 claims filed, 800 approved', sponsor: 'UNDP India', year: '2017-2018' },
  { id: 3, name: 'Digital Literacy Mission', objective: 'Computer training for rural youth', scope: '30 villages', budget: '₹18 Lakhs', outcome: '1800 youth trained', sponsor: 'NASSCOM Foundation', year: '2019-2020' },
  { id: 4, name: 'Organic Farming Promotion', objective: 'Transition 500 farmers to organic farming', scope: 'Kasa block', budget: '₹30 Lakhs', outcome: '520 farmers adopted organic methods', sponsor: 'NABARD', year: '2019-2021' },
  { id: 5, name: 'Warli Art Revival Project', objective: 'Document and promote Warli art tradition', scope: 'Dahanu-Talasari belt', budget: '₹8 Lakhs', outcome: '50 workshops, 200 artisans trained', sponsor: 'Ministry of Culture', year: '2020-2021' },
  { id: 6, name: 'Women SHG Formation Program', objective: 'Form and strengthen women self-help groups', scope: '40 villages', budget: '₹15 Lakhs', outcome: '50 SHGs formed, ₹20L savings mobilized', sponsor: 'Maharashtra DRDA', year: '2018-2020' },
  { id: 7, name: 'Youth Leadership Academy', objective: 'Train 200 youth as community leaders', scope: 'Palghar district', budget: '₹22 Lakhs', outcome: '250 leaders trained, 100 active in communities', sponsor: 'Ford Foundation', year: '2020-2022' },
  { id: 8, name: 'Health & Nutrition Improvement', objective: 'Reduce malnutrition in tribal children', scope: '25 villages', budget: '₹20 Lakhs', outcome: '40% reduction in malnutrition', sponsor: 'UNICEF', year: '2021-2022' },
  { id: 9, name: 'Tribal Products E-Commerce Platform', objective: 'Create online market for tribal products', scope: 'Pan-Maharashtra', budget: '₹10 Lakhs', outcome: '200 artisans onboarded, ₹50L sales', sponsor: 'Social Alpha', year: '2021-2023' },
  { id: 10, name: 'Water Harvesting Structures', objective: 'Build water harvesting structures in water-scarce areas', scope: '20 villages', budget: '₹35 Lakhs', outcome: '20 structures built, 5000 beneficiaries', sponsor: 'Reliance Foundation', year: '2022-2023' },
];

export const sdgGoals = [
  { number: 1, title: 'No Poverty', description: 'Livelihood programs for tribal families to overcome poverty through sustainable income generation.' },
  { number: 2, title: 'Zero Hunger', description: 'Nutrition gardens and organic farming initiatives ensuring food security in tribal communities.' },
  { number: 3, title: 'Good Health', description: 'Health camps, nutrition awareness, and de-addiction programs for community wellbeing.' },
  { number: 4, title: 'Quality Education', description: 'Scholarship programs, study circles, and digital literacy campaigns for tribal youth.' },
  { number: 5, title: 'Gender Equality', description: 'Women empowerment through SHGs, leadership training, and gender awareness campaigns.' },
  { number: 8, title: 'Decent Work', description: 'Skill development, social enterprise incubation, and market linkage for tribal products.' },
  { number: 10, title: 'Reduced Inequalities', description: 'Rights awareness, advocacy, and inclusion programs for marginalized tribal communities.' },
  { number: 11, title: 'Sustainable Communities', description: 'Community development through infrastructure, governance, and cultural preservation.' },
  { number: 13, title: 'Climate Action', description: 'Environmental conservation, tree plantation, and water harvesting in tribal areas.' },
  { number: 15, title: 'Life on Land', description: 'Forest rights documentation and sustainable natural resource management.' },
  { number: 16, title: 'Peace & Justice', description: 'Youth Parliament sessions, civic awareness, and democratic participation programs.' },
  { number: 17, title: 'Partnerships', description: 'Multi-stakeholder partnerships with government, corporates, and civil society organizations.' },
];


export const impactStats = [
  {
    label: "Program Implemented",
    value: "130+",
    icon: "Briefcase",          // Projects/Programs
  },
  {
    label: "Voluntary Efforts Spent",
    value: "30K+",
    icon: "HeartHandshake",     // Volunteer & Community Service
  },
  {
    label: "Sponsored Program Implemented (CSR & Govt)",
    value: "9+",
    icon: "Landmark",           // Government & CSR
  },
  {
    label: "Group Members In Networks",
    value: "1.2+ Lakhs",
    icon: "Users",              // Members/Community
  },
  {
    label: "Online Ads Impressions",
    value: "40M+",
    icon: "Eye",                // Views/Impressions
  },
];

export const leadershipTeam = {
  founding: [
    {
      name: "Sachin Satvi",
      role: "President",
      bio: "BE Mechanical. Co-founder of AYUSH and one of the pioneers behind the tribal youth movement. Based in Waghadi, Taluka Dahanu, District Thane, Maharashtra.",
      social: {
        linkedin: "https://www.linkedin.com/in/sachin-satvi",
      },
    },
    {
      name: "Pandurang Bhau Raut",
      role: "Vice President",
      bio: "BE Mechanical. Founding member of AYUSH from Wangani, Taluka Jawhar, District Thane, Maharashtra.",
    },
    {
      name: "Dr. Sunil Balkrishan Parhad",
      role: "Secretary",
      bio: "BAMS, PGHM. Founding Secretary of AYUSH from Khambale, Taluka Dahanu, District Thane, Maharashtra.",
    },
    {
      name: "Mr. Sandip Ramu Sathe",
      role: "Joint Secretary",
      bio: "B.Sc., LL.B. Founding member from Bandhghar, Taluka Dahanu, District Thane, Maharashtra.",
    },
    {
      name: "Mr. Vasant Navashya Bhasara",
      role: "Treasurer",
      bio: "MSW. Founding Treasurer from Dhundalwadi, Taluka Dahanu, District Thane, Maharashtra.",
    },
    {
      name: "Dr. Sharad Sakharam Satvi",
      role: "Member",
      bio: "MS, MBBS. Founding member from Kasa, Taluka Dahanu, District Thane, Maharashtra.",
    },
    {
      name: "Vipul Madhusudan Bharsat",
      role: "Member",
      bio: "B.Com. Founding member from Jawhar, Taluka Jawhar, District Thane, Maharashtra.",
    },
  ],

  current: [
    {
      name: "Sachin Satvi",
      role: "President",
      bio: "BE Mechanical (BAMU), MBA (SMU), PG Tribal Development Management (NIRD), Business Accelerator Program (IIM Nagpur). Leading AYUSH's strategic vision and tribal development initiatives. Waghadi, Taluka Dahanu, District Palghar, Maharashtra.",
      social: {
        linkedin: "https://www.linkedin.com/in/sachin-satvi",
      },
    },
    {
      name: "Sanchita Satvi",
      role: "Secretary",
      bio: "B.Sc., M.Sc., PG Tribal Development Management (NIRD). Oversees organizational administration and community programs. Waghadi, Taluka Dahanu, District Palghar, Maharashtra.",
    },
    {
      name: "Bablu Vahut",
      role: "Member",
      bio: "BE Mechanical. Member from Jawhar, Taluka Jawhar, District Palghar, Maharashtra.",
    },
    {
      name: "Mr. Sandip Ramu Sathe",
      role: "Member",
      bio: "B.Sc., LL.B. Governing Board Member from Bandhghar, Taluka Dahanu, District Palghar, Maharashtra.",
    },
    {
      name: "Dr. Sharad Sakharam Satvi",
      role: "Member",
      bio: "MS, MBBS. Governing Board Member from Kasa, Taluka Dahanu, District Palghar, Maharashtra.",
    },
    {
      name: "Vipul Madhusudan Bharsat",
      role: "Member",
      bio: "B.Com. Governing Board Member from Jawhar, Taluka Jawhar, District Palghar, Maharashtra.",
    },
    {
      name: "Swapnil Janardan Dive",
      role: "Treasurer",
      bio: "AYUSH Warli Painting Cluster Coordinator. Treasurer of the organization from Chikhale, Taluka Dahanu, District Palghar, Maharashtra.",
    },
  ],
};

export const milestones = [
  {
    year: "1999",
    title: "Early Roots",
    description:
      "AYUSH started as an informal initiative by tribal students to guide and support fellow tribal students pursuing higher education in Mumbai, Thane, and Palghar districts."
  },
  {
    year: "2003",
    title: "Concept Building",
    description:
      "Studied successful community development models, identified tribal youth priorities, and developed the initial vision and activity plans for AYUSH."
  },
  {
    year: "2007",
    title: "Initiating Activities",
    description:
      "Started community meetings, group discussions, career and education guidance programs, social networking initiatives, and Warli Painting study activities with artisans."
  },
  {
    year: "2011",
    title: "Organization Formation",
    description:
      "Officially registered AYUSH as an NGO under the Societies Registration Act, 1860, and began structured voluntary activities across tribal communities."
  },
  {
    year: "2012",
    title: "Warli Painting GI",
    description:
      "Successfully obtained the Geographical Indication (GI) registration for Warli Painting under the Intellectual Property Rights framework and initiated post-GI development activities."
  },
  {
    year: "2017",
    title: "Organization Strengthening",
    description:
      "Expanded collaborations with the Tribal Development Department, Government of Maharashtra, CSR partners, sponsors, and strengthened the AYUSH Warli Painting Cluster."
  },
  {
    year: "2021",
    title: "Enhancing Effectiveness",
    description:
      "Strengthened collaboration with organizations, volunteers, government agencies, CSR partners, and communities while promoting sustainable social entrepreneurship."
  },
  {
    year: "2023",
    title: "International Recognition",
    description:
      "AYUSH was granted Special Consultative Status by the United Nations ECOSOC, recognizing its contribution to tribal development and community empowerment."
  },
  {
    year: "2024",
    title: "National Recognition",
    description:
      "Recognized among the National Best Practices by ISRN and the Ministry of Culture for preserving traditional knowledge and promoting tribal empowerment."
  },
  {
    year: "2025",
    title: "Building the Future",
    description:
      "Continuing to strengthen a sustainable tribal ecosystem through social entrepreneurship based on tribal art, craft, agriculture, forest produce, and collaborative partnerships."
  }
];

export const successStories = [
  {
    title: "Empowering Tribal Students Through Mentorship",
    story:
      "Started by former Ashram school students, AYUSH built a strong mentoring network connecting professionals, alumni, and students. Through career guidance, motivational sessions, and community support, hundreds of tribal youth have been inspired to pursue higher education and professional careers.",
    image: IMAGES.education1,
  },
  {
    title: "Building a Strong Tribal Community Network",
    story:
      "What began as a small grassroots initiative evolved into the Adivasi Yuva Shakti movement and later Adivasi Yuva Seva Sangh. Today, the organization connects tribal communities, professionals, and volunteers to create sustainable solutions through education, social entrepreneurship, and cultural preservation.",
    image: IMAGES.tribal3,
  },
  {
    title: "Preserving Warli Heritage Through Innovation",
    story:
      "AYUSH played a pioneering role in securing the Geographical Indication (GI) for Warli Painting, the first GI from Palghar and the first tribal craft to receive this recognition. The initiative now empowers artisans with market access, fair opportunities, and a community-owned brand while protecting their cultural heritage.",
    image: IMAGES.art,
  },
  {
    title: "Women Empowerment Through Warli Art",
    story:
      "With support from CSR partners, AYUSH trained women in Warli painting, product design, and handicraft production. The initiative created flexible income opportunities for homemakers and students while strengthening the traditional role of women in preserving Warli culture.",
    image: IMAGES.tribal2, // or IMAGES.tribal2 if women image is unavailable
  },
];