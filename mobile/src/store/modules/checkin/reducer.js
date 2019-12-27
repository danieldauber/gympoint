import produce from 'immer';

const INICIAL_STATE = {
  checkin: null,
};

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
