import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY } from '../../graphql/queries.gql';
import wait from '../../utils/wait';
import CompanyList from './CompanyList';

describe('(Component) CompanyList', () => {
  const mocks = [
    {
      request: {
        query: GET_ALL_COMPANIES_QUERY,
      },
      result: {
        data: {
          allCompanies: [
            {
              logo: 'default-avatar_wbcfln.png',
              id: '52',
              name: 'hahahahahah',
              description: 'quat',
              status: 'active',
              plan: {
                id: '1',
                name: 'plan 1',
                __typename: 'Plan',
              },
              email: 'company@gmail.com',
              createdAt: Date.now(),
              __typename: 'Company',
            },
          ],
        },
      },
    },
  ];
  it('renders...', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]}>
        <CompanyList />
      </MockedProvider>
    );

    expect(wrapper).to.have.length(1);
  });

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]}>
        <CompanyList />
      </MockedProvider>
    );

    expect(
      wrapper
        .find('Table')
        .first()
        .props().loading
    ).toBe(true);
  });

  it('should render data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CompanyList />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('should show error UI when error appears', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_ALL_COMPANIES_QUERY,
        },
        result: {
          data: null,
        },
        error: new Error('aw fuck!'),
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={errorMocks}>
        <CompanyList />
      </MockedProvider>
    );
    await wait(0); // wait for response

    expect(wrapper.text()).toContain('Error!');
  });
});
