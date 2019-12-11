export function updateRegistrationRequest(data) {
  return {
    type: '@registration/UPDATE_REGISTRATION_REQUEST',
    payload: { data },
  };
}
