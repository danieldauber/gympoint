import produce from 'immer';

const INICIAL_STATE = {
  registration: null,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/EDIT_REGISTRATION_REQUEST': {
        draft.registration = action.payload.data;
        break;
      }
      default:
    }
  });
}
