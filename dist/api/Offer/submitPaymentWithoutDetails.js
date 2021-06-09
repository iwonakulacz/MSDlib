import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import { getData } from 'util/appConfigHelper';

var submitPaymentWithoutDetails = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var token, orderId, status, paymentOperation, url, res;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = getData('CLEENG_AUTH_TOKEN') || '';
            orderId = parseInt(getData('CLEENG_ORDER_ID') || '0', 10);
            status = 'captured';
            paymentOperation = 'initial-payment';
            url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/payments");
            _context.prev = 5;
            _context.next = 8;
            return fetch(url, {
              method: 'POST',
              body: JSON.stringify({
                orderId: orderId,
                status: status,
                paymentOperation: paymentOperation
              }),
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              }
            });

          case 8:
            res = _context.sent;
            return _context.abrupt("return", res.json());

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12]]);
  }));

  return function submitPaymentWithoutDetails() {
    return _ref.apply(this, arguments);
  };
}();

export default submitPaymentWithoutDetails;