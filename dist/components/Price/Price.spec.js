import React from 'react';
import { mount } from 'enzyme';
import roundNumber from 'util/roundNumber';
import Price from './Price';
import { CurrencyStyled, PriceStyled, PeriodStyled } from './PriceStyled';

describe('<Price/>', function() {
  describe('@renders', function() {
    it('should show price with space after number in period', function() {
      const currency = '$';
      const price = 10;
      const period = '2months';
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(Price, {
          currency,
          price,
          period
        })
      );
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).text()).toEqual('/\xA02 months');
    });
    it('should show price with period', function() {
      const currency = '$';
      const price = 10;
      const period = 'month';
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(Price, {
          currency,
          price,
          period
        })
      );
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).text()).toEqual('/\xA0month');
    });
    it('should show price without period', function() {
      const currency = '$';
      const price = 10;
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(Price, {
          currency,
          price
        })
      );
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).exists()).toEqual(false);
    });
  });
});
