import React from 'react';
import './App.less';
import { Switch, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import PrivateRoute from './components/PrivateRoute';
import UnauthRoute from './components/UnauthRoute';
import AdminRoute from './components/AdminRoute';
import CompanyRoute from './components/CompanyRoute';
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
import CompanyManagement from './pages/CompanyManagement';
import { getCurrentUser as GET_CURRENT_USER } from './graphql/queries.gql';
import CenterMessage from './components/CenterMessage';
import { Routes } from './constants';

const App = () => (
  <Query query={GET_CURRENT_USER}>
    {({ loading, error }) => {
      if (loading)
        return (
          <div className="loading-layout">
            <div className="loading-icon" />
          </div>
        );
      if (error) return `Error! ${error.message}`;
      return (
        <React.Fragment>
          <Switch>
            <AdminRoute exact path={Routes.admin.companyMangement} component={CompanyManagement} />
            <CompanyRoute exact path={Routes.company.utm.projects} component={Projects} />
            <CompanyRoute exact path="/users" component={Users} />
            <PrivateRoute exact path={Routes.user.profile} component={Profile} />
            <CompanyRoute
              exact
              path={Routes.company.utm.utmBuilder}
              component={ProjectUTMBuilder}
            />
            <CompanyRoute
              exact
              path={Routes.company.utm.utmHistory}
              component={ProjectUTMHistory}
            />
            <CompanyRoute
              exact
              path={Routes.company.utm.utmAnalysis}
              component={ProjectUTMAnalysis}
            />
            <CompanyRoute exact path={Routes.company.utm.projectRules} component={ProjectRules} />
            <CompanyRoute
              exact
              path={Routes.company.utm.projectMembers}
              component={ProjectMembers}
            />
            <CompanyRoute
              exact
              path={Routes.company.utm.projectDimensions}
              component={ProjectDimensions}
            />
            <CompanyRoute
              exact
              path={Routes.company.utm.projectAssignments}
              component={ProjectAssignments}
            />
            <UnauthRoute exact path={Routes.login} component={Login} />
            <Route render={() => <CenterMessage icon="frown-o" text="Page Not Found" />} />
          </Switch>
        </React.Fragment>
      );
    }}
  </Query>
);

export default App;
