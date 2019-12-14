export function updateRegistrationRequest(data) {
  return {
    type: '@registration/UPDATE_REGISTRATION_REQUEST',
    payload: { data },
  };
}

export function deleteRegistrationRequest(data) {
  return {
    type: '@registration/DELETE_REGISTRATION_REQUEST',
    payload: { data },
  };
}

export function createRegistrationRequest(data) {
  return {
    type: '@registration/CREATE_REGISTRATION_REQUEST',
    payload: { data },
  };
}
