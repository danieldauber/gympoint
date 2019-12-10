export function createPlanRequest(data) {
  return {
    type: '@plans/CREATE_PLAN_REQUEST',
    payload: { data },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plans/DELETE_PLAN_REQUEST',
    payload: { id },
  };
}

export function editPlanRequest(data) {
  return {
    type: '@plans/EDIT_PLAN_REQUEST',
    payload: { data },
  };
}

export function updatePlanRequest(data) {
  return {
    type: '@plans/UPDATE_PLAN_REQUEST',
    payload: { data },
  };
}
