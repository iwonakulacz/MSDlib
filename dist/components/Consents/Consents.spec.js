import { shallow, mount } from 'enzyme';
import React from 'react';
import Checkbox from 'components/Checkbox';
import Loader from 'components/Loader';
import getConsentsRequest from 'api/Publisher/getConsents';
import ConsentsComponent from './Consents';
import { ConsentsErrorStyled } from './ConsentsStyled';
import 'jest-styled-components';
var mockConsent = [{
  name: 'name',
  version: '1',
  required: false,
  label: '<a>Terms</a>'
}];
var mockConsentWithoutTag = [{
  name: 'name2',
  version: '2',
  required: false,
  label: 'No tags'
}];
var mockConsentDefinitions = [{
  name: 'name',
  version: '1',
  required: false
}];
var mockConsentsLabels = ['<a>Terms</a>'];
var mockConsentsLabelsAfterRegex = ['{{htmltag}}Terms{{endhtmltag}}'];
var mockConsentsLabelsAfterRegexWithoutTags = ['No tags'];
var mockPublisherId = '123456789';
jest.mock('api/Publisher/getConsents');
describe('<Consents/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(ConsentsComponent, null));
      var loader = wrapper.find(Loader);
      expect(loader).toHaveLength(1);
    });
    it('should render consents after fetching', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(ConsentsComponent, null));
      wrapper.setState({
        consentLoaded: true,
        consentDefinitions: mockConsent,
        consentsLabels: mockConsentsLabels,
        checked: [false]
      });
      expect(wrapper.exists('Checkbox')).toBe(true);
      expect(wrapper.find(Checkbox)).toHaveLength(1);
      expect(wrapper.find(Checkbox).props().checked).toEqual(false);
      expect(wrapper.find(Checkbox).props().required).toEqual(mockConsent[0].required);
      expect(wrapper.find(Checkbox).props().children).toEqual(mockConsentsLabels[0]);
    });
    it('should render error', function () {
      var errorValue = 'error text';
      var wrapper = shallow( /*#__PURE__*/React.createElement(ConsentsComponent, {
        error: errorValue
      }));
      expect(wrapper.find(ConsentsErrorStyled).exists()).toBe(true);
      expect(wrapper.find(ConsentsErrorStyled).text()).toEqual(errorValue);
    });
  });
  describe('@lifecycle', function () {
    describe('constructor', function () {
      it('should set default state values', function () {
        var wrapper = shallow( /*#__PURE__*/React.createElement(ConsentsComponent, null));
        expect(wrapper.state().consentDefinitions).toEqual([]);
        expect(wrapper.state().consentsLabels).toEqual([]);
        expect(wrapper.state().checked).toEqual([]);
        expect(wrapper.state().consentLoaded).toBe(false);
      });
    });
    describe('componentDidMount', function () {
      it('should get consents definitions and init values', function (done) {
        getConsentsRequest.mockResolvedValue({
          responseData: {
            consents: mockConsent
          }
        }); // simulate publisherId setup with delay

        var wrapper = mount( /*#__PURE__*/React.createElement(ConsentsComponent, {
          publisherId: ""
        }));
        wrapper.setProps({
          publisherId: mockPublisherId
        });
        wrapper.update();
        expect(getConsentsRequest).toHaveBeenCalled();
        setImmediate(function () {
          expect(wrapper.state().consentDefinitions).toEqual(mockConsentDefinitions);
          expect(wrapper.state().consentLoaded).toBe(true);
          expect(wrapper.state().checked).toEqual([false]);
          expect(wrapper.state().consentsLabels).toEqual(mockConsentsLabelsAfterRegex);
          done();
        });
      });
      it('should translate consents without tags', function (done) {
        getConsentsRequest.mockResolvedValue({
          responseData: {
            consents: mockConsentWithoutTag
          }
        });
        var wrapper = mount( /*#__PURE__*/React.createElement(ConsentsComponent, {
          publisherId: ""
        }));
        wrapper.setProps({
          publisherId: mockPublisherId
        });
        wrapper.update();
        expect(getConsentsRequest).toHaveBeenCalled();
        setImmediate(function () {
          expect(wrapper.state().consentLoaded).toBe(true);
          expect(wrapper.state().checked).toEqual([false]);
          expect(wrapper.state().consentsLabels).toEqual(mockConsentsLabelsAfterRegexWithoutTags);
          done();
        });
      });
      it('should catch error when fetch failed', function (done) {
        getConsentsRequest.mockRejectedValue(new Error('Error'));
        var wrapper = mount( /*#__PURE__*/React.createElement(ConsentsComponent, {
          publisherId: ""
        }));
        wrapper.setProps({
          publisherId: mockPublisherId
        });
        wrapper.update();
        expect(getConsentsRequest).toHaveBeenCalled();
        setImmediate(function () {
          expect(wrapper.state().consentDefinitions).toEqual([]);
          expect(wrapper.state().consentLoaded).toBe(false);
          expect(wrapper.state().consentsLabels).toEqual([]);
          done();
        });
      });
    });
    describe('actions', function () {
      it('change consent state on click', function () {
        var wrapper = mount( /*#__PURE__*/React.createElement(ConsentsComponent, null));
        wrapper.setState({
          consentLoaded: true,
          consentDefinitions: mockConsent,
          consentsLabels: mockConsentsLabels,
          checked: [false]
        });
        expect(wrapper.exists('Checkbox')).toBe(true);
        expect(wrapper.find(Checkbox)).toHaveLength(1);
        expect(wrapper.state().checked[0]).toEqual(false);
        wrapper.find(Checkbox).simulate('click');
        expect(wrapper.state().checked[0]).toEqual(true);
      });
    });
  });
});