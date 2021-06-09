import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import { getData } from 'util/appConfigHelper';

var getPaymentMethods = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var token;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = getData('CLEENG_AUTH_TOKEN') || '';
            return _context.abrupt("return", fetch("".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/payment-methods"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }).then(function (res) {
              return res.json();
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPaymentMethods() {
    return _ref.apply(this, arguments);
  };
}();

export default getPaymentMethods;