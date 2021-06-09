import _toConsumableArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";

/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Loader from 'components/Loader';
import submitConsents from 'api/Customer/submitConsents';
import labeling from 'containers/labeling';
import { ButtonStyled, CheckboxStyled, CardStyled, ButtonWrapperStyled } from './MyAccountConsentsStyled';

var MyAccountConsents = /*#__PURE__*/function (_Component) {
  _inherits(MyAccountConsents, _Component);

  var _super = _createSuper(MyAccountConsents);

  function MyAccountConsents(props) {
    var _this;

    _classCallCheck(this, MyAccountConsents);

    _this = _super.call(this, props);

    _this.toggleState = function (state) {
      return state === 'accepted' ? 'declined' : 'accepted';
    };

    _this.state = {
      updatedConsents: [],
      isSectionDisabled: true,
      isLoading: false,
      isSubmittingPending: false,
      showButtonToUpdate: true
    };
    return _this;
  }

  _createClass(MyAccountConsents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var consents = this.props.consents;

      if (consents.length !== 0) {
        this.saveConsentsInState();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var consents = this.props.consents;

      if (prevProps.consents !== consents) {
        this.saveConsentsInState();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, isConsentDisabled, item) {
      var _this2 = this;

      var _this$props = this.props,
          showConsentsOnly = _this$props.showConsentsOnly,
          saveConsents = _this$props.saveConsents;
      if (e.target.tagName.toLowerCase() === 'a') return; // enable to open link

      if (isConsentDisabled || !showConsentsOnly && item.required) return;
      var updatedConsents = this.state.updatedConsents;
      var itemIndex = updatedConsents.findIndex(function (el) {
        return el.name === item.name;
      });
      this.setState(function (prevState) {
        var copyConsentObj = _objectSpread({}, prevState.updatedConsents[itemIndex]);

        copyConsentObj.state = _this2.toggleState(copyConsentObj.state);

        var stateCopy = _toConsumableArray(prevState.updatedConsents);

        stateCopy[itemIndex] = copyConsentObj;

        if (showConsentsOnly) {
          saveConsents(stateCopy);
        }

        return _objectSpread(_objectSpread({}, prevState), {}, {
          updatedConsents: stateCopy
        });
      });
    }
  }, {
    key: "saveConsentsInState",
    value: function saveConsentsInState() {
      var consents = this.props.consents;
      var showButtonToUpdate = consents.find(function (el) {
        return !el.required;
      });
      this.setState({
        updatedConsents: consents,
        showButtonToUpdate: !!showButtonToUpdate
      });
    }
  }, {
    key: "updateConsents",
    value: function updateConsents() {
      var _this3 = this;

      var updatedConsents = this.state.updatedConsents;
      var setConsents = this.props.setConsents;
      var payload = updatedConsents.map(function (item) {
        return {
          name: item.name,
          version: item.newestVersion,
          state: item.state
        };
      });
      this.setState({
        isSubmittingPending: true
      });
      submitConsents([], [], payload).then(function () {
        _this3.setState({
          isSectionDisabled: true,
          isSubmittingPending: false
        });

        setConsents(updatedConsents);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          t = _this$props2.t,
          consents = _this$props2.consents,
          isLoading = _this$props2.isLoading,
          showConsentsOnly = _this$props2.showConsentsOnly;
      var _this$state = this.state,
          updatedConsents = _this$state.updatedConsents,
          isSectionDisabled = _this$state.isSectionDisabled,
          isSubmittingPending = _this$state.isSubmittingPending,
          showButtonToUpdate = _this$state.showButtonToUpdate;
      var sortedConsents = updatedConsents.slice().sort(function (a, b) {
        return a.required === b.required ? 0 : a.required ? -1 : 1;
      });
      return isLoading ? /*#__PURE__*/React.createElement(Loader, {
        isMyAccount: true
      }) : /*#__PURE__*/React.createElement(CardStyled, {
        showConsentsOnly: showConsentsOnly,
        withBorder: true
      }, sortedConsents.map(function (item) {
        return /*#__PURE__*/React.createElement(CheckboxStyled, {
          isMyAccount: true,
          onClickFn: function onClickFn(e, isConsentDisabled) {
            return _this4.handleClick(e, isConsentDisabled, item);
          },
          checked: item.state === 'accepted',
          key: item.name,
          disabled: (isSectionDisabled || item.required) && !showConsentsOnly,
          required: item.required,
          hide: showConsentsOnly && !item.required
        }, t(item.label));
      }), !showConsentsOnly && /*#__PURE__*/React.createElement(React.Fragment, null, showButtonToUpdate && /*#__PURE__*/React.createElement(ButtonWrapperStyled, null, isSectionDisabled ? /*#__PURE__*/React.createElement(ButtonStyled, {
        onClickFn: function onClickFn() {
          return _this4.setState({
            isSectionDisabled: false
          });
        },
        width: "100%"
      }, t('Update Terms')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonStyled, {
        theme: "simple",
        onClickFn: function onClickFn() {
          return _this4.setState({
            isSectionDisabled: true,
            updatedConsents: consents
          });
        }
      }, t('Cancel')), /*#__PURE__*/React.createElement(ButtonStyled, {
        theme: "confirm",
        onClickFn: function onClickFn() {
          return _this4.updateConsents();
        },
        disabled: isSubmittingPending
      }, isSubmittingPending && /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) || t('Save'))))));
    }
  }]);

  return MyAccountConsents;
}(Component);

MyAccountConsents.defaultProps = {
  consents: [],
  isLoading: false,
  showConsentsOnly: false,
  saveConsents: function saveConsents() {},
  t: function t(k) {
    return k;
  }
};
export { MyAccountConsents as PureMyAccountConsents };
export default withTranslation()(labeling()(MyAccountConsents));