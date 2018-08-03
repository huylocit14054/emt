import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { Table } from 'antd';
import ListOfService from './ListOfService';
import { getAllServices as GET_ALL_SERVICES } from '../graphql/queries.gql';
import wait from '../../../utils/wait';

describe('(Component) Servicelist', () => {
  const mocks = [
    {
      request: {
        query: GET_ALL_SERVICES,
      },
      result: {
        data: {
          services: [
            {
              id: 1,
              name: 'utm',
              description: 'utm service',
              createdAt: Date.now(),
              __typename: 'Service',
            },
            {
              id: 2,
              name: 'oms',
              description: 'oms service',
              createdAt: Date.now(),
              __typename: 'Service',
            },
          ],
        },
      },
    },
  ];
  it('renders...', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ListOfService />
      </MockedProvider>
    );
    expect(wrapper).to.have.length(1);
  });

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ListOfService />
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
        <ListOfService />
      </MockedProvider>
    );
    await wait(0); // wait for responses
    expect(wrapper.text()).toMatchSnapshot();
  });
});
