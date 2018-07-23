import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '../../../node_modules/react-apollo/test-utils';
import LoginBox from './LoginBox';
import { loginUser as LOGIN_USER_MUTATION } from '../../graphql/mutations.gql';
import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../../graphql/queries.gql';
import wait from '../../utils/wait';
import { AUTH_TOKEN } from '../../constants';

describe('(Component) LoginBox', () => {
  it('should render without errors', () => {
    const wrapper = mount(
      <MemoryRouter>
        <MockedProvider mocks={[]} addTypename={false}>
          <LoginBox />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(wrapper).to.have.length(1);
  });
  it('should save the token after successfully signing in', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER_MUTATION,
          variables: {
            input: {
              username: 'quangnhat',
              password: '123456',
            },
          },
        },
        result: {
          data: {
            loginUser: {
              token: 'this is token',
            },
          },
        },
      },
      {
        request: {
          query: GET_CURRENT_USER_QUERY,
        },
        result: {
          data: {
            currentUser: {
              id: '-1',
              username: 'Nhat',
              role: 'my role',
              avatar: 'my avatar',
            },
          },
        },
      },
    ];

    const wrapper = mount(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LoginBox />
        </MockedProvider>
      </MemoryRouter>
    );

    // fake inputs from user
    wrapper.find('input[placeholder="Username or Email"]').simulate('change', {
      target: {
        value: 'quangnhat',
      },
    });

    wrapper.find('input[type="password"]').simulate('change', {
      target: {
        value: '123456',
      },
    });

    // find the button and simulate click
    wrapper.find('Form').simulate('submit');
    await wait(0);

    // With the returned token, we expect it to be saved to localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith(AUTH_TOKEN, 'this is token');
  });

  it('should render loading state if user submit inputs', () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER_MUTATION,
          variables: {
            input: {
              username: 'quangnhat',
              password: '123456',
            },
          },
        },
        result: {
          data: {
            loginUser: {
              token: 'this is token',
            },
          },
        },
      },
    ];

    const wrapper = mount(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LoginBox />
        </MockedProvider>
      </MemoryRouter>
    );

    // fake inputs from user
    wrapper.find('input[placeholder="Username or Email"]').simulate('change', {
      target: {
        value: 'quangnhat',
      },
    });

    wrapper.find('input[type="password"]').simulate('change', {
      target: {
        value: '123456',
      },
    });

    // Before clicking submit button, the prop spinning is false
    expect(wrapper.find('Spin').prop('spinning')).toBe(false);

    // find the button and simulate click
    wrapper.find('button').simulate('submit');

    // After clicking submit button, the prop spinning now set to true
    expect(wrapper.find('Spin').prop('spinning')).toBe(true);
  });
});
