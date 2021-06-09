import { setData, getData } from 'util/appConfigHelper';

var savePublisherId = function savePublisherId(location, setPublisherId) {
  var publisherIdFromQuery = new URLSearchParams(location.search).get('publisher');

  if (publisherIdFromQuery) {
    setPublisherId(publisherIdFromQuery);
    setData('CLEENG_PUBLISHER_ID', publisherIdFromQuery);
  } else {
    setPublisherId(getData('CLEENG_PUBLISHER_ID') || '');
  }
};

export default savePublisherId;