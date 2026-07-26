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

};

export const programCategories = [
  {
    slug: 'education',
    title: 'Educational & Career Guidance',
    description: 'Empowering tribal youth through education, mentorship, and career counseling to build a brighter future.',
    image: IMAGES.education1,
    activities: [
      {
        id: 'career-counseling',
        title: 'Career Counseling Workshops',
        aim: 'Guide tribal students in making informed career decisions',
        purpose: 'Bridge the information gap about career opportunities for rural and tribal youth',
        method: 'Monthly workshops in schools and community centers with professionals from diverse fields',
        impact: '2,500+ students counseled, 85% reported clearer career vision',
        cta: 'Join as a career mentor',
        image: IMAGES.education1,
      },
      {
        id: 'scholarship-assistance',
        title: 'Scholarship Assistance Program',
        aim: 'Help deserving students access financial aid for higher education',
        purpose: 'Remove financial barriers to education for tribal youth',
        method: 'Identification of eligible students, application support, and scholarship database management',
        impact: '500+ students received scholarship assistance worth ₹1.2 Crore',
        cta: 'Sponsor a student',
        image: IMAGES.education2,
      },
      {
        id: 'digital-literacy',
        title: 'Digital Literacy Campaign',
        aim: 'Equip rural youth with essential digital skills',
        purpose: 'Bridge the digital divide in tribal communities',
        method: 'Computer training centers in villages with certified trainers and Contributed equipment',
        impact: '1,800+ youth trained in basic to intermediate computer skills',
        cta: 'Contribute a computer',
        image: IMAGES.education3,
      },
      {
        id: 'study-circles',
        title: 'Community Study Circles',
        aim: 'Create peer-learning environments for competitive exam preparation',
        purpose: 'Provide structured study support to aspiring students',
        method: 'Weekly study groups led by trained facilitators with curated study materials',
        impact: '300+ students cleared competitive exams through study circles',
        cta: 'Become a study circle facilitator',
        image: IMAGES.workshop1,
      },
    ],
  },
  {
    slug: 'youth-leadership',
    title: 'Youth Leadership',
    description: 'Nurturing the next generation of tribal leaders through training, exposure, and hands-on community engagement.',
    image: IMAGES.workshop2,
    activities: [
      {
        id: 'leadership-camps',
        title: 'Youth Leadership Camps',
        aim: 'Develop leadership skills among tribal youth',
        purpose: 'Create a pipeline of community leaders who can drive positive change',
        method: '5-day residential camps with interactive sessions, team-building activities, and mentorship',
        impact: '800+ young leaders trained across 15 districts',
        cta: 'Register for next camp',
        image: IMAGES.workshop2,
      },
      {
        id: 'youth-parliament',
        title: 'Youth Parliament Sessions',
        aim: 'Foster democratic values and civic awareness',
        purpose: 'Enable youth to understand governance and participate in civic life',
        method: 'Mock parliament sessions debating real community issues with expert moderators',
        impact: '12 annual sessions, 500+ participants, 20+ community resolutions passed',
        cta: 'Participate in Youth Parliament',
        image: IMAGES.workshop1,
      },
      {
        id: 'fellowship-program',
        title: 'AYUSH Fellowship Program',
        aim: 'Create a cadre of dedicated social change agents',
        purpose: 'Provide intensive training and field experience to committed youth',
        method: '6-month fellowship with classroom training, field immersion, and mentorship',
        impact: '120+ fellows completed, 70% continue working in social sector',
        cta: 'Apply for fellowship',
        image: IMAGES.education3,
      },
    ],
  },
  {
    slug: 'tribal-empowerment',
    title: 'Tribal Empowerment',
    description: 'Strengthening tribal communities through rights awareness, cultural preservation, and sustainable livelihood programs.',
    image: IMAGES.tribal1,
    activities: [
      {
        id: 'rights-awareness',
        title: 'Tribal Rights Awareness Program',
        aim: 'Educate tribal communities about their constitutional and legal rights',
        purpose: 'Empower communities to claim their rightful entitlements',
        method: 'Village-level awareness camps, legal aid clinics, and rights documentation',
        impact: '5,000+ families aware of Forest Rights Act, 1,200+ claims filed',
        cta: 'Support rights awareness',
        image: IMAGES.tribal2,
      },
      {
        id: 'cultural-preservation',
        title: 'Cultural Heritage Preservation',
        aim: 'Document and preserve tribal arts, language, and traditions',
        purpose: 'Prevent loss of rich tribal cultural heritage',
        method: 'Documentation projects, cultural festivals, art workshops, and language preservation',
        impact: '50+ Warli art workshops, 3 tribal language documentation projects',
        cta: 'Join cultural program',
        image: IMAGES.art,
      },
      {
        id: 'sustainable-livelihoods',
        title: 'Sustainable Livelihood Programs',
        aim: 'Create income-generating opportunities for tribal families',
        purpose: 'Reduce economic vulnerability and migration',
        method: 'Skill training, SHG formation, market linkage, and microfinance support',
        impact: '800+ families with improved livelihoods, 50+ SHGs formed',
        cta: 'Sponsor a livelihood project',
        image: IMAGES.tribal3,
      },
      {
        id: 'health-nutrition',
        title: 'Health & Nutrition Awareness',
        aim: 'Improve health outcomes in tribal communities',
        purpose: 'Address malnutrition and lack of healthcare access',
        method: 'Health camps, nutrition gardens, ASHA training, and referral services',
        impact: '3,000+ beneficiaries, 40% reduction in malnutrition in target areas',
        cta: 'Support health camps',
        image: IMAGES.tribal4,
      },
    ],
  },
  {
    slug: 'social-entrepreneurship',
    title: 'Social Entrepreneurship Model',
    description: 'Building sustainable social enterprises that create economic value while addressing community challenges.',
    image: IMAGES.workshop1,
    activities: [
      {
        id: 'incubation-center',
        title: 'Social Enterprise Incubation',
        aim: 'Incubate social enterprises led by tribal entrepreneurs',
        purpose: 'Create sustainable business models addressing community needs',
        method: 'Business plan mentoring, seed funding, market access, and technical support',
        impact: '15+ social enterprises incubated, ₹50 Lakhs in revenue generated',
        cta: 'Submit your idea',
        image: IMAGES.workshop1,
      },
      {
        id: 'tribal-products',
        title: 'Tribal Products Marketplace',
        aim: 'Create market access for tribal artisans and producers',
        purpose: 'Ensure fair prices and wider markets for tribal products',
        method: 'Online marketplace, exhibitions, retail partnerships, and brand development',
        impact: '200+ artisans connected to markets, 300% increase in average income',
        cta: 'Browse tribal products',
        image: IMAGES.tribal1,
      },
      {
        id: 'agri-enterprise',
        title: 'Agricultural Enterprise Development',
        aim: 'Transform tribal agriculture into profitable ventures',
        purpose: 'Move from subsistence to commercial farming through value addition',
        method: 'Organic certification, processing units, cold chain, and direct marketing',
        impact: '500+ farmers in organic farming, 5 FPOs established',
        cta: 'Partner with us',
        image: IMAGES.farmers,
      },
    ],
  },
  {
    slug: 'social-awareness',
    title: 'Social Awareness',
    description: 'Driving community awareness on critical social issues including gender equality, environment, and civic participation.',
    image: IMAGES.volunteer2,
    activities: [
      {
        id: 'gender-equality',
        title: 'Gender Equality Campaigns',
        aim: 'Promote gender equality and women empowerment in tribal communities',
        purpose: 'Challenge patriarchal norms and support women\'s agency',
        method: 'Street plays, workshops, women\'s collectives, and advocacy campaigns',
        impact: '10,000+ people reached, 30+ women leaders emerged',
        cta: 'Join the campaign',
        image: IMAGES.tribal3,
      },
      {
        id: 'environmental-conservation',
        title: 'Environmental Conservation Drives',
        aim: 'Protect natural resources and promote sustainable practices',
        purpose: 'Safeguard tribal communities\' relationship with nature',
        method: 'Tree plantation, water harvesting, waste management, and eco-awareness rallies',
        impact: '50,000+ trees planted, 20 water harvesting structures built',
        cta: 'Plant a tree',
        image: IMAGES.nature,
      },
      {
        id: 'anti-addiction',
        title: 'Anti-Addiction Awareness Program',
        aim: 'Combat substance abuse in tribal youth',
        purpose: 'Create awareness about harmful effects of addiction',
        method: 'Counseling centers, peer educator training, and community mobilization',
        impact: '2,000+ youth counseled, 15 de-addiction support groups active',
        cta: 'Support the cause',
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
    { name: 'Team Member 1', role: 'Founder & President', bio: 'Social activist with 15+ years of experience in tribal development. Led multiple grassroots movements for tribal rights and education.', image: '' },
    { name: 'Team Member 2', role: 'Co-Founder & Secretary', bio: 'Education advocate and community organizer. Pioneered digital literacy programs in remote tribal areas of Palghar.', image: '' },
    { name: 'Team Member 3', role: 'Co-Founder & Treasurer', bio: 'Finance professional turned social worker. Manages organizational finances and ensures transparent fund utilization.', image: '' },
  ],
  current: [
    { name: 'Team Member 4', role: 'Program Director', bio: 'Leads all programmatic interventions across education, livelihoods, and awareness.', image: '', social: { linkedin: '#', twitter: '#' } },
    { name: 'Team Member 5', role: 'Operations Manager', bio: 'Manages field operations, volunteer coordination, and community engagement.', image: '', social: { linkedin: '#' } },
    { name: 'Team Member 6', role: 'Communications Lead', bio: 'Handles media relations, social media, and stakeholder communications.', image: '', social: { linkedin: '#', twitter: '#' } },
    { name: 'Team Member 7', role: 'Youth Programs Lead', bio: 'Designs and implements youth leadership and fellowship programs.', image: '', social: { linkedin: '#' } },
    { name: 'Team Member 8', role: 'Livelihood Specialist', bio: 'Expert in tribal livelihoods, FPO management, and market linkage.', image: '', social: { linkedin: '#' } },
  ],
};

export const milestones = [
  { year: '2005', title: 'Foundation', description: 'AYUSH was founded by a group of passionate tribal youth in Kasa, Dahanu.' },
  { year: '2007', title: 'First Education Program', description: 'Launched career counseling workshops reaching 200 students in first year.' },
  { year: '2010', title: 'Official Registration', description: 'Registered as a Trust and Society. Launched the website adiyuva.in.' },
  { year: '2012', title: 'Youth Leadership Academy', description: 'Started annual leadership camps training 100+ youth per year.' },
  { year: '2015', title: 'Forest Rights Campaign', description: 'Major campaign helping 1200 families file forest rights claims.' },
  { year: '2017', title: 'UNDP Partnership', description: 'Partnered with UNDP India for rights documentation project.' },
  { year: '2019', title: 'Digital Literacy Mission', description: 'Launched comprehensive digital literacy program in 30 villages.' },
  { year: '2021', title: 'Social Enterprise Launch', description: 'Established tribal products marketplace and organic FPOs.' },
  { year: '2023', title: '50,000 Beneficiaries', description: 'Crossed the milestone of reaching 50,000 beneficiaries across programs.' },
  { year: '2024', title: 'Expansion Phase', description: 'Extended programs to 5 new districts in Maharashtra.' },
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