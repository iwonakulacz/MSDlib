/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { PureSubscriptionManagement as SubscriptionManagement } from './SubscriptionManagement';
import { ManageButtonWrapStyled, SubscriptionActionsStyled } from './SubscriptionManagementStyled';
describe('<MessageBox/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(SubscriptionManagement, null));
      expect(wrapper.find(ManageButtonWrapStyled)).toHaveLength(1);
      expect(wrapper.find(SubscriptionActionsStyled)).toHaveLength(1);
    });
    it('should render children when isOpened prop is true', function () {
      // eslint-disable-next-line react/jsx-boolean-value
      var wrapper = shallow( /*#__PURE__*/React.createElement(SubscriptionManagement, {
        isOpened: true
      }));
      expect(wrapper.find(SubscriptionActionsStyled)).toHaveLength(1);
    });
  });
});