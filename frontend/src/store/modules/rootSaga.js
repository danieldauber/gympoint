import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';
import plans from './plans/sagas';
import registration from './registration/sagas';
import help from './help/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, plans, registration, help]);
}
