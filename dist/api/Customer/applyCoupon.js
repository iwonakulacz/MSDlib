import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

const applyCoupon = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(
      subscriptionId,
      couponCode
    ) {
      let token;
      let decoded;
      let customerId;
      let url;
      let resp;
      let json;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              token = getData('CLEENG_AUTH_TOKEN') || '';
              decoded = jwtDecode(token);
              customerId = decoded.customerId;
              url = ''
                .concat(ENVIRONMENT_CONFIGURATION.API_URL, '/customers/')
                .concat(customerId, '/subscriptions/')
                .concat(subscriptionId);
              _context.next = 6;
              return fetch(url, {
                method: 'PATCH',
                body: JSON.stringify({
                  couponCode
                }),
                headers: {
                  Authorization: 'Bearer '.concat(token)
                }
              });

            case 6:
              resp = _context.sent;
              _context.next = 9;
              return resp.json();

            case 9:
              json = _context.sent;
              return _context.abrupt(
                'return',
                _objectSpread(
                  {
                    status: resp.status
                  },
                  json
                )
              );

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );

  return function applyCoupon(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

export default applyCoupon;
