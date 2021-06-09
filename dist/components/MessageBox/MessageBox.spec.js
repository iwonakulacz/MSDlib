import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import MessageBox from './MessageBox';
import {
  MessageBoxIconWrapStyled,
  MessageBoxMessageStyled
} from './MessageBoxStyled';

const message = 'test message';
const type = 'test type';
describe('<MessageBox/>', function() {
  afterEach(function() {
    jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(MessageBox, {
          message,
          type
        })
      );
      expect(wrapper.find(MessageBoxIconWrapStyled)).toHaveLength(1);
      expect(wrapper.find(MessageBoxMessageStyled)).toHaveLength(1);
    });
  });
});
