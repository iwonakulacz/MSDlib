import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import { getData } from 'util/appConfigHelper';

const submitPayment = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(card) {
      let token;
      let orderId;
      let url;
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
                  '/connectors/adyen/payments'
                );
                _context.prev = 3;
                _context.next = 6;
                return fetch(url, {
                  method: 'POST',
                  body: JSON.stringify({
                    orderId,
                    card
                  }),
                  headers: {
                    Authorization: 'Bearer '.concat(token),
                    'Content-Type': 'application/json'
                  }
                });

              case 6:
                res = _context.sent;
                return _context.abrupt('return', res.json());

              case 10:
                _context.prev = 10;
                _context.t0 = _context.catch(3);
                return _context.abrupt('return', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[3, 10]]
      );
    })
  );

  return function submitPayment(_x) {
    return _ref.apply(this, arguments);
  };
})();

export default submitPayment;
