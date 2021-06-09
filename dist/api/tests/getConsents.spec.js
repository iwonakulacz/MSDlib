import getConsents from 'api/Publisher/getConsents';

describe('getConsents', function() {
  it('fetch broadcaster consents on call', function(done) {
    const mockResponseData = {
      terms: {
        broadcasterId: 0,
        name: 'terms',
        version: '1',
        value: 'https://cleeng.com/legal',
        label:
          'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        required: true
      }
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: function json() {
        return mockResponseData;
      }
    });
    getConsents().then(function(res) {
      expect(res).toEqual(mockResponseData);
      done();
    });
  });
  it('fails on remote call error', function(done) {
    const mockError = new Error('error');
    const mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(mockError);
    getConsents().catch(function(err) {
      expect(mockFetch).toHaveBeenCalled();
      expect(err).toEqual(mockError);
      done();
    });
  });
});
