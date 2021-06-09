import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

var submitConsents = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(consents, consentDefinitions) {
    var payload,
        token,
        _jwtDecode,
        customerId,
        url,
        consentsPayload,
        res,
        json,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            token = getData('CLEENG_AUTH_TOKEN') || '';
            _jwtDecode = jwtDecode(token), customerId = _jwtDecode.customerId;
            url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/customers/").concat(customerId, "/consents");

            if (!payload) {
              consentsPayload = consentDefinitions.map(function (consentDefinition, index) {
                return {
                  name: consentDefinition.name,
                  version: consentDefinition.version,
                  state: consents[index] ? 'accepted' : 'declined'
                };
              });
            } else {
              consentsPayload = payload;
            }

            _context.prev = 5;
            _context.next = 8;
            return fetch(url, {
              method: 'PUT',
              body: JSON.stringify({
                consents: consentsPayload
              }),
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              }
            });

          case 8:
            res = _context.sent;
            _context.next = 11;
            return res.json();

          case 11:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", {
              errors: [_context.t0.message]
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function submitConsents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

export default submitConsents;