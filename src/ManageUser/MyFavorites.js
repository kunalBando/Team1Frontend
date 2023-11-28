import React, { useState, useEffect } from 'react';
import Header from './Header';

export default function MyFavorites() {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    useEffect(() => {
        // Update favorites state whenever local storage changes
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    }, []);

    return (
        <>
        <Header/>
        <div className="container mt-5">
            <h2>My Favorites</h2>
            {favorites.length > 0 ? (
                <ul className="list-group">
                    {favorites.map((favorite, index) => (
                        <li key={index} className="list-group-item">
                            {favorite.entityName} - {favorite.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites added yet.</p>
            )}
        </div>
        </>
    );
}
