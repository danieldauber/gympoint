export function updateHelpRequest(data) {
  return {
    type: '@help/UPDATE_HELP_REQUEST',
    payload: { data },
  };
}

export function openModal(data) {
  return {
    type: '@help/OPEN_MODAL',
    payload: { data },
  };
}

export function updateHelpSuccess(data) {
  return {
    type: '@help/UPDATE_HELP_SUCCESS',
    payload: { data },
  };
}

export function updateHelpFailure() {
  return {
    type: '@help/UPDATE_HELP_FAILURE',
  };
}
