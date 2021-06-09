import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";

/* eslint-disable no-debugger */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import submitConsents from 'api/Customer/submitConsents';
import getCustomerConsents from 'api/Customer/getCustomerConsents';
import MyAccountConsents from 'components/MyAccountConsents';
import { WrapperStyled, ContentStyled, TitleStyled, TextStyled, ImageStyled, ButtonWrapperStyled, ButtonStyled, HeaderStyled, DotStyled, HeaderTitleStyled, DotsWrapperStyled, InnerWrapperStyled } from './PopupStyled';
import popupData from './Popup.const';

var Popup = /*#__PURE__*/function (_Component) {
  _inherits(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _super.call(this, props);

    _this.renderNextStep = function () {
      _this.setState(function (prevState) {
        return {
          step: prevState.step + 1
        };
      });
    };

    _this.handleSubmitConsents = function () {
      var updatedConsents = _this.state.updatedConsents;
      var setConsents = _this.props.setConsents;
      var payload = updatedConsents.map(function (item) {
        return {
          name: item.name,
          version: item.newestVersion,
          state: item.state
        };
      });

      _this.setState({
        isLoading: true
      });

      submitConsents([], [], payload).then(function () {
        getCustomerConsents().then(function (resp) {
          setConsents(resp.responseData.consents);
        });
      });
    };

    _this.state = {
      step: 1,
      updatedConsents: [],
      isLoading: false,
      allowSubmitConsents: false
    };
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var consents = this.props.consents;
      this.setState({
        updatedConsents: consents
      });
      this.checkAccess(consents);
    }
  }, {
    key: "checkAccess",
    value: function checkAccess(items) {
      var notCheckedTerm = items.find(function (item) {
        return item.required && item.state === 'declined';
      });

      if (notCheckedTerm) {
        this.setState({
          allowSubmitConsents: false
        });
      } else {
        this.setState({
          allowSubmitConsents: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          popupType = _this$props.popupType,
          consents = _this$props.consents,
          setConsents = _this$props.setConsents,
          hidePopup = _this$props.hidePopup,
          t = _this$props.t;
      var _this$state = this.state,
          step = _this$state.step,
          isLoading = _this$state.isLoading,
          allowSubmitConsents = _this$state.allowSubmitConsents;
      var stepData = popupData[popupType].steps[step - 1];
      var steps = popupData[popupType].steps;
      return /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(HeaderStyled, null, /*#__PURE__*/React.createElement(DotsWrapperStyled, {
        currentStep: step
      }, steps.length > 1 && steps.map(function (item) {
        return /*#__PURE__*/React.createElement(DotStyled, {
          key: item.title
        });
      })), /*#__PURE__*/React.createElement(HeaderTitleStyled, null, t(stepData.headerTitle))), /*#__PURE__*/React.createElement(ContentStyled, {
        step: consents.length ? step : 1
      }, stepData.icon && /*#__PURE__*/React.createElement(ImageStyled, {
        src: stepData.icon
      }), /*#__PURE__*/React.createElement(TitleStyled, {
        step: step
      }, t(stepData.title)), /*#__PURE__*/React.createElement(TextStyled, {
        step: step
      }, t(stepData.text)), step === 2 && consents && /*#__PURE__*/React.createElement(MyAccountConsents, {
        consents: consents,
        showConsentsOnly: true,
        saveConsents: function saveConsents(items) {
          _this2.setState({
            updatedConsents: items
          });

          _this2.checkAccess(items);
        },
        setConsents: setConsents
      })), /*#__PURE__*/React.createElement(ButtonWrapperStyled, null, /*#__PURE__*/React.createElement(InnerWrapperStyled, null, stepData.undoButton && /*#__PURE__*/React.createElement(ButtonStyled, {
        onClickFn: hidePopup,
        theme: "secondary",
        width: "auto"
      }, t(stepData.undoButton)), /*#__PURE__*/React.createElement(ButtonStyled, {
        onClickFn: this[stepData.buttonAction],
        disabled: step === 2 && !allowSubmitConsents,
        width: "auto"
      }, isLoading && /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) || t(stepData.buttonText)))), /*#__PURE__*/React.createElement(Footer, {
        isCheckout: false
      }));
    }
  }]);

  return Popup;
}(Component);

Popup.defaultProps = {
  popupType: '',
  setConsents: function setConsents() {},
  consents: [],
  t: function t(k) {
    return k;
  }
};
export { Popup as PurePopup };
export default withTranslation()(labeling()(Popup));