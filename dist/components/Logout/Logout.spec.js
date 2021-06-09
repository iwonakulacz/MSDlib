import { mount } from 'enzyme';
import React from 'react';
import Auth from 'services/auth';
import { PureLogout } from './Logout';
describe('<Logout/>', function () {
  it('should call logout fn on click', function () {
    Auth.logout = jest.fn();
    var wrapper = mount( /*#__PURE__*/React.createElement(PureLogout, null));
    wrapper.find('button').simulate('click');
    expect(Auth.logout).toHaveBeenCalledTimes(1);
  });
});