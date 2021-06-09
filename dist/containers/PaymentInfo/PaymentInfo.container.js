import { connect } from 'react-redux';
import {
  setPaymentMethod as _setPaymentMethod,
  setTransactionsList as _setTransactionsList,
  setTransactionsToShow as _setTransactionsToShow,
  setTransactionsListAsFetched as _setTransactionsListAsFetched,
  hideShowMoreButton as _hideShowMoreButton
} from 'redux/paymentInfo';
import PaymentInfo from './PaymentInfo.component';

export var mapStateToProps = function mapStateToProps(state) {
  return {
    paymentInfo: state.paymentInfo
  };
};
export var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setPaymentMethod: function setPaymentMethod(newPaymentDetails) {
      dispatch(_setPaymentMethod(newPaymentDetails));
    },
    setTransactionsList: function setTransactionsList(newTransactionList) {
      dispatch(_setTransactionsList(newTransactionList));
    },
    setTransactionsToShow: function setTransactionsToShow(items) {
      dispatch(_setTransactionsToShow(items));
    },
    setTransactionsListAsFetched: function setTransactionsListAsFetched() {
      dispatch(_setTransactionsListAsFetched());
    },
    hideShowMoreButton: function hideShowMoreButton() {
      dispatch(_hideShowMoreButton());
    }
  };
};
const PlanDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentInfo);
export default PlanDetailsContainer;
