import {
  GET_LAST_RELEASE,
  GET_LAST_RELEASED,
  GET_EPISODE,
  GET_LAST_EPISODE,
  GET_ALL_EPISODE,
  EPISODE_LOADING,
  ANIME_LOADING,
  ANIME_LOADING_FALSE,
} from './types';

import httpClient from '../utils/httpClient';

export const getLastRelease = (page, isTrue = false) => (dispatch) => {
  if (isTrue) {
    dispatch(setEpisodeLoading());
  }
  httpClient
    .get(`/api/recent-release/?page=${page}`)
    .then((res) => dispatch({ type: GET_LAST_RELEASE, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getLastRelease2 = (limit) => (dispatch) => {
  httpClient
    .get(`/api/recent-release2/?limit=${limit}`)
    .then((res) => dispatch({ type: GET_LAST_RELEASED, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getEpisode = (title, episode) => (dispatch) => {
  dispatch(setAnimeLoading());
  httpClient
    .get(`/api/episode-anime/${title}/${episode}`)
    .then((res) => {
      dispatch({ type: GET_EPISODE, payload: res.data });
      dispatch(setLoadingFalse());
    })
    .catch((err) => console.log(err.response.data));
};

export const getLastEpisode = (title, skip, limit) => (dispatch) => {
  httpClient
    .get(`/api/recent-episode/${title}`)
    .then((res) => dispatch({ type: GET_LAST_EPISODE, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const getAllEpisode = (title, page, isTrue = false) => (dispatch) => {
  if (isTrue) {
    dispatch(setEpisodeLoading());
  }
  httpClient
    .get(`/api/all-episode/${title}/?page=${page}`)
    .then((res) => dispatch({ type: GET_ALL_EPISODE, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export const setEpisodeLoading = () => {
  return {
    type: EPISODE_LOADING,
  };
};

export const setAnimeLoading = () => {
  return {
    type: ANIME_LOADING,
  };
};

export const setLoadingFalse = () => {
  return {
    type: ANIME_LOADING_FALSE,
  };
};
