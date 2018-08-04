import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '../../../node_modules/react-apollo/test-utils';
import MemberInvitationInput from './MemberInvitationInput';
import { addMemberToCompany as ADD_MEMBER_TO_COMPANY } from './mutations.gql';
import {
  companyMembers as GET_COMPANY_MEMBERS,
  getCompany as GET_COMPANY_BY_ID,
} from '../../graphql/queries.gql';
import wait from '../../utils/wait';

describe('(Component) MemberInvitationInput', () => {
  it('should render without errors', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemberInvitationInput />
      </MockedProvider>
    );
    expect(wrapper).to.have.length(1);
  });

  it('should render loading state if user submit inputs and success box appear', async () => {
    const mocks = [
      {
        request: {
          query: GET_COMPANY_BY_ID,
          variables: {
            companyId: 1,
          },
        },
        result: {
          data: {
            company: {
              id: 1,
              logo: 'default-avatar_wbcfln.png',
              name: 'company',
              currentUserAsMember: {
                id: 1,
                roles: [],
              },
              services: [
                {
                  name: 'utm',
                },
              ],
            },
          },
        },
      },
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
      {
        request: {
          query: ADD_MEMBER_TO_COMPANY,
          variables: {
            input: {
              email: 'dinhphat@outlook.com',
              roles: ['utm_manager', 'utm_member'],
              companyId: 1,
            },
          },
        },
        result: {
          data: {
            addMemberToCompany: {
              addedMember: {
                id: '100',
                roles: [],
                user: {
                  id: '100',
                  email: 'dinhphat@outlook.com',
                  username: 'dinhphat',
                  status: 'active',
                  avatar: 'default-avatar_wbcfln.png',
                },
                status: 'pending',
              },
            },
          },
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemberInvitationInput companyId={1} />
      </MockedProvider>
    );

    await wait(0);

    // fake inputs from user
    wrapper.find('input[placeholder="Email"]').simulate('change', {
      target: {
        value: 'dinhphat@outlook.com',
      },
    });

    // wrapper.find('.rc-select')[0].simulate('click');
    wrapper.find('.ant-select-selection__rendered').simulate('click');
    wrapper
      .find('li[role="option"]')
      .first()
      .simulate('click');
    wrapper
      .find('li[role="option"]')
      .at(1)
      .simulate('click');

    // console.log(wrapper.find('.ant-select-selection__rendered'));

    // Before clicking submit button, the prop spinning is false
    expect(wrapper.find('Button').prop('loading')).toBe(false);

    // find the button and simulate click
    wrapper.find('Button').simulate('submit');

    // After clicking submit button, the prop spinning now set to true
    expect(wrapper.find('Button').prop('loading')).toBe(true);
    console.log(wrapper.find('.ant-message-notice-content'));
  });
});
