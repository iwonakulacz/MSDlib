import { connect } from 'react-redux';
import {
  setCurrentUser as _setCurrentUser,
  setConsents as _setConsents,
  setConsentsError as _setConsentsError
} from 'redux/userProfile';
import { setCurrentPlan as _setCurrentPlan } from 'redux/planDetails';
import { showPopup as _showPopup, hidePopup as _hidePopup } from 'redux/popup';
import MyAccount from './MyAccount.component';

export var mapStateToProps = function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    planDetails: state.planDetails,
    consents: state.consents,
    popup: state.popup
  };
};
export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: function setCurrentUser(currentUser) {
      dispatch(_setCurrentUser(currentUser));
    },
    setCurrentPlan: function setCurrentPlan(currentPlan) {
      dispatch(_setCurrentPlan(currentPlan));
    },
    setConsents: function setConsents(consents) {
      dispatch(_setConsents(consents));
    },
    setConsentsError: function setConsentsError(msg) {
      dispatch(_setConsentsError(msg));
    },
    showPopup: function showPopup(type, consents) {
      dispatch(_showPopup(type, consents));
    },
    hidePopup: function hidePopup() {
      dispatch(_hidePopup());
    }
  };
};
export var MyAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
export default MyAccountContainer;
