import _objectWithoutProperties from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';

jest.mock('containers/labeling', function() {
  return function() {
    return function(Component) {
      return function(props) {
        return /* #__PURE__ */ React.createElement(Component, {
          t: function t(k) {
            return k;
          },
          ...props
        });
      };
    };
  };
});
jest.mock('react-i18next', function() {
  return {
    withTranslation: function withTranslation() {
      return function(Component) {
        return function(props) {
          return /* #__PURE__ */ React.createElement(Component, {
            t: function t(k) {
              return k;
            },
            ...props
          });
        };
      };
    }
  };
});

const renderComponentHelper = function renderComponentHelper(Component) {
  return function() {
    const _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const { children } = _ref;
    const props = _objectWithoutProperties(_ref, ['children']);

    const wrapper = shallow(
      /* #__PURE__ */ React.createElement(
        Component,
        {
          t: function t(key) {
            return key;
          },
          ...props
        },
        children
      )
    );
    const component = {
      wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

const mountComponentHelper = function mountComponentHelper(Component) {
  return function() {
    const _ref2 =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const { children } = _ref2;
    const props = _objectWithoutProperties(_ref2, ['children']);

    const wrapper = mount(
      /* #__PURE__ */ React.createElement(
        Component,
        {
          t: function t(key) {
            return key;
          },
          ...props
        },
        children
      )
    );
    const component = {
      wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

const renderComponentWithLabeling = function renderComponentWithLabeling(
  Component
) {
  return function() {
    const _ref3 =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const { children } = _ref3;
    const props = _objectWithoutProperties(_ref3, ['children']);

    const wrapper = shallow(
      /* #__PURE__ */ React.createElement(
        Component,
        {
          t: function t(key) {
            return key;
          },
          ...props
        },
        children
      )
    )
      .first()
      .shallow();
    const component = {
      wrapper,
      instance: wrapper.instance()
    };
    return component;
  };
};

export default renderComponentHelper;
export { renderComponentWithLabeling, mountComponentHelper };
