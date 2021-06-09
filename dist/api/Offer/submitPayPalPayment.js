import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import { getData } from 'util/appConfigHelper';

const submitPayPalPayment = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
      let token;
      let orderId;
      let url;
      let redirectUrls;
      let res;
      return _regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                token = getData('CLEENG_AUTH_TOKEN') || '';
                orderId = parseInt(getData('CLEENG_ORDER_ID') || '0', 10);
                url = ''.concat(
                  ENVIRONMENT_CONFIGURATION.API_URL,
                  '/connectors/paypal/v1/tokens'
                );
                redirectUrls = {
                  successUrl:
                    getData('CLEENG_PP_SUCCESS') ||
                    ''.concat(window.location.origin, '/thankyou'),
                  cancelUrl:
                    getData('CLEENG_PP_CANCEL') ||
                    ''.concat(window.location.origin, '/offer'),
                  errorUrl:
                    getData('CLEENG_PP_ERROR') ||
                    ''.concat(window.location.origin, '/offer')
                };
                _context.prev = 4;
                _context.next = 7;
                return fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(
                    _objectSpread(
                      {
                        orderId
                      },
                      redirectUrls
                    )
                  ),
                  headers: {
                    Authorization: 'Bearer '.concat(token),
                    'Content-Type': 'application/json'
                  }
                });

              case 7:
                res = _context.sent;
                return _context.abrupt('return', res.json());

              case 11:
                _context.prev = 11;
                _context.t0 = _context.catch(4);
                return _context.abrupt('return', _context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[4, 11]]
      );
    })
  );

  return function submitPayPalPayment() {
    return _ref.apply(this, arguments);
  };
})();

export default submitPayPalPayment;
