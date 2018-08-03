import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '../../../node_modules/react-apollo/test-utils';
// import { createCompany as CREATE_COMPANY_MUTATION } from './mutations.gql';
// import {
//   getAllPlansOfApplication as GET_ALL_PLANS_OF_APPLICATION,
//   getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY,
// } from '../../graphql/queries.gql';
import CreateCompanyDrawer from './CreateCompanyDrawer';

xdescribe('(Component) CreateCompanyDrawer', () => {
  it('should render without errors', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <CreateCompanyDrawer />
      </MockedProvider>
    );
    expect(wrapper).to.have.length(1);
  });
  //   const mocks = [
  //     {
  //       request: {
  //         query: CREATE_COMPANY_MUTATION,
  //         variables: {
  //           input: {
  //             name: 'Company A',
  //             companyAdminEmail: 'companya@gmail.com',
  //             planId: 2,
  //           },
  //         },
  //       },
  //       result: {
  //         data: {
  //           createCompany: {
  //             createdCompany: {
  //               id: 1,
  //               createdAt: Date.now(),
  //               name: 'Company A',
  //               email: 'companya@gmail.com',
  //               logo: 'mydefaultlogo.png',
  //               plan: {
  //                 id: 2,
  //                 name: 'SecondPlan',
  //               },
  //               status: 'active',
  //               __typename: 'Company',
  //             },
  //           },
  //         },
  //       },
  //     },
  //     {
  //       request: {
  //         query: GET_ALL_COMPANIES_QUERY,
  //       },
  //       result: {
  //         data: {
  //           allCompanies: [
  //             {
  //               id: 1,
  //               createdAt: Date.now(),
  //               name: 'Company B',
  //               email: 'haha@gmail.com',
  //               logo: 'mydefaultlogo.png',
  //               plan: {
  //                 id: 2,
  //                 name: 'SecondPlan',
  //               },
  //               status: 'active',
  //               __typename: 'Company',
  //             },
  //             {
  //               id: 2,
  //               createdAt: Date.now(),
  //               name: 'Company C',
  //               email: 'haha@gmail.com',
  //               logo: 'mydefaultlogo.png',
  //               plan: {
  //                 id: 2,
  //                 name: 'SecondPlan',
  //               },
  //               status: 'active',
  //               __typename: 'Company',
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       request: {
  //         query: GET_ALL_PLANS_OF_APPLICATION,
  //       },
  //       result: {
  //         data: {
  //           allPlans: [
  //             {
  //               id: 1,
  //               name: 'FirstPlan',
  //               __typename: 'Plan',
  //             },
  //             {
  //               id: 2,
  //               name: 'SecondPlan',
  //               __typename: 'Plan',
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   ];
});
