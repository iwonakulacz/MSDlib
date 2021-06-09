import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { getData } from 'util/appConfigHelper';
import resetPassword from 'api/Auth/resetPassword';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Auth from 'services/auth';
import InnerPopupWrapper from 'components/InnerPopupWrapper';
import { ContentStyled, TitleStyled, TextStyled, ButtonWrapperStyled, MailStyled } from 'components/InnerPopupWrapper/InnerPopupWrapperStyled';
import data from './EditPassword.const';

var EditPassword = /*#__PURE__*/function (_PureComponent) {
  _inherits(EditPassword, _PureComponent);

  var _super = _createSuper(EditPassword);

  function EditPassword(props) {
    var _this;

    _classCallCheck(this, EditPassword);

    _this = _super.call(this, props);

    _this.renderNextStep = function () {
      _this.setState(function (prevState) {
        return {
          step: prevState.step + 1
        };
      });
    };

    _this.logout = function () {
      var hideInnerPopup = _this.props.hideInnerPopup;
      hideInnerPopup();
      Auth.logout(true);
    };

    _this.resetPassword = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var customerEmail, publisherId, response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              customerEmail = getData('CLEENG_CUSTOMER_EMAIL');
              publisherId = getData('CLEENG_PUBLISHER_ID');

              _this.setState({
                isLoading: true
              });

              _context.prev = 3;
              _context.next = 6;
              return resetPassword('', customerEmail, publisherId);

            case 6:
              response = _context.sent;

              if (!response.errors.length) {
                _this.renderNextStep();

                _this.setState({
                  isLoading: false
                });
              } else {
                _this.setState({
                  isLoading: false,
                  isError: true
                });
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);

              _this.setState({
                isLoading: false,
                isError: true
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));
    _this.state = {
      step: 1,
      isLoading: false,
      isError: false
    };
    return _this;
  }

  _createClass(EditPassword, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          step = _this$state.step,
          isLoading = _this$state.isLoading,
          isError = _this$state.isError;
      var _this$props = this.props,
          t = _this$props.t,
          hideInnerPopup = _this$props.hideInnerPopup;
      var steps = data.steps;
      var stepData = steps[step - 1];
      var customerEmail = getData('CLEENG_CUSTOMER_EMAIL');
      return /*#__PURE__*/React.createElement(InnerPopupWrapper, {
        steps: 2,
        popupTitle: "Edit Password",
        isError: isError,
        currentStep: step
      }, /*#__PURE__*/React.createElement(ContentStyled, null, /*#__PURE__*/React.createElement(TitleStyled, {
        step: step
      }, t(stepData.title)), /*#__PURE__*/React.createElement(TextStyled, {
        step: step
      }, t(stepData.text), step === 1 && /*#__PURE__*/React.createElement(MailStyled, null, customerEmail), t(stepData.secondText) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), t(stepData.secondText)))), /*#__PURE__*/React.createElement(ButtonWrapperStyled, null, stepData.undoButton && /*#__PURE__*/React.createElement(Button, {
        theme: "simple",
        onClickFn: function onClickFn() {
          return hideInnerPopup();
        }
      }, t(stepData.undoButton)), /*#__PURE__*/React.createElement(Button, {
        theme: "confirm",
        onClickFn: this[stepData.buttonAction]
      }, isLoading && /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) || t(stepData.buttonText))));
    }
  }]);

  return EditPassword;
}(PureComponent);

EditPassword.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { EditPassword as PureEditPassword };
export default withTranslation()(labeling()(EditPassword));