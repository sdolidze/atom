export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';
export const GET_SWIMMING_STYLES = 'GET_SWIMMING_STYLES';

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
    payload: Promise.resolve([
      'Butterfly',
      'Backstroke',
      'Breaststroke',
      'Front Crawl',
    ]),
  };
}
