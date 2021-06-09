import _objectWithoutProperties from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
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

var renderComponentHelper = function renderComponentHelper(Component) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    var wrapper = shallow( /*#__PURE__*/React.createElement(Component, Object.assign({
      t: function t(key) {
        return key;
      }
    }, props), children));
    var component = {
      wrapper: wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

var mountComponentHelper = function mountComponentHelper(Component) {
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ["children"]);

    var wrapper = mount( /*#__PURE__*/React.createElement(Component, Object.assign({
      t: function t(key) {
        return key;
      }
    }, props), children));
    var component = {
      wrapper: wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

var renderComponentWithLabeling = function renderComponentWithLabeling(Component) {
  return function () {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    var wrapper = shallow( /*#__PURE__*/React.createElement(Component, Object.assign({
      t: function t(key) {
        return key;
      }
    }, props), children)).first().shallow();
    var component = {
      wrapper: wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

export default renderComponentHelper;
export { renderComponentWithLabeling, mountComponentHelper };