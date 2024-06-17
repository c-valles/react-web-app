import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../Redux/actions';
import AnimeItem from './AnimeItem';

const AnimeList = () => {
    const dispatch = useDispatch();
    const animeList = useSelector(state => state.anime.animeList);

    useEffect(() => {
        dispatch(fetchAnime());
    }, [dispatch]);

    return (
        <div>
            <h2>Anime List</h2>
            {animeList.map(anime => (
                <AnimeItem key={anime.id} anime={anime} />
            ))}
        </div>
    );
};

export default AnimeList;
