import React from 'react';
import { mount } from 'enzyme';
import QuickActions from './QuickActions';
import { HeaderStyled } from './QuickActionsStyled';

describe('<QuickActions/>', function() {
  const wrapper = mount(
    /* #__PURE__ */ React.createElement(QuickActions, null)
  );
  describe('@renders', function() {
    it('should render initial state', function() {
      expect(wrapper.find(HeaderStyled)).toHaveLength(1);
    });
  });
});
