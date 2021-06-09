import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import { sendMessage } from 'util/appConfigHelper';

var loginCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(email, password, loginBy) {
    var url, resp, json;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/auths");
            _context.prev = 1;
            _context.next = 4;
            return fetch(url, {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(_objectSpread({
                email: email,
                password: password
              }, loginBy))
            });

          case 4:
            resp = _context.sent;
            _context.next = 7;
            return resp.json();

          case 7:
            json = _context.sent;
            sendMessage(_objectSpread({}, json.responseData));
            return _context.abrupt("return", _objectSpread({
              status: resp.status
            }, json));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function loginCustomer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

export default loginCustomer;