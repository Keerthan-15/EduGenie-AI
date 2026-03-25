/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import DashboardPage from './pages/DashboardPage';
import TutorPage from './pages/TutorPage';
import PracticePage from './pages/PracticePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import OverviewPage from './pages/OverviewPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tutor" element={<TutorPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



