import { createSlice } from '@reduxjs/toolkit';

export const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        animeList: [],
        loading: false,
        error: null,
    },
    reducers: {
        setAnimeList: (state, action) => {
            state.animeList = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export const { setAnimeList, setLoading, setError } = animeSlice.actions;

export default animeSlice.reducer;