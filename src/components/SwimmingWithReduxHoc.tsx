import { connect, Dispatch } from 'react-redux';
import { RootState } from '../redux';
import { swimmingActions } from '../redux/swimming';
import { Swimming } from './Swimming';

const mapStateToProps = ({ swimming }: RootState) => swimming;

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onDownload: () => dispatch(swimmingActions.getSwimmingStyles()),
});

export const comicWithRedux = connect(mapStateToProps, mapDispatchToProps)(
  Swimming,
);
