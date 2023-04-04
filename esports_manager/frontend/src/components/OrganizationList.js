import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axiosInstance.get('/organizations')
        .then(response => {
          setOrganizations(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
    if (loading){
      return <div>Loading...</div>;
    }
    if (error){
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Organizations</h1>
        <Link to='/organizations/create'>Create Organization</Link>
        <ul>
          {organizations.map(organization => (
            <li key={organization.id}>{organization.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OrganizationList;