import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function OrganizationEdit() {
  const { id } = useParams();
  const history = useNavigate();
  const [organization, setOrganization] = useState({ name: '', location: '' });
  const [loading, setLoading] = useState(id ? true : false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get(`/organizations/${id}/`);
          setOrganization(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization({ ...organization, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axiosInstance.put(`/api/organizations/${id}/`, organization);
      } else {
        await axiosInstance.post('/api/organizations/', organization);
      }
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{id ? 'Edit Organization' : 'Create Organization'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={organization.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={organization.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{id ? 'Save Changes' : 'Create'}</button>
      </form>
    </div>
  );
}

export default OrganizationEdit;
