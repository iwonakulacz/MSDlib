/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import MyAccountError from 'components/MyAccountError';
import { SkeletonCard } from 'components/CurrentPlan/CurrentPlan';
import { SubscriptionStyled } from 'components/CurrentPlan/CurrentPlanStyled';
import { PureSubscriptionSwitchesList } from './SubscriptionSwitchesList';

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
describe('<SubscriptionSwitchesList/>', function() {
  afterEach(function() {
    return jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should show loader if isLoading', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureSubscriptionSwitchesList, {
          isLoading: true,
          isOfferSelected: false
        })
      );
      expect(wrapper.find(SkeletonCard)).toHaveLength(1);
    });
    it('should show error if offer is not selected', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureSubscriptionSwitchesList, {
          isOfferSelected: false
        })
      );
      expect(wrapper.find(MyAccountError)).toHaveLength(1);
    });
    it('should show error if offer is selected and there are no switch settings', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureSubscriptionSwitchesList, {
          isOfferSelected: true
        })
      );
      expect(wrapper.find(MyAccountError)).toHaveLength(1);
    });
    it('should show error if errors are passed', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureSubscriptionSwitchesList, {
          isOfferSelected: false,
          errors: ['error']
        })
      );
      expect(wrapper.find(MyAccountError)).toHaveLength(1);
    });
    it('should render SubscriptionSwitchesList if offer is selected and there are switch settings', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureSubscriptionSwitchesList, {
          isOfferSelected: true,
          switchSettings: {
            available: [
              {
                toOfferId: 'mock',
                period: 'month',
                title: 'title',
                currency: 'EUR',
                price: 10
              }
            ]
          }
        })
      );
      expect(wrapper.find(SubscriptionStyled)).toHaveLength(1);
    });
  });
});
