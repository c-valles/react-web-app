import { configureStore } from "@reduxjs/toolkit";
import animeReducer from '../Slices/animeSlice';

export default configureStore({
    reducer: {
        anime: animeReducer,
    },
});