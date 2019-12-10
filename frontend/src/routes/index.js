import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import StudentList from '../pages/Students/List';
import StudentEdit from '../pages/Students/Edit';
import StudentCreate from '../pages/Students/Create';
import PlansList from '../pages/Plans/List';
import PlansCreate from '../pages/Plans/Create';
import PlansUpdate from '../pages/Plans/Update';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={StudentList} isPrivate />
      <Route path="/student/edit" exact component={StudentEdit} isPrivate />
      <Route path="/student/create" exact component={StudentCreate} isPrivate />
      <Route path="/plans" exact component={PlansList} isPrivate />
      <Route path="/plans/create" exact component={PlansCreate} isPrivate />
      <Route path="/plans/edit" exact component={PlansUpdate} isPrivate />
    </Switch>
  );
}
