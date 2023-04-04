import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrganizationDetail() {
    const { id } = useParams();
    const [organization, setOrganization] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get(`api/organizations/${id}`)
            .then(response => {
                setOrganization(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{organization.name}</h1>
            <p>Location: {organization.location}</p>
            <h2>Teams</h2>
            <ul>
                {organization.teams.map(team => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
            <Link to='/organizations/${id}/edit'>Edit Organization</Link>
        </div>
    )
};

export default OrganizationDetail;