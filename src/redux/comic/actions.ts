export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';

export namespace comicActions {
  export function addComic(comic: string) {
    return { type: ADD_COMIC, payload: comic };
  }

  export function deleteComic(index: number) {
    return { type: DELETE_COMIC, payload: index };
  }
}
