import _ from 'lodash';

const COMPANY_ID_REGEX = new RegExp(':companyId', 'g');
const PROJECT_ID_REGEX = new RegExp(':projectId', 'g');

export const routeByCompanyId = (route, companyId) => {
  const convertedRoute = _.replace(route, COMPANY_ID_REGEX, companyId);
  return convertedRoute;
};
export const routeByCompanyIdAndProjectId = (route, companyId, projectId) => {
  let convertedRoute = _.replace(route, COMPANY_ID_REGEX, companyId);
  convertedRoute = _.replace(route, PROJECT_ID_REGEX, projectId);
  return convertedRoute;
};
