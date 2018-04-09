import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { RootState } from '../redux';
import App from './App';

const mapStateToProps = ({ auth: { isLoggedIn } }: RootState) => ({
  isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onPush: (url: string) => dispatch(push(url)),
});

export const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);
