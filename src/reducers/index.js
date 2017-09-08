import { merge, omit, size } from 'lodash';
import { KK_OPEN_MODAL, KK_CLOSE_MODAL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case KK_OPEN_MODAL:
      return merge({}, state, { [size(state)]: action.payload });

    case KK_CLOSE_MODAL:
      return omit(state, [`[${action.payload}]`]);

    default:
      return state;
  }
}
