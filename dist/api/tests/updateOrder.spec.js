import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import updateOrder from 'api/Offer/updateOrder';
import { setData } from 'util/appConfigHelper';
describe('updateOrder', function () {
  it('calls remote endpoint with authorization token', function (done) {
    var mockToken = 'TOKEN';
    var mockResponse = {
      foo: 'ok'
    };
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(global, 'fetch').mockImplementation( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url, _ref) {
        var Authorization;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Authorization = _ref.headers.Authorization;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  if (Authorization === "Bearer ".concat(mockToken)) {
                    resolve({
                      json: function json() {
                        return mockResponse;
                      }
                    });
                  } else {
                    reject();
                  }
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    setData('CLEENG_AUTH_TOKEN', mockToken);
    updateOrder().then(function (res) {
      expect(res).toEqual(mockResponse);
      done();
    });
  });
  it('fails on remote call error', function (done) {
    var mockError = new Error('error');
    var mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(mockError);
    updateOrder().catch(function (err) {
      expect(mockFetch).toHaveBeenCalled();
      expect(err).toEqual(mockError);
      done();
    });
  });
});