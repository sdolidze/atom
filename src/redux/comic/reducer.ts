import { RootAction } from '..';
import { ADD_COMIC, DELETE_COMIC } from './actions';

export interface ComicState {
  comics: string[];
}

const initialState: ComicState = {
  comics: [
    'Louis C.K.',
    'George Carlin',
    'Kevin Hart',
    'Chris Rock',
    'Jerry Seinfeld',
  ],
};

export function comicReducer(
  state: ComicState = initialState,
  action: RootAction,
) {
  switch (action.type) {
    case ADD_COMIC:
      return { ...state, comics: [...state.comics, action.payload] };
    case DELETE_COMIC:
      return {
        ...state,
        comics: state.comics.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
