import React from 'react';
import { Route } from 'react-router';

import ActivityPage from './components/Activity.js';

const activityRoute = (
    <Route path='activity' component={ActivityPage} />
);

export default activityRoute;
