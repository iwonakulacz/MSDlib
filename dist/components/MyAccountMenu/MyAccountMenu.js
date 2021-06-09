import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { MenuItems } from './MyAccountMenu.const';
import { WrapStyled, ItemsStyled, ItemWrapStyled, ItemLinkStyled, ItemIconWrapStyled, ItemLabelStyled } from './MyAccountMenuStyled';

var MyAccountMenu = /*#__PURE__*/function (_Component) {
  _inherits(MyAccountMenu, _Component);

  var _super = _createSuper(MyAccountMenu);

  function MyAccountMenu(props) {
    var _this;

    _classCallCheck(this, MyAccountMenu);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(MyAccountMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.routeMatch.url,
          t = _this$props.t;
      return /*#__PURE__*/React.createElement(WrapStyled, null, /*#__PURE__*/React.createElement(ItemsStyled, null, MenuItems.map(function (menuItem) {
        var IconComponent = menuItem.icon ? menuItem.icon : React.Fragment;
        return /*#__PURE__*/React.createElement(ItemWrapStyled, {
          key: menuItem.label,
          visibleOnDesktop: menuItem.visibleOnDesktop
        }, /*#__PURE__*/React.createElement(ItemLinkStyled, {
          to: "".concat(url, "/").concat(menuItem.link)
        }, /*#__PURE__*/React.createElement(ItemIconWrapStyled, null, /*#__PURE__*/React.createElement(IconComponent, null)), /*#__PURE__*/React.createElement(ItemLabelStyled, null, t(menuItem.label))));
      })));
    }
  }]);

  return MyAccountMenu;
}(Component);

MyAccountMenu.defaultProps = {
  routeMatch: {},
  t: function t(k) {
    return k;
  }
};
export { MyAccountMenu as PureMyAccountMenu };
export default withTranslation()(labeling()(MyAccountMenu));