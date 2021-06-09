import React from 'react';
import { mount } from 'enzyme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Capture from './Capture';
jest.mock('react-i18next', function () {
  return {
    useTranslation: function useTranslation() {
      return [function (key) {
        return key;
      }];
    }
  };
});
var captureSettings = [{
  key: 'email',
  enabled: true,
  required: true,
  answer: 'test@test.com'
}, {
  key: 'firstNameLastName',
  enabled: true,
  required: true,
  answer: {
    firstName: null,
    lastName: null
  }
}, {
  key: 'birthDate',
  enabled: true,
  required: true,
  answer: null
}, {
  key: 'companyName',
  enabled: false,
  required: false,
  answer: null
}, {
  key: 'phoneNumber',
  enabled: true,
  required: true,
  answer: null
}, {
  key: 'address',
  enabled: false,
  required: true,
  answer: {
    address: null,
    address2: null,
    city: null,
    state: null,
    postCode: null,
    country: null
  }
}, {
  key: 'custom_1',
  enabled: true,
  required: true,
  value: 'option_1;option_2;option_3',
  question: 'What is the best option?',
  answer: null
}];
var redirectUrl = ['/offer'];
describe('Capture', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(Capture, {
        settings: captureSettings,
        redirectUrl: redirectUrl
      }));
      var header = wrapper.find(Header);
      var footer = wrapper.find(Footer);
      expect(wrapper.props().settings).toBe(captureSettings);
      expect(wrapper.props().redirectUrl).toBe(redirectUrl);
      expect(header).toHaveLength(1);
      expect(footer).toHaveLength(1);
    });
  });
});