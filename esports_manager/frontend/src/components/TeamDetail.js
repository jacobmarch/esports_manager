import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function TeamDetail() {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/teams/${id}`)
            .then(response => {
                setTeam(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);
    if (loading){
        return <div>Loading...</div>;
    }
    if (error){
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{team.name}</h1>
            <p>Location: {team.location}</p>
            <h2>Members</h2>
            <ul>
                {team.members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
            <Link to='/teams/${id}/edit'>Edit Team</Link>
        </div>
    )

};

export default TeamDetail;