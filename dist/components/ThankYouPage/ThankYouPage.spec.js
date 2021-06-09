/* eslint-disable react/jsx-props-no-spreading */
import Button from 'components/Button';
import { mountComponentHelper } from 'test/testComponentHelper';
import ThankYouPage from './ThankYouPage';
var renderComponent = mountComponentHelper(ThankYouPage);
describe('<ThankYouPage/>', function () {
  var _renderComponent = renderComponent(),
      wrapper = _renderComponent.wrapper;

  describe('@renders', function () {
    it('should render initial state', function () {
      expect(wrapper.find(Button).exists()).toEqual(true);
    });
  });
});