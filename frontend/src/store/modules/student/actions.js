export function editStudentRequest(student) {
  return {
    type: '@student/EDIT_STUDENT_REQUEST',
    payload: { student },
  };
}

export function createStudentRequest(data) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { data },
  };
}

export function createStudentSuccess(student) {
  return {
    type: '@student/CREATE_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function createStudentFailure() {
  return {
    type: '@student/CREATE_STUDENT_FAILURE',
  };
}

export function updateStudentRequest(data) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { data },
  };
}

export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function updateStudentFailure() {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_STUDENT_REQUEST',
    payload: { id },
  };
}
