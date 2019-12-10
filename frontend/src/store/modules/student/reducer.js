import produce from 'immer';

const INICIAL_STATE = {
  student: null,
};

export default function student(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/EDIT_STUDENT_REQUEST': {
        draft.student = action.payload.student;
        break;
      }

      default:
    }
  });
}
