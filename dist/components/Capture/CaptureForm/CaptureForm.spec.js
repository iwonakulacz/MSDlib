import React from 'react';
import { mount } from 'enzyme';
import CaptureForm from './CaptureForm';

jest.mock('react-i18next', function() {
  return {
    useTranslation: function useTranslation() {
      return [
        function(key) {
          return key;
        }
      ];
    }
  };
});
const captureSettings = [
  {
    key: 'email',
    enabled: true,
    required: true,
    answer: 'test@test.com'
  },
  {
    key: 'firstNameLastName',
    enabled: true,
    required: true,
    answer: {
      firstName: null,
      lastName: null
    }
  },
  {
    key: 'birthDate',
    enabled: true,
    required: true,
    answer: null
  },
  {
    key: 'companyName',
    enabled: false,
    required: false,
    answer: null
  },
  {
    key: 'phoneNumber',
    enabled: true,
    required: true,
    answer: null
  },
  {
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
  },
  {
    key: 'custom_1',
    enabled: true,
    required: true,
    value: 'option_1;option_2;option_3',
    question: 'What is the best option?',
    answer: null
  }
];
const redirectUrl = ['/offer'];
describe('Capture', function() {
  describe('@renders', function() {
    it('should render initial state without passed props', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(CaptureForm, null)
      );
      expect(wrapper.props().settings).toStrictEqual([]);
      expect(wrapper.props().redirectUrl).toStrictEqual([]);
    });
    it('should render initial state with passed props', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(CaptureForm, {
          settings: captureSettings,
          redirectUrl
        })
      );
      expect(wrapper.props().settings).toStrictEqual(captureSettings);
      expect(wrapper.props().redirectUrl).toBe(redirectUrl);
    });
  });
});
