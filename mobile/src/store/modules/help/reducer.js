import produce from 'immer';

const INICIAL_STATE = {
  help: null,
  nav: false,
};

export default function help(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help/HELP_REQUEST': {
        draft.nav = false;
        break;
      }
      case '@help/HELP_SUCCESS': {
        draft.help = action.payload.help;
        draft.nav = true;
        break;
      }
      default:
    }
  });
}
