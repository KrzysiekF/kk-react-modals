import * as types from './types';

export function openModalAction(id, payload) {
  return {
    type: types.KK_OPEN_MODAL,
    id,
    payload,
  };
}
