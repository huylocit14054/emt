import React from 'react';
import './App.less';
import { Switch, Route } from 'react-router-dom';
import MyQueryWithLoadingLayout from './components/MyQueryWithLoadingLayout';
import UnauthRoute from './components/UnauthRoute';
import AdminRoute from './components/AdminRoute';
import CompanyRoute from './components/CompanyRoute';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Users from './pages/Users';
import ProjectUTMBuilder from './pages/ProjectUTMBuilder';
import ProjectUTMHistory from './pages/ProjectUTMHistory';
import ProjectUTMAnalysis from './pages/ProjectUTMAnalysis';
import ProjectRules from './pages/ProjectRules';
import ProjectMembers from './pages/ProjectMembers';
import ProjectAssignments from './pages/ProjectAssignments';
import ProjectDimensions from './pages/ProjectDimensions';
import CompanyManagement from './pages/CompanyManagement';
import ServiceManagement from './pages/ServicesManagement';
import PlanManagement from './pages/PlansManagement';
import CompanyMembers from './pages/CompanyMembers';
import { getCurrentUser as GET_CURRENT_USER } from './graphql/queries.gql';
import CenterMessage from './components/CenterMessage';
import { Routes } from './constants';

const App = () => (
  <MyQueryWithLoadingLayout query={GET_CURRENT_USER}>
    {() => (
      <React.Fragment>
        <Switch>
          <AdminRoute exact path={Routes.admin.companyMangement} component={CompanyManagement} />
          <AdminRoute exact path={Routes.admin.serviceManagement} component={ServiceManagement} />
          <AdminRoute exact path={Routes.admin.planManagement} component={PlanManagement} />
          <CompanyRoute exact path={Routes.company.members} component={CompanyMembers} />
          <CompanyRoute exact path={Routes.company.utm.projects} component={Projects} />
          <CompanyRoute exact path="/users" component={Users} />
          <CompanyRoute exact path={Routes.company.utm.utmBuilder} component={ProjectUTMBuilder} />
          <CompanyRoute exact path={Routes.company.utm.utmHistory} component={ProjectUTMHistory} />
          <CompanyRoute
            exact
            path={Routes.company.utm.utmAnalysis}
            component={ProjectUTMAnalysis}
          />
          <CompanyRoute exact path={Routes.company.utm.projectRules} component={ProjectRules} />
          <CompanyRoute exact path={Routes.company.utm.projectMembers} component={ProjectMembers} />
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
    )}
  </MyQueryWithLoadingLayout>
);

export default App;
