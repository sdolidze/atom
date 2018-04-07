import * as React from 'react';
import Login from './Login';

export class LoginWithRedux extends React.Component {
  state = { error: false, username: '', password: '' };

  login() {
    const { username, password } = this.state;
    if (username !== 'sdolidze' || password !== 'barcelona') {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }

  render() {
    return (
      <Login
        username={this.state.username}
        usernameChange={e => this.setState({ username: e.target.value })}
        password={this.state.password}
        passwordChange={e => this.setState({ password: e.target.value })}
        onLogin={() => this.login()}
        error={this.state.error}
      />
    );
  }
}
