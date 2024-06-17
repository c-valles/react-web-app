import { setAnimeList, setLoading, setError } from "../Slices/animeSlice";

export const fetchAnime = () => async dispatch => {
    dispatch(setLoading(true));
    try {
        const response = await fetch(
            'https://www.animenewsnetwork.com/encyclopedia/api.php?anime',
        );
        if (!response.ok) {
            throw new Error('Failed to fetch anime');
        }
        const data = await response.json();
        dispatch(setAnimeList(data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};