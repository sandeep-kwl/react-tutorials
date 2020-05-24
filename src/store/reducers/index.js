import { ADD_PROFILE } from '../../types';

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    default:
      return state;
  }
}
