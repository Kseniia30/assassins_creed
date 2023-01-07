import axios from 'axios';

const key = '7cdf478795ad4657f8647bebd5408f4d';
const query = 'assassin%27s%20creed';

export const fetchAssassinCreedAll = () => {
    return axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}&language=en-US&page=1&include_adult=false`
    );
};

export const fetchMovieById = id => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    );
};

export const fetchMovieTrailer = id => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
    );
};

export const getGenres = () => {
    return axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    );
};
