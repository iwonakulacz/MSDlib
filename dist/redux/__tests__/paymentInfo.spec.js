import { SET_PAYMENT_METHOD, SET_TRANSACTIONS_LIST, SET_TRANSACTIONS_TO_SHOW, SET_TRANSACTIONS_LIST_AS_FETCHED, HIDE_SHOW_MORE_BUTTON } from 'redux/paymentInfo';
import paymentInfoReducer from '../paymentInfo';
var paymentDetailsMock = [{
  id: 680860225,
  customerId: 338816933,
  token: '8315815183716450',
  paymentGateway: 'adyen',
  paymentMethod: 'card',
  paymentMethodSpecificParams: {
    variant: 'mc',
    lastCardFourDigits: '1111',
    holderName: 'Sample card',
    cardExpirationDate: '10/2020',
    socialSecurityNumber: ''
  },
  paymentMethodId: null
}];
var transactionListPayload = [{
  transactionId: 'T650862998',
  transactionDate: 1584361260,
  offerId: 'S568296139_ZW',
  offerType: 'subscription',
  offerTitle: 'Annual subscription (recurring) to pride&amp;prejudice'
}];
describe('PaymentInfo reducer', function () {
  it('should correctly call paymentMethod action', function () {
    var action = {
      type: SET_PAYMENT_METHOD,
      payload: paymentDetailsMock
    };
    var expectedState = {
      paymentMethod: paymentDetailsMock
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call setTransactionList action', function () {
    var action = {
      type: SET_TRANSACTIONS_LIST,
      payload: transactionListPayload
    };
    var expectedState = {
      transactionsList: transactionListPayload
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call setTransactionsToShow action without payload', function () {
    var action = {
      type: SET_TRANSACTIONS_TO_SHOW
    };
    var expectedState = {
      transactionsToShow: []
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call setTransactionsToShow action with payload', function () {
    var action = {
      type: SET_TRANSACTIONS_TO_SHOW,
      payload: 1
    };
    var expectedStateToShow = {
      transactionsToShow: []
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedStateToShow);
  });
  it('should correctly call setTransactionsListAsFetched action', function () {
    var action = {
      type: SET_TRANSACTIONS_LIST_AS_FETCHED
    };
    var expectedState = {
      isTransactionListFetched: true
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedState);
  });
  it('should correctly call hideShowMoreButton action', function () {
    var action = {
      type: HIDE_SHOW_MORE_BUTTON
    };
    var expectedState = {
      isShowMoreButtonHidden: true
    };
    expect(paymentInfoReducer(undefined, action)).toMatchObject(expectedState);
  });
});