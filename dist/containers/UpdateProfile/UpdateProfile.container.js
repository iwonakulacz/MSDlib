import { connect } from 'react-redux';
import { setCurrentUser as _setCurrentUser, setConsents as _setConsents, setUserCapture as _setUserCapture, updateCaptureOption as _updateCaptureOption } from 'redux/userProfile';
import { showInnerPopup as _showInnerPopup, hideInnerPopup as _hideInnerPopup } from 'redux/innerPopupReducer';
import UpdateProfile from './UpdateProfile.component';
export var mapStateToProps = function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    userConsents: [],
    consentsError: state.consentsError,
    innerPopup: state.innerPopup
  };
};
export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: function setCurrentUser(currentUser) {
      dispatch(_setCurrentUser(currentUser));
    },
    setUserCapture: function setUserCapture(capture) {
      dispatch(_setUserCapture(capture));
    },
    updateCaptureOption: function updateCaptureOption(payload) {
      dispatch(_updateCaptureOption(payload));
    },
    setConsents: function setConsents(consents) {
      dispatch(_setConsents(consents));
    },
    showInnerPopup: function showInnerPopup(payload) {
      dispatch(_showInnerPopup(payload));
    },
    hideInnerPopup: function hideInnerPopup() {
      dispatch(_hideInnerPopup());
    }
  };
};
export var MyAccountContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
export default MyAccountContainer;