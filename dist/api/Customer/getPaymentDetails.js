import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

const getPaymentDetails = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
      let token;
      let decoded;
      let customerId;
      let url;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              token = getData('CLEENG_AUTH_TOKEN') || '';
              decoded = jwtDecode(token);
              customerId = decoded.customerId;
              url = ''
                .concat(ENVIRONMENT_CONFIGURATION.API_URL, '/customers/')
                .concat(customerId, '/payment_details');
              return _context.abrupt(
                'return',
                fetch(url, {
                  method: 'GET',
                  headers: {
                    Authorization: 'Bearer '.concat(token)
                  }
                }).then(function(res) {
                  return res.json();
                })
              );

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );

  return function getPaymentDetails() {
    return _ref.apply(this, arguments);
  };
})();

export default getPaymentDetails;
