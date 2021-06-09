import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('<Button/>', function() {
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Button, null)
      );
      expect(wrapper.prop('type')).toBe('button');
      expect(wrapper.prop('theme')).toBe('primary');
    });
    it('should render initial state for Link', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Button, {
          isLink: true,
          to: {
            pathname: '/my-account',
            fromMyAccount: true
          }
        })
      );
      expect(wrapper.prop('to')).toEqual({
        pathname: '/my-account',
        state: {
          fromMyAccount: true
        }
      });
    });
    it('should change type if passed', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Button, null)
      );
      const newType = 'submit';
      wrapper.setProps({
        type: newType
      });
      expect(wrapper.prop('type')).toBe(newType);
    });
  });
  describe('@events', function() {
    it('should call onClickFn when button clicked', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Button, null)
      );
      const clickFn = jest.fn();
      wrapper.setProps({
        onClickFn: clickFn
      });
      expect(clickFn).not.toHaveBeenCalled();
      wrapper.simulate('click');
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });
});
