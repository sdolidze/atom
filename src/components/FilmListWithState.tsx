import * as React from 'react';
import { api } from '../api';
import { Box } from './Box';

interface Props {}

interface State {
  films: any[];
}

const styles = {
  span: {
    margin: '5px 0',
  },
};

export class FilmListWithState extends React.Component<Props, State> {
  state = { films: [] as any[] };

  async componentDidMount() {
    const films = await api.getFilms();
    this.setState({ films });
  }

  render() {
    return (
      <Box color="purple">
        <h3>Start Wars</h3>
        {this.state.films.map(film => (
          <span style={styles.span} key={film.episode_id}>
            {film.title}
          </span>
        ))}
      </Box>
    );
  }
}
