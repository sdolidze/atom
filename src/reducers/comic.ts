import { ADD_COMIC, DELETE_COMIC } from '../actions';

interface State {
  comics: string[];
}

const initialState = {
  comics: [
    'Louis C.K.',
    'George Carlin',
    'Kevin Hart',
    'Chris Rock',
    'Jerry Seinfeld',
  ],
};

export function comicReducer(state: State = initialState, action: any) {
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
