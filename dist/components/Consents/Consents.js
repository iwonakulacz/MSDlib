import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React from 'react';
import Checkbox from 'components/Checkbox';
import getConsentsRequest from 'api/Publisher/getConsents';
import Loader from 'components/Loader';
import { ConsentsWrapperStyled, ConsentsErrorStyled, InvisibleLegend, GeneralErrorStyled } from './ConsentsStyled';
var regexHrefOpenTag = new RegExp(/<a(.|\n)*?>/);
var regexHrefCloseTag = new RegExp(/<\/a(.|\n)*?>/);
export var Consents = /*#__PURE__*/function (_React$Component) {
  _inherits(Consents, _React$Component);

  var _super = _createSuper(Consents);

  function Consents(props) {
    var _this;

    _classCallCheck(this, Consents);

    _this = _super.call(this, props);

    _this.getConsents = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(publisherId) {
        var consentsIncome, consentsDetails, labels, initArray, disabledRegisterButton;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getConsentsRequest(publisherId);

              case 3:
                consentsIncome = _context.sent;

                if (consentsIncome.responseData && consentsIncome.responseData.consents) {
                  consentsDetails = consentsIncome.responseData.consents.map(function (element) {
                    return {
                      name: element.name,
                      version: element.version,
                      required: element.required
                    };
                  });
                  labels = consentsIncome.responseData.consents.map(function (element) {
                    return _this.translateConsents(element.label);
                  });
                  initArray = new Array(consentsDetails.length).fill(false);

                  _this.setState({
                    consentDefinitions: consentsDetails,
                    consentLoaded: true,
                    consentsLabels: labels,
                    checked: initArray
                  });
                } else if (consentsIncome.errors.includes('Invalid param publisherId')) {
                  disabledRegisterButton = _this.props.disabledRegisterButton;

                  _this.setState({
                    consentLoaded: true,
                    generalError: 'noPublisherId'
                  });

                  disabledRegisterButton();
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 10:
                return _context.abrupt("return", false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.changeConsentState = function (consentID) {
      var _this$state = _this.state,
          consentDefinitions = _this$state.consentDefinitions,
          checked = _this$state.checked;

      if (consentDefinitions.length > 0) {
        checked[consentID] = !checked[consentID];

        _this.setState({
          checked: checked
        });
      }

      _this.validateConsents();
    };

    _this.validateConsents = function () {
      var onChangeFn = _this.props.onChangeFn;
      var _this$state2 = _this.state,
          consentDefinitions = _this$state2.consentDefinitions,
          checked = _this$state2.checked;
      onChangeFn(checked, consentDefinitions);
    };

    _this.translateConsents = function (consentContent) {
      var t = _this.props.t;
      var openTagContent = regexHrefOpenTag.exec(consentContent);
      var closeTagContent = regexHrefCloseTag.exec(consentContent);

      if (openTagContent) {
        var modifiedConsentContent = consentContent.replace(regexHrefOpenTag, '{{htmltag}}');
        modifiedConsentContent = modifiedConsentContent.replace(regexHrefCloseTag, '{{endhtmltag}}');
        return "".concat(t(modifiedConsentContent, {
          htmltag: openTagContent[0],
          endhtmltag: closeTagContent[0]
        }));
      }

      return t(consentContent);
    };

    _this.state = {
      consentDefinitions: [],
      checked: [],
      consentsLabels: [],
      consentLoaded: false,
      generalError: ''
    };
    return _this;
  }

  _createClass(Consents, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var publisherId = this.props.publisherId;

      if (publisherId) {
        this.getConsents(publisherId).then(function () {});
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var publisherId = this.props.publisherId;

      if (prevProps.publisherId !== publisherId) {
        this.getConsents(publisherId).then(function () {
          _this2.validateConsents();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          checked = _this$state3.checked,
          consentsLabels = _this$state3.consentsLabels,
          consentDefinitions = _this$state3.consentDefinitions,
          consentLoaded = _this$state3.consentLoaded,
          generalError = _this$state3.generalError;
      var _this$props = this.props,
          error = _this$props.error,
          t = _this$props.t;

      if (generalError === 'noPublisherId') {
        return /*#__PURE__*/React.createElement(GeneralErrorStyled, null, t('Unable to fetch terms & conditions. Publisher is not recognized'));
      }

      return /*#__PURE__*/React.createElement(ConsentsWrapperStyled, null, !consentLoaded ? /*#__PURE__*/React.createElement(Loader, null) : /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement(InvisibleLegend, null, "Consents "), consentDefinitions.map(function (consent, index) {
        return /*#__PURE__*/React.createElement(Checkbox, {
          onClickFn: function onClickFn() {
            return _this3.changeConsentState(index);
          },
          checked: checked[index],
          error: error,
          key: String(index),
          required: consent.required && !checked[index]
        }, consentsLabels[index]);
      })), error && /*#__PURE__*/React.createElement(ConsentsErrorStyled, null, error));
    }
  }]);

  return Consents;
}(React.Component);
Consents.defaultProps = {
  publisherId: '',
  error: '',
  onChangeFn: function onChangeFn() {},
  disabledRegisterButton: function disabledRegisterButton() {},
  t: function t(k) {
    return k;
  }
};
export default Consents;