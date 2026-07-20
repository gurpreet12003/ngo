import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisionMission from './pages/about/VisionMission';
import HistoryMilestones from './pages/about/HistoryMilestones';
import LeadershipTeam from './pages/about/LeadershipTeam';
import OrgProfile from './pages/about/OrgProfile';
import Transparency from './pages/about/Transparency';
import Programs from './pages/Programs';
import EducationalGuidance from './pages/programs/EducationalGuidance';
import YouthLeadership from './pages/programs/YouthLeadership';
import TribalEmpowerment from './pages/programs/TribalEmpowerment';
import SocialEntrepreneurship from './pages/programs/SocialEntrepreneurship';
import SocialAwareness from './pages/programs/SocialAwareness';
import CompletedProjects from './pages/programs/CompletedProjects';
import GetInvolved from './pages/GetInvolved';
import MediaUpdates from './pages/MediaUpdates';
import ContactUs from './pages/ContactUs';
import ActivityPage from './pages/programs/ActivityPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="about/vision-mission" element={<VisionMission />} />
          <Route path="about/history" element={<HistoryMilestones />} />
          <Route path="about/leadership" element={<LeadershipTeam />} />
          <Route path="about/org-profile" element={<OrgProfile />} />
          <Route path="about/transparency" element={<Transparency />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/education" element={<EducationalGuidance />} />
          <Route path="programs/education/:activityId" element={<ActivityPage category="education" />} />
          <Route path="programs/youth-leadership" element={<YouthLeadership />} />
          <Route path="programs/youth-leadership/:activityId" element={<ActivityPage category="youth-leadership" />} />
          <Route path="programs/tribal-empowerment" element={<TribalEmpowerment />} />
          <Route path="programs/tribal-empowerment/:activityId" element={<ActivityPage category="tribal-empowerment" />} />
          <Route path="programs/social-entrepreneurship" element={<SocialEntrepreneurship />} />
          <Route path="programs/social-entrepreneurship/:activityId" element={<ActivityPage category="social-entrepreneurship" />} />
          <Route path="programs/social-awareness" element={<SocialAwareness />} />
          <Route path="programs/social-awareness/:activityId" element={<ActivityPage category="social-awareness" />} />
          <Route path="programs/completed-projects" element={<CompletedProjects />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="media" element={<MediaUpdates />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}
