import React from 'react';
import { mount } from 'enzyme';
import SectionHeader from './SectionHeader';

describe('<SectionHeader/>', function() {
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(SectionHeader, null, 'Test')
      );
      expect(wrapper.prop('center')).toBe(false);
      expect(wrapper.text()).toEqual('Test');
    });
    it('should set center prop if passed', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(SectionHeader, {
          center: true
        })
      );
      expect(wrapper.prop('center')).toBe(true);
    });
  });
});
