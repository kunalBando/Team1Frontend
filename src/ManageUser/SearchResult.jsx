import React, { useState, useEffect } from 'react';
// import './Styles/SearchResult.css';

export default function SearchResult(props) {
    var results = [];

    for (var key in props) {
        results.push([key, props[key]]);
    }

    console.log(results);

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    useEffect(() => {
        // Update favorites state whenever local storage changes
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    }, []);

    let mappedResult = results.map((temp, index) => {
        const isFavorite = favorites.some(favorite => favorite.entityName === temp[1].entityName);

        return (
            <div className="card w-50 mx-auto" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{temp[1].entityName}</h5>
                    <p className="card-text">{temp[1].description}</p>
                    <button className="btn btn-primary" onClick={() => toggleFavorites(temp[1])}>
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        );
    });

    // Function to handle adding/removing from favorites
    const toggleFavorites = (item) => {
        const isFavorite = favorites.some(favorite => favorite.entityName === item.entityName);

        if (isFavorite) {
            // Remove the item from favorites
            const updatedFavorites = favorites.filter(favorite => favorite.entityName !== item.entityName);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            console.log('Removed from favorites:', updatedFavorites);
        } else {
            // Add the item to favorites
            const updatedFavorites = [...favorites, item];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            console.log('Added to favorites:', updatedFavorites);
        }
    };

    return (
        <>
            <br></br>
            {mappedResult}
        </>
    );
}

























// import React from 'react';
// //  import './Styles/SearchResult.css';

// export default function SearchResult(props) {
//     var results = [];

//     for (var key in props) {
//         results.push([key, props[key]]);
//     }

//     console.log(results);

//     let mappedResult = results.map((temp, index) => (
//         <div className="card w-50 mx-auto">
//         <div key={index} className="card-body">
//             <h5 className="card-title">{temp[1].entityName}</h5>
//             <p className="card-text">{temp[1].description}</p>
//         </div>
//         </div>
//     ));

//     return (

//         <>
//         <br></br>
//                 {mappedResult}
//         </>
//     );
// }
