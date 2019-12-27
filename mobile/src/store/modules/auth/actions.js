export function signInRequest(user) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { user },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
