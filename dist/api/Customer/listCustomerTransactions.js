import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

var listCustomerTransactions = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var limit,
        offset,
        token,
        decoded,
        customerId,
        url,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = _args.length > 0 && _args[0] !== undefined ? _args[0] : 50;
            offset = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
            token = getData('CLEENG_AUTH_TOKEN') || '';
            decoded = jwtDecode(token);
            customerId = decoded.customerId;
            url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/customers/").concat(customerId, "/transactions?limit=").concat(limit, "&offset=").concat(offset);
            return _context.abrupt("return", fetch(url, {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            }).then(function (res) {
              return res.json();
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function listCustomerTransactions() {
    return _ref.apply(this, arguments);
  };
}();

export default listCustomerTransactions;