import {
  SET_CURRENT_USER,
  SET_CONSENTS,
  SET_CONSENTS_ERROR
} from 'redux/userProfile';
import { SET_CURRENT_PLAN } from 'redux/planDetails';
import { SHOW_POPUP, HIDE_POPUP } from 'redux/popup';
import { mapDispatchToProps, mapStateToProps } from './MyAccount.container';

describe('<MyAccount/>', function() {
  describe('@container', function() {
    it('should show previously added value', function() {
      const currentPlanMock = [
        {
          offerId: 'S937144802_UA',
          status: 'active',
          expiresAt: 1582706082,
          nextPaymentPrice: 14.4,
          nextPaymentCurrency: 'EUR',
          paymentGateway: 'adyen',
          paymentMethod: 'mc',
          offerTitle: 'Monthly subscription with 7 days trial',
          period: 'month'
        }
      ];
      const initialState = {
        planDetails: currentPlanMock,
        userProfile: {}
      };
      expect(mapStateToProps(initialState).planDetails).toEqual(
        currentPlanMock
      );
      expect(mapStateToProps(initialState).userProfile).toEqual({});
    });
    it('should dispatch SET_CURRENT_USER action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setCurrentUser();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CURRENT_USER
      });
    });
    it('should dispatch SET_CURRENT_PLAN action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setCurrentPlan();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CURRENT_PLAN
      });
    });
    it('should dispatch SET_CONSENTS action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setConsents();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CONSENTS
      });
    });
    it('should dispatch SET_CONSENTS_ERROR action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setConsentsError();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CONSENTS_ERROR
      });
    });
    it('should dispatch HIDE_POPUP action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).hidePopup();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: HIDE_POPUP
      });
    });
    it('should dispatch SHOW_POPUP action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).showPopup({
        type: 'typeMock',
        consents: []
      });
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SHOW_POPUP,
        payload: {
          type: 'typeMock',
          consents: []
        }
      });
    });
  });
});
