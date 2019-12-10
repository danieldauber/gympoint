import produce from 'immer';

const INICIAL_STATE = {
  plan: null,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plans/EDIT_PLAN_REQUEST': {
        draft.plan = action.payload.data;
        break;
      }
      default:
    }
  });
}
