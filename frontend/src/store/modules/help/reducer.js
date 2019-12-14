import produce from 'immer';

const INICIAL_STATE = {
  answer: null,
  toggle: false,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help/UPDATE_HELP_REQUEST': {
        draft.answer = action.payload.data;
        break;
      }
      case '@help/OPEN_MODAL': {
        draft.toggle = action.payload.data;
        break;
      }
      case '@help/UPDATE_HELP_SUCCESS': {
        draft.toggle = false;
        break;
      }
      case '@help/UPDATE_HELP_FAILURE': {
        draft.toggle = false;
        break;
      }
      default:
    }
  });
}
