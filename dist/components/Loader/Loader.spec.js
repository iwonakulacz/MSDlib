import { shallow } from 'enzyme';
import React from 'react';
import Loader from './Loader';
import { LoaderStyled } from './LoaderStyled';
describe('<Loader/>', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Loader, null));
      var loaderElement = wrapper.find(LoaderStyled);
      expect(loaderElement).toHaveLength(1);
    });
  });
});