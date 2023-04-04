import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrganizationList from './components/OrganizationList';
import OrganizationDetail from './components/OrganizationDetail';
import TeamList from './components/TeamList';
import TeamDetail from './components/TeamDetail';
import PersonnelList from './components/PersonnelList';
import PersonnelDetail from './components/PersonnelDetail';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrganizationEdit from './components/OrganizationEdit';
import TeamEdit from './components/TeamEdit';
import PersonnelEdit from './components/PersonnelEdit';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<OrganizationList />} />
          <Route path="/organizations/:id" element={<OrganizationDetail />} />
          <Route path="/teams/:id" element={<TeamList />} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="/personnel/:id" element={<PersonnelList />} />
          <Route path="/person/:id" element={<PersonnelDetail />} />
          <Route path="/organizations/create" element={<OrganizationEdit />} />
          <Route path="/organizations/:id/edit" element={<OrganizationEdit />} />
          <Route path="/teams/create" element={<TeamEdit />} />
          <Route path="/teams/:id/edit" element={<TeamEdit />} />
          <Route path="/personnel/create" element={<PersonnelEdit />} />
          <Route path="/personnel/:id/edit" element={<PersonnelEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;