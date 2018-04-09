import { connect, Dispatch } from 'react-redux';
import { RootState } from '../redux';
import App from './App';

const mapStateToProps = ({ auth: { isLoggedIn } }: RootState) => ({
  isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);
