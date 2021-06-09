import React from 'react';
import { withTranslation } from 'react-i18next';
import Button from 'components/Button';
import labeling from 'containers/labeling';

const BackButton = function BackButton(_ref) {
  const { isMyAccount } = _ref;
  const { onClickFn } = _ref;
  const { t } = _ref;
  return /* #__PURE__ */ React.createElement(
    Button,
    {
      isLink: !onClickFn,
      to: {
        pathname: isMyAccount ? '/my-account/login' : '/login'
      },
      onClickFn,
      theme: 'navLink'
    },
    t('Back to login')
  );
};

BackButton.defaultProps = {
  isMyAccount: false,
  onClickFn: null,
  t: function t(k) {
    return k;
  }
};
export { BackButton as PureBackButton };
export default withTranslation()(labeling()(BackButton));
