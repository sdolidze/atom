import { connect, Dispatch } from 'react-redux';

interface Props {
  children: any;
  state: any;
  dispatch: Dispatch<any>;
}

const WithStoreInner = ({ children, state, dispatch }: Props) =>
  children(state, dispatch);

// TODO:use selector to limit number of times component will update
export const WithStore = connect(
  state => ({ state }),
  dispatch => ({ dispatch }),
)(WithStoreInner);
