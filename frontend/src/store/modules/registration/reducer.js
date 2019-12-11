import produce from 'immer';

const INICIAL_STATE = {
  registration: null,
};

export default function user(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
