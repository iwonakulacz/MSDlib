import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Button from 'components/Button';
import Auth from 'services/auth';

const Logout = function Logout(_ref) {
  const { t } = _ref;
  return /* #__PURE__ */ React.createElement(
    Button,
    {
      onClickFn: function onClickFn() {
        return Auth.logout();
      },
      theme: 'navLink'
    },
    t('Back to login')
  );
};

Logout.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { Logout as PureLogout };
export default withTranslation()(labeling()(Logout));
