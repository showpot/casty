import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from './helpers/authUtils';

// lazy load all the views
const Dashboard = React.lazy(() => import('./pages/dashboards/'));
const Users = React.lazy(() => import('./pages/users/'));
const Company = React.lazy(() => import('./pages/company/'));
const Departments = React.lazy(() => import('./pages/departments/'));
const Channels = React.lazy(() => import('./pages/channels/'));
const Episodes = React.lazy(() => import('./pages/episodes/'));
const Shows = React.lazy(() => import('./pages/shows/'));

// auth
const Login = React.lazy(() => import('./pages/auth/Login'));
const Logout = React.lazy(() => import('./pages/auth/Logout'));
const ForgetPassword = React.lazy(() => import('./pages/account/ForgetPassword'));
const Register = React.lazy(() => import('./pages/account/Register'));
const ConfirmAccount = React.lazy(() => import('./pages/account/Confirm'));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={props => {
    const isAuthTokenValid = isUserAuthenticated();
    if (!isAuthTokenValid) {
      // not logged in so redirect to login page with the return url
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }

    const loggedInUser = getLoggedInUser();
    // check if route is restricted by role
    if (roles && roles.indexOf(loggedInUser.role) === -1) {
      // role not authorised so redirect to home page
      return <Redirect to={{ pathname: '/' }} />
    }

    // authorised so return component
    return <Component {...props} />
  }} />
)

const routes = [
  // auth and account
  { path: '/login', name: 'Login', component: Login, route: Route },
  { path: '/logout', name: 'Logout', component: Logout, route: Route },
  { path: '/forget-password', name: 'Forget Password', component: ForgetPassword, route: Route },
  { path: '/register', name: 'Register', component: Register, route: Route },
  { path: '/confirm', name: 'Confirm', component: ConfirmAccount, route: Route },

  // other pages
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, route: PrivateRoute, roles: ['Admin'] },
  { path: '/users', name: 'Users', component: Users, route: PrivateRoute, roles: ['Admin'] },
  { path: '/company', name: 'Users', component: Company, route: PrivateRoute, roles: ['Admin'] },
  { path: '/departments', name: 'Departments', component: Departments, route: PrivateRoute, roles: ['Admin'] },
  { path: '/channels', name: 'Channels', component: Channels, route: PrivateRoute, roles: ['Admin'] },
  { path: '/episodes', name: 'Episodes', component: Episodes, route: PrivateRoute, roles: ['Admin'] },
  { path: '/shows', name: 'Shows', component: Shows, route: PrivateRoute, roles: ['Admin'] },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute
  },
  
]

export { routes, PrivateRoute };