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

  export async function login(username: string, password: string) {
    return new Promise((res, rej) => {
      const defer = () => {
        if (username === 'sdolidze' && password === 'barcelona') {
          res({ ok: true });
        } else {
          rej({ err: true });
        }
      };
      setTimeout(defer, 1000);
    });
  }
}
