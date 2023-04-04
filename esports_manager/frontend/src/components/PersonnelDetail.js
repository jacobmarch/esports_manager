import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function PersonnelDetail() {
    const { id } = useParams();
    const [personnel, setPersonnel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/personnels/${id}`)
            .then(response => {
                setPersonnel(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{personnel.name}</h1>
            <p>{personnel.position}</p>
            <h2>Teams</h2>
            <ul>
                {personnel.teams.map(team => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
            <Link to='/personnels/${id}/edit'>Edit Personnel</Link>
        </div>

    )
};

export default PersonnelDetail;