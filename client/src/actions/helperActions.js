import { GET_PAGE_COUNT } from "./types";

import httpClient from '../utils/httpClient'

export const getLastReleasePageCount = () => dispatch => {
  httpClient
    .get("/api/recent-release/count")
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};

export const getAllEpisodePageCount = title => dispatch => {
  httpClient
    .get(`/api/all-episode/count/${title}`)
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};

export const getAnimeListPageCount = () => dispatch => {
  httpClient
    .get(`/api/anime-list/count`)
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};

export const getAnimeListSortCount = sort => dispatch => {
  httpClient
    .get(`/api/anime-list/count/${sort}`)
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};

export const getNewSeasonCount = () => dispatch => {
  httpClient
    .get(`/api/new-season/count`)
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};

export const getEpisodeCount = title => dispatch => {
  httpClient
    .get(`/api/recent-episode/count/${title}`)
    .then(res => dispatch({ type: GET_PAGE_COUNT, payload: res.data }))
    .catch(err => console.log(err.response.data));
};
