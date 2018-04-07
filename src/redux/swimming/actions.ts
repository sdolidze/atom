import { api } from '../../api';

export const GET_SWIMMING_STYLES = 'GET_SWIMMING_STYLES';
export const GET_SWIMMING_STYLES_PENDING = 'GET_SWIMMING_STYLES_PENDING';
export const GET_SWIMMING_STYLES_FULFILLED = 'GET_SWIMMING_STYLES_FULFILLED';
export const GET_SWIMMING_STYLES_REJECTED = 'GET_SWIMMING_STYLES_REJECTED';

export namespace swimmingActions {
  export function getSwimmingStyles() {
    return {
      type: GET_SWIMMING_STYLES,
      payload: api.getSwimmingStyles(),
    };
  }
}
