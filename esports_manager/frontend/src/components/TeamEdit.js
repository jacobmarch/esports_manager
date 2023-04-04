import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function TeamEdit() {
    const { id } = useParams();
    const history = useHistory();
    const [team, setTeam] = useState({ name: '', description: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await axiosInstance.get(`/api/teams/${id}/`);
                    setTeam(response.data);
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
        setTeam({ ...team, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axiosInstance.put(`/api/teams/${id}/`, team);
            } else {
                await axiosInstance.post('/api/teams/', team);
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
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{id ? 'Edit Team' : 'Create Team'}</h1>
            <form onSubmit={handleSubmit}></form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type ="text"
                        id="name"
                        name="name"
                        value={team.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    id="description"
                    name="description"
                    value={team.description}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div> 
    );
}

export default TeamEdit;