import registerCustomer from 'api/Auth/registerCustomer';
import { sendMessage } from 'util/appConfigHelper';
jest.mock('util/appConfigHelper', function () {
  return {
    sendMessage: jest.fn()
  };
});
describe('registerCustomer', function () {
  it('register user on call', function (done) {
    var mockResponseData = {
      status: 200,
      responseData: {
        jwt: 'jvbreigburtij'
      }
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: function json() {
        return mockResponseData;
      }
    });
    registerCustomer().then(function (res) {
      expect(res).toEqual(mockResponseData);
      expect(sendMessage).toHaveBeenCalledWith(mockResponseData.responseData);
      done();
    });
  });
  it('fails on remote call error', function (done) {
    var mockError = 'mock-error';
    jest.spyOn(global, 'fetch').mockRejectedValue(mockError);
    registerCustomer().then(function (res) {
      expect(res).toBe(mockError);
      done();
    });
  });
});