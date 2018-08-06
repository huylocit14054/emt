const dev = process.env.NODE_ENV === 'development';

const API_URL = dev && process.browser ? 'http://localhost:3004' : process.env.API_URL;
const CLIENT_URL = dev && process.browser ? 'http://localhost:3000' : process.env.CLIENT_URL;
const CLOUD_NAME = 'ezgamio';
const CLOUD_URL = 'http://res.cloudinary.com/ezgamio/image/upload/c_scale,h_40,w_40/';
const AUTH_TOKEN = 'auth-token';

// in user table
const ROLE_USER = 'user';
const ROLE_ADMIN = 'root_admin';

// in company member table
const ROLE_COMPANY_ADMIN = 'admin';
const ROLE_COMPANY_MEMBER = 'staff';
const ROLE_OMS_MANAGER = 'oms_manager';
const ROLE_OMS_MEMBER = 'oms_member';
const ROLE_UTM_MANAGER = 'utm_manager';
const ROLE_UTM_MEMBER = 'utm_member';
const UTM_SERVICE = 'utm';
const OMS_SERVICE = 'oms';
const OMS_SERVICE_ROLES = [ROLE_OMS_MANAGER, ROLE_OMS_MEMBER];
const UTM_SERVICE_ROLES = [ROLE_UTM_MANAGER, ROLE_UTM_MEMBER];

// plans
const PREMIUM = 'Premium';
const STANDARD_UTM = 'Standard UTM';
const STANDARD_OMS = 'Standard OMS';

// status
const STATUS_ACTIVE = 'active';
const STATUS_RESTRICTED = 'restricted';

// routes
const Routes = {
  login: '/login',
  user: {
    profile: '/me/profile',
  },
  admin: {
    companyMangement: '/admin/management/companies',
    serviceManagement: '/admin/management/services',
    planManagement: '/admin/management/plans',
  },
  company: {
    members: '/company/:companyId/members',
    utm: {
      projects: '/company/:companyId/utm/projects',
      utmBuilder: '/company/:companyId/utm/project/:projectId/utm-builder',
      utmHistory: '/company/:companyId/utm/project/:projectId/utm-history',
      utmAnalysis: '/company/:companyId/utm/project/:projectId/utm-analysis',
      projectRules: '/company/:companyId/utm/project/:projectId/rules',
      projectMembers: '/company/:companyId/utm/project/:projectId/members',
      projectDimensions: '/company/:companyId/utm/project/:projectId/dimensions',
      projectAssignments: '/company/:companyId/utm/project/:projectId/assignments',
    },
  },
};

const COMPANY = {
  status: {
    active: STATUS_ACTIVE,
    restricted: STATUS_RESTRICTED,
  },
};

module.exports = {
  API_URL,
  CLIENT_URL,
  CLOUD_NAME,
  CLOUD_URL,
  AUTH_TOKEN,
  ROLE_USER,
  ROLE_ADMIN,
  ROLE_COMPANY_ADMIN,
  ROLE_COMPANY_MEMBER,
  ROLE_OMS_MANAGER,
  ROLE_OMS_MEMBER,
  ROLE_UTM_MANAGER,
  ROLE_UTM_MEMBER,
  Routes,
  UTM_SERVICE,
  OMS_SERVICE,
  UTM_SERVICE_ROLES,
  OMS_SERVICE_ROLES,
  COMPANY,
  STATUS_ACTIVE,
  STATUS_RESTRICTED,
  PREMIUM,
  STANDARD_UTM,
  STANDARD_OMS,
};
