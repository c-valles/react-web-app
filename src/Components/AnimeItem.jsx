import React from "react";

const AnimeItem = ({ anime }) => {
    return ( 
        <div>
            <h3>{anime.title}</h3>
            <p>Type: {anime.type}</p>
            <p>Episodes: {anime.episodes}</p>
            <p>Genres: {anime.genres.join(',')}</p>
        </div>
    );
};

export default AnimeItem;