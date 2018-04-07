import { RootState } from '../reducers';

export function getComicCount(state: RootState) {
  return state.comic.comics.length;
}
