import React from 'react';
import { mount } from 'enzyme';
import roundNumber from 'util/roundNumber';
import Price from './Price';
import { CurrencyStyled, PriceStyled, PeriodStyled } from './PriceStyled';
describe('<Price/>', function () {
  describe('@renders', function () {
    it('should show price with space after number in period', function () {
      var currency = '$';
      var price = 10;
      var period = '2months';
      var wrapper = mount( /*#__PURE__*/React.createElement(Price, {
        currency: currency,
        price: price,
        period: period
      }));
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).text()).toEqual("/\xA02 months");
    });
    it('should show price with period', function () {
      var currency = '$';
      var price = 10;
      var period = 'month';
      var wrapper = mount( /*#__PURE__*/React.createElement(Price, {
        currency: currency,
        price: price,
        period: period
      }));
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).text()).toEqual("/\xA0month");
    });
    it('should show price without period', function () {
      var currency = '$';
      var price = 10;
      var wrapper = mount( /*#__PURE__*/React.createElement(Price, {
        currency: currency,
        price: price
      }));
      expect(wrapper.find(CurrencyStyled).text()).toEqual(currency);
      expect(wrapper.find(PriceStyled).text()).toEqual(roundNumber(price));
      expect(wrapper.find(PeriodStyled).exists()).toEqual(false);
    });
  });
});