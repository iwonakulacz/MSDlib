import { shallow } from 'enzyme';
import React from 'react';
import Checkbox from './Checkbox';
import {
  CheckboxStyled,
  CheckFrameStyled,
  CheckMarkStyled
} from './CheckboxStyled';

describe('<Checkbox/>', function() {
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Checkbox, null)
      );
      expect(wrapper.find(CheckboxStyled).exists()).toBe(true);
      expect(wrapper.props().checked).toEqual(false);
    });
    it('should add class to checkbox when general error', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Checkbox, {
          error: 'general',
          required: true
        })
      );
      expect(wrapper.find(CheckFrameStyled).exists()).toBe(true);
      expect(wrapper.find(CheckFrameStyled).props().error).toBe(true);
    });
    it('should change checked field if passed', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Checkbox, {
          checked: true
        })
      );
      expect(wrapper.props().checked).toBe(true);
      expect(wrapper.find(CheckMarkStyled).exists()).toBe(true);
    });
  });
  describe('@events', function() {
    it('should call onClickFn when checkbox is clicked', function() {
      const clickFn = jest.fn();
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Checkbox, {
          onClickFn: clickFn
        })
      );
      expect(clickFn).not.toHaveBeenCalled();
      wrapper.simulate('click');
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
    it('should call onClickFn when press Enter on checkbox', function() {
      const clickFn = jest.fn();
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(Checkbox, {
          onClickFn: clickFn
        })
      );
      const checkbox = wrapper.find(CheckFrameStyled);
      expect(clickFn).not.toHaveBeenCalled();
      checkbox.simulate('keyDown', {
        keyCode: 32
      });
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });
});
