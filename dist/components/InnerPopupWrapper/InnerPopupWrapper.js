import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import MyAccountError from 'components/MyAccountError';
import {
  WrapperStyled,
  CardStyled,
  HeaderStyled,
  HeaderTitleStyled,
  DotsWrapperStyled,
  DotStyled
} from './InnerPopupWrapperStyled';

const InnerPopupWrapper = function InnerPopupWrapper(_ref) {
  const { steps } = _ref;
  const { popupTitle } = _ref;
  const { currentStep } = _ref;
  const { children } = _ref;
  const { isError } = _ref;
  const { t } = _ref;
  return /* #__PURE__ */ React.createElement(
    CardStyled,
    null,
    isError
      ? /* #__PURE__ */ React.createElement(MyAccountError, {
          generalError: true,
          centered: true
        })
      : /* #__PURE__ */ React.createElement(
          WrapperStyled,
          null,
          /* #__PURE__ */ React.createElement(
            HeaderStyled,
            null,
            /* #__PURE__ */ React.createElement(
              DotsWrapperStyled,
              {
                currentStep
              },
              steps > 1 &&
                Array.from(
                  {
                    length: steps
                  },
                  function(_, k) {
                    return /* #__PURE__ */ React.createElement(DotStyled, {
                      key: k
                    });
                  }
                )
            ),
            /* #__PURE__ */ React.createElement(
              HeaderTitleStyled,
              null,
              t(popupTitle)
            )
          ),
          children
        )
  );
};

InnerPopupWrapper.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { InnerPopupWrapper as PureInnerPopupWrapper };
export default withTranslation()(labeling()(InnerPopupWrapper));
