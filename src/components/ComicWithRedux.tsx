import { connect, Dispatch } from 'react-redux';
import { RootState } from '../redux';
import { comicActions } from '../redux/comic';
import { Comic } from './Comic';

const mapStateToProps = (state: RootState) => ({
  comics: state.comic.comics,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAdd: (comic: string) => dispatch(comicActions.addComic(comic)),
  onDelete: (index: number) => dispatch(comicActions.deleteComic(index)),
});

export const ComicWithRedux = connect(mapStateToProps, mapDispatchToProps)(
  Comic,
);
