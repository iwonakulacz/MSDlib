/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import PaymentMethodButton from 'components/PaymentMethodButton';
import { PureAdyen as Adyen } from 'components/Adyen/Adyen';
import { submitPayment, getPaymentMethods, updateOrder, submitPayPalPayment } from 'api';
import { getData, setData } from 'util/appConfigHelper';
import Payment from './Payment';
import { PaymentErrorStyled } from './PaymentStyled';
jest.mock('containers/labeling', function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, Object.assign({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/React.createElement(Component, Object.assign({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
var mockPaymentMethods = {
  responseData: {
    paymentMethods: [{
      id: 234,
      methodName: 'card',
      logoUrl: 'https://cleeng.com/assets/7d823b2183d46cd1fe79a9a32c566e07.png'
    }, {
      id: 123,
      methodName: 'paypal',
      logoUrl: ''
    }]
  },
  errors: []
};
jest.mock('api', function () {
  return {
    createOrder: jest.fn().mockResolvedValue({
      orderId: '123123'
    }).mockName('createOrder'),
    updateOrder: jest.fn().mockResolvedValue({
      errors: [],
      responseData: {
        order: {}
      }
    }).mockName('updateOrder'),
    getPaymentMethods: jest.fn().mockResolvedValue({
      responseData: {
        paymentMethods: [{
          id: 234,
          methodName: 'card',
          logoUrl: 'https://cleeng.com/assets/7d823b2183d46cd1fe79a9a32c566e07.png'
        }, {
          id: 123,
          methodName: 'paypal',
          logoUrl: ''
        }]
      },
      errors: []
    }).mockName('getPaymentMethods'),
    submitPayment: jest.fn().mockResolvedValue({
      errors: []
    }).mockName('submitPayment'),
    submitPayPalPayment: jest.fn().mockResolvedValue({
      responseData: {
        redirectUrl: 'mock.com'
      },
      errors: []
    }).mockName('submitPayPalPayment')
  };
});
describe('Payment', function () {
  beforeEach(function () {
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(Storage.prototype, 'setItem');
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  it('renders with buttons', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    wrapper.setState({
      paymentMethods: mockPaymentMethods.responseData.paymentMethods
    });
    expect(wrapper.find(PaymentMethodButton)).toHaveLength(2);
    expect(wrapper.find(Adyen)).toHaveLength(0);
  });
  it('fetch payment methods on render', function (done) {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    setImmediate(function () {
      expect(wrapper.state().paymentMethods).toEqual(mockPaymentMethods.responseData.paymentMethods);
      var paymentMethodId = getData('CLEENG_PAYMENT_METHOD_ID');
      expect(Number(paymentMethodId)).toBe(mockPaymentMethods.responseData.paymentMethods[0].id);
      done();
    });
  });
  it('shows error while cannot fetch payment methods', function (done) {
    getPaymentMethods.mockResolvedValueOnce({
      errors: ['Some error']
    });
    var wrapper = shallow( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    setImmediate(function () {
      expect(wrapper.find(PaymentErrorStyled).exists()).toBe(true);
      done();
    });
  });
  it('expands on button click', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    setData('CLEENG_ORDER_ID', 123123123);
    wrapper.setState({
      paymentMethods: mockPaymentMethods.responseData.paymentMethods
    });
    wrapper.find(PaymentMethodButton).first().simulate('click');
    expect(wrapper.find(Adyen)).toHaveLength(1);
    expect(updateOrder).toHaveBeenCalled();
  });
  it('clears error', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    var instance = wrapper.instance();
    instance.setState({
      generalError: 'ERROR'
    });
    expect(instance.state.generalError).not.toBe('');
    instance.clearError();
    expect(instance.state.generalError).toBe('');
  });
});
describe('Adyen submit', function () {
  it('complete payment on successful submit via adyen', function (done) {
    var mockOnPaymentComplete = jest.fn();
    var wrapper = mount( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: mockOnPaymentComplete
    }));
    var instance = wrapper.instance();
    instance.onAdyenSubmit({
      data: {
        paymentMethod: {}
      }
    });
    expect(submitPayment).toHaveBeenCalled();
    setImmediate(function () {
      expect(instance.props.onPaymentComplete).toHaveBeenCalled();
      done();
    });
  });
  it('shows error when payment submit failed', function (done) {
    submitPayment.mockResolvedValueOnce({
      errors: ['Some error']
    });
    var wrapper = mount( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: jest.fn()
    }));
    var instance = wrapper.instance();
    instance.onAdyenSubmit({
      data: {
        paymentMethod: {}
      }
    });
    expect(submitPayment).toHaveBeenCalled();
    setImmediate(function () {
      expect(instance.state.generalError).not.toBe('');
      done();
    });
  });
});
describe('Paypal submit', function () {
  it('should call submitPayPalPayment', function (done) {
    var mockOnPaymentComplete = jest.fn();
    delete window.location;
    window.location = {
      href: ''
    };
    var wrapper = mount( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: mockOnPaymentComplete
    }));
    var instance = wrapper.instance();
    instance.submitPayPal();
    expect(submitPayPalPayment).toHaveBeenCalled();
    setImmediate(function () {
      expect(window.location.href).toBe('mock.com');
      done();
    });
  });
  it('should set state when error occures', function (done) {
    submitPayPalPayment.mockRejectedValue(new Error('erro'));
    var mockOnPaymentComplete = jest.fn();
    var wrapper = mount( /*#__PURE__*/React.createElement(Payment, {
      onPaymentComplete: mockOnPaymentComplete
    }));
    var instance = wrapper.instance();
    instance.submitPayPal();
    expect(submitPayPalPayment).toHaveBeenCalled();
    setImmediate(function () {
      expect(instance.state.generalError).toBe('The payment failed. Please try again.');
      done();
    });
  });
});