import loginCustomer from 'api/Auth/loginCustomer';
import { sendMessage } from 'util/appConfigHelper';

jest.mock('util/appConfigHelper', function() {
  return {
    sendMessage: jest.fn()
  };
});
describe('loginCustomer', function() {
  it('login user on call', function(done) {
    const mockResponseData = {
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
    loginCustomer().then(function(res) {
      expect(res).toEqual(mockResponseData);
      expect(sendMessage).toHaveBeenCalledWith(mockResponseData.responseData);
      done();
    });
  });
  it('fails on remote call error', function(done) {
    const mockError = 'mock-error';
    jest.spyOn(global, 'fetch').mockRejectedValue(mockError);
    loginCustomer().then(function(res) {
      expect(res).toBe(mockError);
      done();
    });
  });
});
