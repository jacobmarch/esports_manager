import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonnelList() {
    const [personnels, setPersonnels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get('api/personnels')
            .then(response => {
                setPersonnels(response.data);
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
            <h1>Personnels</h1>
            <ul>
                {personnels.map(personnel => (
                    <li key={personnel.id}>{personnel.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonnelList;