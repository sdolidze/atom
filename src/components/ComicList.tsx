import * as React from 'react';
import { connect } from 'react-redux';
import { addComic, deleteComic } from '../actions';

interface Props {
  comics: string[];
  onAdd: (value: string) => void;
  onDelete: (index: number) => void;
}

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    backgroundColor: '#4CAF50',
    color: '#FFF',
    padding: '10px',
    margin: '10px',
    width: '200px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginTop: '10px',
  },
  button: {
    marginLeft: '5px',
  },
};

export const ComicList = connect(
  (state: any) => {
    return {
      comics: state.comic.comics,
    };
  },
  (dispatch: any) => {
    return {
      onAdd: (comic: string) => dispatch(addComic(comic)),
      onDelete: (index: number) => dispatch(deleteComic(index)),
    };
  },
)(({ comics, onAdd, onDelete }: Props) => {
  let input: any = null;

  const onClick = () => {
    onAdd(input.value);
    input.value = '';
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onAdd(input.value);
      input.value = '';
    }
  };

  return (
    <div style={styles.div}>
      {comics.map((comic, i) => (
        <div key={i}>
          <span>{comic}</span>
          <button style={styles.button} onClick={() => onDelete(i)}>
            -
          </button>
        </div>
      ))}
      <input
        style={styles.input}
        type="text"
        placeholder="Enter new comic"
        ref={inp => (input = inp)}
        onKeyPress={onKeyPress}
      />
      <button style={styles.input} onClick={onClick}>
        Add
      </button>
    </div>
  );
});