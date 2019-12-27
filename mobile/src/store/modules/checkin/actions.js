export function checkInRequest(user) {
  return {
    type: '@checkin/CHECK_IN_REQUEST',
    payload: { user },
  };
}

export function checkInSuccess(checkin) {
  return {
    type: '@checkin/CHECK_IN_SUCCESS',
    payload: { checkin },
  };
}

export function checkInFailure() {
  return {
    type: '@checkin/CHECK_IN_FAILURE',
  };
}
