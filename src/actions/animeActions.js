import {
  GET_ANIME,
  GET_NEW_SEASON,
  GET_SCHEDULE,
  GET_ANIME_LIST,
  GET_ONGOING_ANIME,
  FIND_ANIME,
  ANIME_LOADING,
} from './types';
import httpClient from '../utils/httpClient';

export const getAnime = (title) => (dispatch) => {
  dispatch(setAnimeLoading());
  httpClient
    .get(`/api/anime/${title}`)
    .then((res) => {
      dispatch({ type: GET_ANIME, payload: res.data });
      document.title = `${res.data[0].title} `;
    })
    .catch((err) => console.log(err.response.data));
};

export const getOngoingAnime = () => (dispatch) => {
  dispatch(setAnimeLoading());
  httpClient
    .get('/api/ongoing')
    .then((res) => {
      dispatch({ type: GET_ONGOING_ANIME, payload: res.data });
    })
    .catch((err) => console.log(err.response.data));
};

export const getAnimeList = (page, isTrue = false) => (dispatch) => {
  if (isTrue) {
    dispatch(setAnimeLoading());
  }
  httpClient
    .get(`/api/anime-list/?page=${page}`)
    .then((res) => dispatch({ type: GET_ANIME_LIST, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getAnimeListSort = (sort, page, isTrue = false) => (dispatch) => {
  if (isTrue) {
    dispatch(setAnimeLoading());
  }
  httpClient
    .get(`/api/anime-list/${sort}/?page=${page}`)
    .then((res) => dispatch({ type: GET_ANIME_LIST, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getNewSeason = (page, isTrue = false) => (dispatch) => {
  if (isTrue) {
    dispatch(setAnimeLoading());
  }
  httpClient
    .get(`/api/new-season/?page=${page}`)
    .then((res) => dispatch({ type: GET_NEW_SEASON, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getSchedule = () => (dispatch) => {
  dispatch(setAnimeLoading());
  httpClient
    .get('/api/schedule')
    .then((res) => dispatch({ type: GET_SCHEDULE, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const findAnime = (anime) => (dispatch) => {
  httpClient
    .get(`/api/find-anime/?anime=${anime}`)
    .then((res) => dispatch({ type: FIND_ANIME, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const setAnimeLoading = () => {
  return {
    type: ANIME_LOADING,
  };
};
