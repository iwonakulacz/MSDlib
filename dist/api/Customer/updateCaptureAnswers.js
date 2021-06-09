import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

const updateCaptureAnswers = /* #__PURE__ */ (function() {
  const _ref = _asyncToGenerator(
    /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(anwsers) {
      let token;
      let decoded;
      let customerId;
      let url;
      let payload;
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
                .concat(customerId, '/capture');
              payload = {
                firstName: anwsers.firstName || null,
                lastName: anwsers.lastName || null,
                address: anwsers.address || null,
                address2: anwsers.address2 || null,
                city: anwsers.city || null,
                state: anwsers.state || null,
                postCode: anwsers.postCode || null,
                country: anwsers.country || null,
                email: anwsers.email || null,
                birthDate: anwsers.birthDate || null,
                companyName: anwsers.companyName || null,
                phoneNumber: anwsers.phoneNumber || null,
                customAnswers: anwsers.customAnswers || null
              };
              _context.next = 7;
              return fetch(url, {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                  Authorization: 'Bearer '.concat(token)
                }
              });

            case 7:
              resp = _context.sent;
              _context.next = 10;
              return resp.json();

            case 10:
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

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );

  return function updateCaptureAnswers(_x) {
    return _ref.apply(this, arguments);
  };
})();

export default updateCaptureAnswers;
