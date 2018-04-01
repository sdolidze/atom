import * as React from 'react';
import { api } from '../api';
import { List } from './List';
// import { Box } from './Box';

interface Props {}

interface State {
  films: any[];
}

export class StarWarsWithState extends React.Component<Props, State> {
  state = { films: [] as any[] };

  async componentDidMount() {
    const films = await api.getFilms();
    this.setState({ films });
  }

  render() {
    return (
      <List
        color="purple"
        title="Start Wars"
        items={this.state.films}
        keySelector={x => x.episode_id}
        valueSelector={x => x.title}
      />
    );
  }
}
