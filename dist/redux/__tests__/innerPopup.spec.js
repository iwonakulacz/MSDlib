import innerPopupReducer, { SHOW_INNER_POPUP, HIDE_INNER_POPUP } from 'redux/innerPopupReducer';
describe('InnerPopup reducer', function () {
  it('should correctly call showInnerPopup action', function () {
    var action = {
      type: SHOW_INNER_POPUP,
      payload: {
        type: 'updateSubscription',
        data: {
          mock: 'mock'
        }
      }
    };
    var expectedState = {
      isOpen: true,
      type: 'updateSubscription',
      data: {
        mock: 'mock'
      }
    };
    expect(innerPopupReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call hideInnerPopup action', function () {
    var action = {
      type: HIDE_INNER_POPUP
    };
    var expectedState = {
      isOpen: false,
      type: '',
      data: {}
    };
    expect(innerPopupReducer(undefined, action)).toMatchObject(expectedState);
  });
});