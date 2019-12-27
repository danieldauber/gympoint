import produce from 'immer';

const INICIAL_STATE = {
  checkin: null,
};

export default function checkin(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
