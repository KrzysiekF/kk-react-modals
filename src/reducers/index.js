import { merge } from 'lodash';
import { KK_OPEN_MODAL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case KK_OPEN_MODAL:
      return merge({}, state, { [action.id]: action.payload });

    default:
      return state;
  }
}
