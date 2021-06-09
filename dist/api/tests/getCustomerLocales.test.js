import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import getCustomerLocales from 'api/Customer/getCustomerLocales';

describe('getCustomerLocales', function() {
  it('fetch customer locales on call', function(done) {
    const mockResponseData = {
      responseData: {
        locale: 'pl_PL',
        country: 'pl',
        currency: 'EUR'
      }
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: function json() {
        return mockResponseData;
      }
    });
    getCustomerLocales().then(function(res) {
      expect(res).toEqual(mockResponseData);
      done();
    });
  });
  it(
    'fails on remote call error',
    /* #__PURE__ */ (function() {
      const _ref = _asyncToGenerator(
        /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(done) {
          let mockError;
          let mockFetch;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  mockError = new Error('error');
                  mockFetch = jest
                    .spyOn(global, 'fetch')
                    .mockRejectedValue(mockError);
                  getCustomerLocales().catch(function(err) {
                    expect(mockFetch).toHaveBeenCalled();
                    expect(err).toEqual(mockError);
                    done();
                  });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );

      return function(_x) {
        return _ref.apply(this, arguments);
      };
    })()
  );
});
