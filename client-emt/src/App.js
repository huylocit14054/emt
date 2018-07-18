import React from 'react';
import './App.less';
import { Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import PrivateRoute from './components/PrivateRoute';
import UnauthRoute from './components/UnauthRoute';
import NavigationLayout from './components/NavigationLayout';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Users from './pages/Users';
import ProjectUTMBuilder from './pages/ProjectUTMBuilder';
import ProjectUTMHistory from './pages/ProjectUTMHistory';
import ProjectUTMAnalysis from './pages/ProjectUTMAnalysis';
import ProjectRules from './pages/ProjectRules';
import ProjectMembers from './pages/ProjectMembers';
import ProjectAssignments from './pages/ProjectAssignments';
import ProjectDimensions from './pages/ProjectDimensions';
import { getCurrentUser as GET_CURRENT_USER } from './graphql/queries.gql';

const App = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading, error }) => {
      if (loading)
        return (
          <div className="loading-layout">
            <div className="loading-icon" />
          </div>
        );
      if (error) return `Error! ${error.message}`;
      return (
        <React.Fragment>
          <NavigationLayout hidden={!data.currentUser}>
            <Switch>
              <PrivateRoute exact path="/" component={Projects} />
              <PrivateRoute exact path="/users" component={Users} />
              <PrivateRoute exact path="/me/profile" component={Profile} />
              <PrivateRoute
                exact
                path="/project/:projectId/utm-builder"
                component={ProjectUTMBuilder}
              />
              <PrivateRoute
                exact
                path="/project/:projectId/utm-history"
                component={ProjectUTMHistory}
              />
              <PrivateRoute
                exact
                path="/project/:projectId/utm-analysis"
                component={ProjectUTMAnalysis}
              />
              <PrivateRoute exact path="/project/:projectId/rules" component={ProjectRules} />
              <PrivateRoute exact path="/project/:projectId/members" component={ProjectMembers} />
              <PrivateRoute
                exact
                path="/project/:projectId/dimensions"
                component={ProjectDimensions}
              />
              <PrivateRoute
                exact
                path="/project/:projectId/assignments"
                component={ProjectAssignments}
              />
              <UnauthRoute exact path="/login" component={Login} />
            </Switch>
          </NavigationLayout>
        </React.Fragment>
      );
    }}
  </Query>
);

export default App;
