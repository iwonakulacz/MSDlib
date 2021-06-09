/* eslint-disable react/jsx-props-no-spreading */
import Button from 'components/Button';
import { mountComponentHelper } from 'test/testComponentHelper';
import ThankYouPage from './ThankYouPage';

const renderComponent = mountComponentHelper(ThankYouPage);
describe('<ThankYouPage/>', function() {
  const _renderComponent = renderComponent();
  const { wrapper } = _renderComponent;

  describe('@renders', function() {
    it('should render initial state', function() {
      expect(wrapper.find(Button).exists()).toEqual(true);
    });
  });
});
