/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { PurePaymentMethod } from './PaymentMethod';
import { CardWrapStyled, Message } from './PaymentMethodStyled';

jest.mock('containers/labeling', function() {
  return function() {
    return function(Component) {
      return function(props) {
        return /* #__PURE__ */ React.createElement(Component, {
          t: function t(k) {
            return k;
          },
          ...props
        });
      };
    };
  };
});
jest.mock('react-i18next', function() {
  return {
    withTranslation: function withTranslation() {
      return function(Component) {
        return function(props) {
          return /* #__PURE__ */ React.createElement(Component, {
            t: function t(k) {
              return k;
            },
            ...props
          });
        };
      };
    }
  };
});
const mockPaymentDetailsByTypes = [
  {
    id: 193925086,
    customerId: 280372348,
    token: '8315816736477319',
    paymentGateway: 'adyen',
    paymentMethod: 'card',
    paymentMethodSpecificParams: {
      variant: 'mc',
      lastCardFourDigits: '1111',
      holderName: 'dsadsadsa',
      cardExpirationDate: '10/2020',
      socialSecurityNumber: ''
    },
    paymentMethodId: null
  }
];
const mockPaymentDetailsNotSupported = [
  {
    id: 193925084,
    customerId: 280372348,
    token: '8315816736477319',
    paymentGateway: 'adyen',
    paymentMethod: 'notSupportedMethod',
    paymentMethodSpecificParams: {
      variant: 'mc',
      lastCardFourDigits: '1111',
      holderName: 'dsadsadsa',
      cardExpirationDate: '10/2020',
      socialSecurityNumber: ''
    },
    paymentMethodId: null
  }
];
const mockPaymentDetailsPaypal = [
  {
    id: 193925082,
    customerId: 280372348,
    token: '8315816736477319',
    paymentGateway: 'adyen',
    paymentMethod: 'paypal',
    paymentMethodId: null
  }
];
describe('<PaymentMethod/>', function() {
  afterEach(function() {
    jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePaymentMethod, null)
      );
      expect(wrapper.prop('paymentDetails')).toEqual([]);
    });
    it('should render all supported payment types', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePaymentMethod, {
          paymentDetails: mockPaymentDetailsByTypes
        })
      );
      expect(wrapper.find(CardWrapStyled)).toHaveLength(1);
    });
    it('should show specifid data for paypal', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePaymentMethod, {
          paymentDetails: mockPaymentDetailsPaypal
        })
      );
      expect(wrapper.find(CardWrapStyled)).toHaveLength(1);
      expect(wrapper.find(CardWrapStyled).props().type).toEqual('paypal');
    });
    it('should show the message if type is not supported', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePaymentMethod, {
          paymentDetails: mockPaymentDetailsNotSupported
        })
      );
      expect(wrapper.find(Message)).toHaveLength(1);
    });
  });
});
