import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';

const resetPassword = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(
      offerId,
      customerEmail
    ) {
      let publisherId;
      let url;
      let res;
      let json;
      const _args = arguments;
      return _regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                publisherId =
                  _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
                url = ''.concat(
                  ENVIRONMENT_CONFIGURATION.API_URL,
                  '/customers/passwords'
                );
                _context.prev = 2;
                _context.next = 5;
                return fetch(url, {
                  method: 'PUT',
                  body: JSON.stringify({
                    offerId,
                    publisherId,
                    customerEmail
                  }),
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;

                if (!json.message) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt(
                  'return',
                  _objectSpread(
                    _objectSpread({}, json),
                    {},
                    {
                      errors: [json.message]
                    }
                  )
                );

              case 11:
                return _context.abrupt(
                  'return',
                  _objectSpread(
                    {
                      status: res.status
                    },
                    json
                  )
                );

              case 14:
                _context.prev = 14;
                _context.t0 = _context.catch(2);
                return _context.abrupt('return', {
                  errors: [_context.t0.message]
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[2, 14]]
      );
    })
  );

  return function resetPassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

export default resetPassword;
