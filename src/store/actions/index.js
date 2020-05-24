import { ADD_PROFILE } from '../../types';

// Add the ser profile
export const addProfile = profile => dispatch => {
  dispatch({
    type: ADD_PROFILE,
    payload: profile
  });
};
