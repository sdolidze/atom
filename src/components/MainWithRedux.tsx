import { connect, Dispatch } from 'react-redux';
import { RootState } from '../redux';
import { Main } from './Main';

const mapStateToProps = ({ auth }: RootState) => ({
  isLoggedIn: auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export const MainWithRedux = connect(mapStateToProps, mapDispatchToProps)(Main);
