import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get('/teams')
            .then(response => {
                setTeams(response.data);
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
            <h1>Teams</h1>
            <Link to='/teams/create'>Add Team</Link>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TeamList;