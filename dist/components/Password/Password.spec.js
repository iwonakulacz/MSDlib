/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { PurePassword } from './Password';
import { WrapStyled } from './PasswordStyled';
jest.mock('containers/labeling', function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, Object.assign({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/React.createElement(Component, Object.assign({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
describe('<Password/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('@renders', function () {
    var showInnerPopupMock = jest.fn();
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(PurePassword, {
        showInnerPopup: showInnerPopupMock
      }));
      expect(wrapper.find(WrapStyled)).toHaveLength(1);
    });
    it('should call showPopup on button click', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PurePassword, {
        showInnerPopup: showInnerPopupMock
      }));
      wrapper.find('button').simulate('click');
      expect(showInnerPopupMock).toHaveBeenCalledTimes(1);
    });
  });
});