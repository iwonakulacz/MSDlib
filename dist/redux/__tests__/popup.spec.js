import popupReducer, { SHOW_POPUP, HIDE_POPUP } from 'redux/popup';
describe('Popup reducer', function () {
  it('should correctly call showPopup action', function () {
    var action = {
      type: SHOW_POPUP,
      payload: {
        type: 'termsNotAccepted',
        consents: [{
          name: 'terms'
        }]
      }
    };
    var expectedState = {
      isPopupShown: true,
      popupType: 'termsNotAccepted',
      consents: [{
        name: 'terms'
      }]
    };
    expect(popupReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call hidePopup action', function () {
    var action = {
      type: HIDE_POPUP
    };
    var expectedState = {
      isPopupShown: false,
      popupType: '',
      consents: []
    };
    expect(popupReducer(undefined, action)).toMatchObject(expectedState);
  });
});