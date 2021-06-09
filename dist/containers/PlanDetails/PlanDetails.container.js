import { connect } from 'react-redux';
import {
  setCurrentPlan as _setCurrentPlan,
  updateList as _updateList,
  setOfferToSwitch as _setOfferToSwitch,
  setSwitchSettings as _setSwitchSettings
} from 'redux/planDetails';
import {
  showInnerPopup as _showInnerPopup,
  hideInnerPopup as _hideInnerPopup
} from 'redux/innerPopupReducer';
import PlanDetails from './PlanDetails.component';

export var mapStateToProps = function mapStateToProps(state) {
  return {
    planDetails: state.planDetails,
    updateList: state.updateList,
    innerPopup: state.innerPopup
  };
};
export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCurrentPlan: function setCurrentPlan(currentPlan) {
      dispatch(_setCurrentPlan(currentPlan));
    },
    updateList: function updateList() {
      dispatch(_updateList());
    },
    showInnerPopup: function showInnerPopup(payload) {
      dispatch(_showInnerPopup(payload));
    },
    hideInnerPopup: function hideInnerPopup() {
      dispatch(_hideInnerPopup());
    },
    setOfferToSwitch: function setOfferToSwitch(payload) {
      dispatch(_setOfferToSwitch(payload));
    },
    setSwitchSettings: function setSwitchSettings(payload) {
      dispatch(_setSwitchSettings(payload));
    }
  };
};
const PlanDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanDetails);
export default PlanDetailsContainer;
