import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function PersonnelEdit() {
    const { id } = useParams();
    const history = useHistory();
    const [personnel, setPersonnel] = useState({ name: '', position: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await axiosInstance.get(`/api/personnels/${id}/`);
                    setPersonnel(response.data);
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
        setPersonnel({ ...personnel, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axiosInstance.put(`/api/personnels/${id}/`, personnel);
            } else {
                await axiosInstance.post('/api/personnels/', personnel);
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
            <h1>{id ? 'Edit Personnel' : 'Create Personnel'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={personnel.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={personnel.position}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    );

}

export default PersonnelEdit;