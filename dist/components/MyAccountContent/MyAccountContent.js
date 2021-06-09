import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";

/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { breakPoints } from 'styles/BreakPoints';
import { WrapStyled } from './MyAccountContentStyled';

var MyAccountContent = /*#__PURE__*/function (_Component) {
  _inherits(MyAccountContent, _Component);

  var _super = _createSuper(MyAccountContent);

  function MyAccountContent(props) {
    var _this;

    _classCallCheck(this, MyAccountContent);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(MyAccountContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isMobile = window.innerWidth < breakPoints.small;
      return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(WrapStyled, null, children) : /*#__PURE__*/React.createElement(Scrollbars, {
        style: {
          flexGrow: '1',
          width: 'unset'
        },
        renderTrackHorizontal: function renderTrackHorizontal(props) {
          return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
            style: {
              display: 'none'
            }
          }));
        }
      }, /*#__PURE__*/React.createElement(WrapStyled, null, children)));
    }
  }]);

  return MyAccountContent;
}(Component);

export default MyAccountContent;
MyAccountContent.defaultProps = {
  children: ''
};