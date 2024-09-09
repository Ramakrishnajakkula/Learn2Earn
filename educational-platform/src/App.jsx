/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HomePage1 from './components/HomePage1';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import SignUpPage from './components/SignUpPage';
import CourseOverviewPage from './components/CourseOverviewPage';
import CourseCurriculumPage from './components/CourseCurriculumPage';
import StudentDashboard from './components/StudentDashboard';
import AssignmentSubmissionPage from './components/AssignmentSubmissionPage';
import ClientWorkAllocationPage from './components/ClientWorkAllocationPage';
import ClientProjectBriefPage from './components/ClientProjectBriefPage';
import QualityControlPage from './components/QualityControlPage';
import StudentProfilePage from './components/StudentProfilePage';
import AdminDashboard from './components/ADC/AdminDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage1" element={<HomePage1 />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/course-overview" element={<CourseOverviewPage />} />
        <Route path="/course-curriculum" element={<CourseCurriculumPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/assignment-submission" element={<AssignmentSubmissionPage />} />
        <Route path="/client-work-allocation" element={<ClientWorkAllocationPage />} />
        <Route path="/client-project-brief" element={<ClientProjectBriefPage />} />
        <Route path="/quality-control" element={<QualityControlPage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
