import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import MembersList from './MembersList';
import { companyMembers as GET_COMPANY_MEMBERS } from '../../graphql/queries.gql';
import wait from '../../utils/wait';

describe('(Component) MembersList', () => {
  const mocks = [
    {
      request: {
        query: GET_COMPANY_MEMBERS,
        variables: {
          companyId: 1,
        },
      },
      result: {
        data: {
          companyMembers: [
            {
              id: 100,
              roles: ['utm_manager'],
              user: {
                id: 100,
                email: 'dinhphat@gmail.com',
                username: 'dinhphat',
                status: 'active',
                avatar: 'default-avatar_wbcfln.png',
              },
              status: 'pending',
            },
          ],
        },
      },
    },
  ];
  it('renders...', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <MembersList />
      </MockedProvider>
    );

    expect(wrapper).to.have.length(1);
  });

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <MembersList />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
  });

  it('should render data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MembersList companyId={1} />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(wrapper.text()).toContain('dinhphat');
  });

  it('should show error UI when error appears', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_COMPANY_MEMBERS,
        },
        result: {
          data: null,
        },
        error: new Error('aw fuck!'),
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <MembersList />
      </MockedProvider>
    );
    await wait(0); // wait for response

    expect(wrapper.text()).toContain('Error!');
  });
});
