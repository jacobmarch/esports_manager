import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axiosInstance.get('api/organizations')
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
        <ul>
          {organizations.map(organization => (
            <li key={organization.id}>{organization.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OrganizationList;