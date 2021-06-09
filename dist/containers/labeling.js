import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React from 'react';
/* eslint-disable react/prop-types  */

/* eslint-disable react/jsx-props-no-spreading */

export default function customLabeling() {
  // ...and returns another component...
  return function (WrappedComponent) {
    return /*#__PURE__*/function (_React$Component) {
      _inherits(_class, _React$Component);

      var _super = _createSuper(_class);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _super.call(this, props);
        _this.state = {
          dataLoaded: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.addTranslations();
        }
      }, {
        key: "addTranslations",
        value: function () {
          var _addTranslations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var i18n, language, data;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    i18n = this.props.i18n;

                    if (!(typeof i18n === 'undefined')) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 3:
                    language = i18n.language || 'en';

                    if (i18n.hasResourceBundle(language, 'translation')) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 7;
                    return fetch("/locales/".concat(language, "/translations.json")).then(function (response) {
                      return response.json();
                    }).catch(function () {});

                  case 7:
                    data = _context.sent;
                    i18n.addResourceBundle(language, 'translation', data, true, true);

                  case 9:
                    this.setState({
                      dataLoaded: true
                    });
                    return _context.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function addTranslations() {
            return _addTranslations.apply(this, arguments);
          }

          return addTranslations;
        }()
      }, {
        key: "render",
        value: function render() {
          var dataLoaded = this.state.dataLoaded; // ... and renders the wrapped component with the fresh data!
          // Notice that we pass through any additional props

          return dataLoaded && /*#__PURE__*/React.createElement(WrappedComponent, this.props);
        }
      }]);

      return _class;
    }(React.Component);
  };
}