import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import CourseOverviewPage from './components/CourseOverviewPage';
import StudentDashboard from './components/StudentDashboard';
import AssignmentSubmissionPage from './components/AssignmentSubmissionPage';
import ClientWorkAllocationPage from './components/ClientWorkAllocationPage';
import ClientProjectBriefPage from './components/ClientProjectBriefPage';
import QualityControlPage from './components/QualityControlPage';
import StudentProfilePage from './components/StudentProfilePage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/course-overview" component={CourseOverviewPage} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/assignment-submission" component={AssignmentSubmissionPage} />
        <Route path="/client-work-allocation" component={ClientWorkAllocationPage} />
        <Route path="/client-project-brief" component={ClientProjectBriefPage} />
        <Route path="/quality-control" component={QualityControlPage} />
        <Route path="/student-profile" component={StudentProfilePage} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
