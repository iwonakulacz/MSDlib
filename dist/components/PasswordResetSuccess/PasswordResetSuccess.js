import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import {
  PasswordResetSuccessPageStyled,
  StyledTitle,
  StyledMessage,
  NoteStyled,
  StyledLink,
  Loader,
  Checkmark
} from './PasswordResetSuccessStyled';

const PasswordResetSuccess = function PasswordResetSuccess(_ref) {
  const { email } = _ref;
  const { t } = _ref;
  return /* #__PURE__ */ React.createElement(
    PasswordResetSuccessPageStyled,
    null,
    /* #__PURE__ */ React.createElement(
      Loader,
      null,
      /* #__PURE__ */ React.createElement(Checkmark, null)
    ),
    /* #__PURE__ */ React.createElement(
      StyledTitle,
      null,
      t('Password link sent')
    ),
    /* #__PURE__ */ React.createElement(
      StyledMessage,
      null,
      email
        ? t('Please check your inbox at {{email}}', {
            email
          })
        : t('Please check your inbox')
    ),
    /* #__PURE__ */ React.createElement(
      NoteStyled,
      null,
      t('Not sure that was the right email address?'),
      '\xA0',
      /* #__PURE__ */ React.createElement(
        Link,
        {
          to: '/reset-password/'
        },
        /* #__PURE__ */ React.createElement(StyledLink, null, t('Try again.'))
      )
    )
  );
};

/* istanbul ignore next */
PasswordResetSuccess.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { PasswordResetSuccess as PurePasswordResetSuccess };
export default withTranslation()(labeling()(PasswordResetSuccess));
