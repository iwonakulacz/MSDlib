import React from 'react';
import { shallow } from 'enzyme';
import { ItemsStyled } from './MyAccountMenuStyled';
import { PureMyAccountMenu } from './MyAccountMenu';
describe('<MyAccountMenu/>', function () {
  var wrapper = shallow( /*#__PURE__*/React.createElement(PureMyAccountMenu, null));
  describe('@renders', function () {
    it('should render initial state', function () {
      expect(wrapper.find(ItemsStyled)).toHaveLength(1);
    });
  });
});