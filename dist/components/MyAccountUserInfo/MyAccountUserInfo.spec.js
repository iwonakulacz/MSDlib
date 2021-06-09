import React from 'react';
import { shallow } from 'enzyme';
import MyAccountUserInfo from './MyAccountUserInfo';
import { DetailsStyled, PhotoStyled } from './MyAccountUserInfoStyled';
describe('<MyAccountUserInfo/>', function () {
  var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccountUserInfo, null));
  describe('@renders', function () {
    it('should render initial state', function () {
      expect(wrapper.find(DetailsStyled)).toHaveLength(1);
      expect(wrapper.find(PhotoStyled)).toHaveLength(1);
    });
  });
});