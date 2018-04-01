import { api } from '../api';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';

export const GET_SWIMMING_STYLES = 'GET_SWIMMING_STYLES';
export const GET_SWIMMING_STYLES_PENDING = 'GET_SWIMMING_STYLES_PENDING';
export const GET_SWIMMING_STYLES_FULFILLED = 'GET_SWIMMING_STYLES_FULFILLED';
export const GET_SWIMMING_STYLES_REJECTED = 'GET_SWIMMING_STYLES_REJECTED';

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function addComic(comic: string) {
  return { type: ADD_COMIC, payload: comic };
}

export function deleteComic(index: number) {
  return { type: DELETE_COMIC, payload: index };
}

export function getSwimmingStyles() {
  return {
    type: GET_SWIMMING_STYLES,
    payload: api.getSwimmingStyles(),
  };
}
