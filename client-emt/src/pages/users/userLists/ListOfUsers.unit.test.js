import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import ListOfUsers from './ListOfUsers';
import { getAllUsers as GET_ALL_USERS_QUERY } from '../../../graphql/queries.gql';
import wait from '../../../utils/wait';

describe('(Component) UsersList', () => {
  const mocks = [
    {
      request: {
        query: GET_ALL_USERS_QUERY,
      },
      result: {
        data: {
          users: [
            {
              avatar: 'default-avatar_wbcfln.png',
              id: '52',
              username: 'hahahahahah',
              email: 'hahha@gmail.com',
            },
          ],
        },
      },
    },
  ];
  it('renders...', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ListOfUsers />
      </MockedProvider>
    );

    expect(wrapper).to.have.length(1);
  });

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ListOfUsers />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
  });

  it('should render data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListOfUsers />
      </MockedProvider>
    );
    await wait(0); // wait for response
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('should show error UI when error appears', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_ALL_USERS_QUERY,
        },
        result: {
          data: null,
        },
        error: new Error('aw fuck!'),
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ListOfUsers />
      </MockedProvider>
    );
    await wait(0); // wait for response

    expect(wrapper.text()).toContain('Error!');
  });
});
