import React from 'react';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const DATA = 'DATA';
export const searchUrl =
  'https://pixabay.com/api/?key=35790043-a964cdee4ec6214df9fc149fc&q={queryString}&image_type=photo';

export const AppContext = React.createContext({});
