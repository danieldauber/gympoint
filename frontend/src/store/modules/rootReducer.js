import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './student/reducer';
import plans from './plans/reducer';
import registration from './registration/reducer';
import help from './help/reducer';

export default combineReducers({
  auth,
  user,
  student,
  plans,
  registration,
  help,
});
