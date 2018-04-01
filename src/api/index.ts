import axios from 'axios';

export namespace api {
  export function getFilms() {
    return axios.get('https://swapi.co/api/films/').then(x => x.data.results);
  }

  export function getSwimmingStyles() {
    const styles = ['Butterfly', 'Backstroke', 'Breaststroke', 'Front Crawl'];

    return new Promise<typeof styles>((res, rej) => {
      setTimeout(() => res(styles), 1000);
    });
  }
}
