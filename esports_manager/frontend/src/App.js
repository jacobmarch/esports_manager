import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrganizationList from './components/OrganizationList';
import OrganizationDetail from './components/OrganizationDetail';
import TeamList from './components/TeamList';
import TeamDetail from './components/TeamDetail';
import PersonnelList from './components/PersonnelList';
import PersonnelDetail from './components/PersonnelDetail';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={OrganizationList} />
          <Route path="/organizations/:id" component={OrganizationDetail} />
          <Route path="/teams/:id" component={TeamList} />
          <Route path="/team/:id" component={TeamDetail} />
          <Route path="/personnel/:id" component={PersonnelList} />
          <Route path="/person/:id" component={PersonnelDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
