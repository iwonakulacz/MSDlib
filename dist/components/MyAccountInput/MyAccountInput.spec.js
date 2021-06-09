import React from 'react';
import { shallow } from 'enzyme';
import MyAccountInput from './MyAccountInput';
import { WrapStyled } from './MyAccountInputStyled';
describe('<MyAccountInput/>', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccountInput, null));
      expect(wrapper.find(WrapStyled)).toHaveLength(1);
    });
  });
});