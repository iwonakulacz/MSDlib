import appConfigReducer, { SET_DATA, REMOVE_DATA } from 'redux/appConfig';

describe('appConfigReducer', function() {
  it('should correctly call setData action', function() {
    const action = {
      type: SET_DATA,
      payload: {
        name: 'CLEENG_OFFER_ID',
        value: 'mockOfferId'
      }
    };
    const expectedState = {
      CLEENG_OFFER_ID: 'mockOfferId'
    };
    expect(appConfigReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call removeData action', function() {
    const action = {
      type: REMOVE_DATA,
      payload: {
        name: 'CLEENG_OFFER_ID'
      }
    };
    const expectedState = {
      CLEENG_OFFER_ID: ''
    };
    expect(appConfigReducer(undefined, action)).toMatchObject(expectedState);
  });
});
