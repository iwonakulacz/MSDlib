import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import resetPassword from 'api/Auth/resetPassword';
describe('resetPassword', function () {
  it('calls remote endpoint', function (done) {
    var mockOfferId = 'mock-offer-id';
    var mockEmail = 'mock-email';
    var mockResponseData = {
      errors: []
    };
    jest.spyOn(global, 'fetch').mockImplementation( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url, _ref) {
        var method;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _ref.method;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  if (method === 'PUT') {
                    resolve({
                      json: function json() {
                        return mockResponseData;
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
    resetPassword(mockOfferId, mockEmail).then(function (res) {
      expect(res).toEqual(mockResponseData);
      done();
    });
  });
  it('calls remote endpoint and catch messages', function (done) {
    var mockOfferId = 'mock-offer-id';
    var mockEmail = 'mock-email';
    var mockResponseData = {
      message: 'errorMessage'
    };
    var mockResponseErrorData = {
      message: mockResponseData.message,
      errors: [mockResponseData.message]
    };
    jest.spyOn(global, 'fetch').mockImplementation( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(url, _ref3) {
        var method;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                method = _ref3.method;
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (method === 'PUT') {
                    resolve({
                      json: function json() {
                        return mockResponseData;
                      }
                    });
                  } else {
                    reject();
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    resetPassword(mockOfferId, mockEmail).then(function (res) {
      expect(res).toEqual(mockResponseErrorData);
      done();
    });
  });
  it('fails on remote call error', function (done) {
    var mockOfferId = 'mock-offer-id';
    var mockEmail = 'mock-email';
    var mockError = 'mock-error';
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error(mockError));
    resetPassword(mockOfferId, mockEmail).then(function (res) {
      var errors = res.errors;
      expect(errors).toHaveLength(1);
      expect(errors[0]).toBe(mockError);
      done();
    });
  });
});