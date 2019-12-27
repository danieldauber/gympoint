export function helpRequest(help) {
  return {
    type: '@help/HELP_REQUEST',
    payload: { help },
  };
}

export function helpSuccess(help) {
  return {
    type: '@help/HELP_SUCCESS',
    payload: { help },
  };
}

export function helpFailure() {
  return {
    type: '@help/HELP_FAILURE',
  };
}
