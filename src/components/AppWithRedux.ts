import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { RootState } from '../redux';
import { logout } from '../redux/auth';
import App from './App';

const mapStateToProps = ({ auth: { user } }: RootState) => ({
  isLoggedIn: user !== null,
  name: user ? user.firstName + ' ' + user.lastName : null,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onPush: (url: string) => dispatch(push(url)),
  onLogout: () => dispatch(logout()),
  onLogin: () => dispatch(push('/login')),
});

export const AppWithRedux = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App) as any);
