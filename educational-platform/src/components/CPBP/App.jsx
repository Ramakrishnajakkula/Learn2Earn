import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentProfilePage from './StudentProfilePage';
import ClientProjectBriefPage from './ClientProjectBriefPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={StudentProfilePage} />
        <Route path="/project-brief" component={ClientProjectBriefPage} />
      </Switch>
    </Router>
  );
}

export default App;
