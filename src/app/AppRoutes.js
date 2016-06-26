import React from 'react';
import {
    Route,
    Redirect,
    IndexRoute,
} from 'react-router';
import Conversations from "./components/pages/Conversations";
// Here we define all our material-ui ReactComponents.
import Master from './components/Master';
import Home from './components/pages/Home';


/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="conversations">
            <Route path="list" component={Conversations}/>
        </Route>
    </Route>
);

export default AppRoutes;
