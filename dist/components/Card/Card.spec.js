import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { WrapStyled } from './CardStyled';

describe('<Card/>', function() {
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = shallow(/* #__PURE__ */ React.createElement(Card, null));
      expect(wrapper.find(WrapStyled)).toHaveLength(1);
    });
  });
});
