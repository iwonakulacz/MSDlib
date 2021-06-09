import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import updateSubscription from 'api/Customer/updateSubscription';
import { dateFormat } from 'util/planHelper';
import checkmarkIcon from 'assets/images/checkmark.svg';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import InnerPopupWrapper from 'components/InnerPopupWrapper';
import Loader from 'components/Loader';
import {
  ContentStyled,
  TitleStyled,
  TextStyled,
  ButtonWrapperStyled
} from 'components/InnerPopupWrapper/InnerPopupWrapperStyled';
import {
  ReasonsWrapper,
  StyledItem,
  StrongStyled
} from './UpdateSubscriptionStyled';
import { cancellationReasons, content } from './UpdateSubscription.const';

const UpdateSubscription = /* #__PURE__ */ (function(_Component) {
  _inherits(UpdateSubscription, _Component);

  const _super = _createSuper(UpdateSubscription);

  function UpdateSubscription(props) {
    let _this;

    _classCallCheck(this, UpdateSubscription);

    _this = _super.call(this, props);
    _this.unsubscribe = /* #__PURE__ */ _asyncToGenerator(
      /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
        let offerDetails;
        let checkedReason;
        let response;
        return _regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  offerDetails = _this.props.offerDetails;
                  checkedReason = _this.state.checkedReason;
                  _context.prev = 2;

                  _this.setState({
                    isLoading: true
                  });

                  _context.next = 6;
                  return updateSubscription({
                    offerId: offerDetails.offerId,
                    status: 'cancelled',
                    cancellationType: 'userCancel',
                    cancellationReason: checkedReason
                  });

                case 6:
                  response = _context.sent;

                  if (response.errors.length) {
                    _this.setState({
                      isError: true,
                      isLoading: false
                    });
                  } else {
                    _this.setState({
                      currentStep: 2,
                      isLoading: false
                    });
                  }

                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context.catch(2);

                  _this.setState({
                    isError: true,
                    isLoading: false
                  });

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[2, 10]]
        );
      })
    );
    _this.resubscribe = /* #__PURE__ */ _asyncToGenerator(
      /* #__PURE__ */ _regeneratorRuntime.mark(function _callee2() {
        let offerDetails;
        let response;
        return _regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  offerDetails = _this.props.offerDetails;
                  _context2.prev = 1;

                  _this.setState({
                    isLoading: true
                  });

                  _context2.next = 5;
                  return updateSubscription({
                    offerId: offerDetails.offerId,
                    status: 'active'
                  });

                case 5:
                  response = _context2.sent;

                  if (response.errors.length) {
                    _this.setState({
                      isError: true,
                      isLoading: false
                    });
                  } else {
                    _this.setState({
                      currentStep: 2,
                      isLoading: false
                    });
                  }

                  _context2.next = 12;
                  break;

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2.catch(1);

                  _this.setState({
                    isError: true,
                    isLoading: false
                  });

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[1, 9]]
        );
      })
    );
    _this.state = {
      checkedReason: '',
      isError: false,
      isLoading: false,
      currentStep: 1
    };
    return _this;
  }

  _createClass(UpdateSubscription, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$state = this.state;
        const { checkedReason } = _this$state;
        const { isError } = _this$state;
        const { isLoading } = _this$state;
        const { currentStep } = _this$state;
        const _this$props = this.props;
        const { hideInnerPopup } = _this$props;
        const { offerDetails } = _this$props;
        const { updateList } = _this$props;
        const { action } = _this$props;
        const { t } = _this$props;
        const price = offerDetails.price ? offerDetails.price.slice(0, -1) : '';
        const priceRounded = Math.round(price * 100) / 100;
        const currency = offerDetails.price ? offerDetails.price.slice(-1) : '';
        const popupContent = content[action][currentStep - 1];
        const resubscribeText = /* #__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* #__PURE__ */ React.createElement(
            'b',
            null,
            ''.concat(priceRounded).concat(currency)
          ),
          ' ',
          t(popupContent.startedFrom),
          ' ',
          /* #__PURE__ */ React.createElement(
            'b',
            null,
            dateFormat(offerDetails.expiresAt),
            '.'
          )
        );
        return /* #__PURE__ */ React.createElement(
          InnerPopupWrapper,
          {
            steps: 2,
            popupTitle: t('Manage your plan'),
            isError,
            currentStep
          },
          currentStep === 1
            ? /* #__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* #__PURE__ */ React.createElement(
                  ContentStyled,
                  null,
                  /* #__PURE__ */ React.createElement(
                    TitleStyled,
                    null,
                    t(popupContent.title)
                  ),
                  /* #__PURE__ */ React.createElement(
                    TextStyled,
                    null,
                    t(popupContent.text1),
                    ' ',
                    /* #__PURE__ */ React.createElement(
                      StrongStyled,
                      null,
                      t(popupContent.buttonText)
                    ),
                    ' ',
                    t(popupContent.text2),
                    ' ',
                    action === 'resubscribe' && resubscribeText
                  ),
                  popupContent.reasons &&
                    /* #__PURE__ */ React.createElement(
                      ReasonsWrapper,
                      null,
                      cancellationReasons.map(function(reason) {
                        return /* #__PURE__ */ React.createElement(
                          StyledItem,
                          {
                            key: reason.key
                          },
                          /* #__PURE__ */ React.createElement(
                            Checkbox,
                            {
                              isRadioButton: true,
                              onClickFn: function onClickFn() {
                                return _this2.setState({
                                  checkedReason: reason.value
                                });
                              },
                              checked: reason.value === checkedReason
                            },
                            t(reason.value)
                          )
                        );
                      })
                    )
                ),
                /* #__PURE__ */ React.createElement(
                  ButtonWrapperStyled,
                  {
                    removeMargin: action === 'unsubscribe'
                  },
                  /* #__PURE__ */ React.createElement(
                    Button,
                    {
                      theme: 'simple',
                      onClickFn: hideInnerPopup
                    },
                    t('No, thanks')
                  ),
                  /* #__PURE__ */ React.createElement(
                    Button,
                    {
                      theme: popupContent.buttonTheme,
                      onClickFn: this[action],
                      disabled:
                        (action === 'unsubscribe' && checkedReason === '') ||
                        isLoading
                    },
                    (isLoading &&
                      /* #__PURE__ */ React.createElement(Loader, {
                        buttonLoader: true,
                        color: '#ffffff'
                      })) ||
                      t(popupContent.buttonText)
                  )
                )
              )
            : /* #__PURE__ */ React.createElement(
                ContentStyled,
                null,
                /* #__PURE__ */ React.createElement('img', {
                  src: checkmarkIcon,
                  alt: 'checkmark icon'
                }),
                /* #__PURE__ */ React.createElement(
                  TitleStyled,
                  null,
                  t(popupContent.title)
                ),
                /* #__PURE__ */ React.createElement(
                  TextStyled,
                  null,
                  t(popupContent.text),
                  ' ',
                  action === 'resubscribe' && resubscribeText,
                  /* #__PURE__ */ React.createElement(
                    'b',
                    null,
                    dateFormat(offerDetails.expiresAt)
                  ),
                  '.'
                ),
                /* #__PURE__ */ React.createElement(
                  Button,
                  {
                    width: 'auto',
                    margin: '30px auto 0 auto',
                    onClickFn: function onClickFn() {
                      hideInnerPopup();
                      updateList();
                    }
                  },
                  t(popupContent.buttonText)
                )
              )
        );
      }
    }
  ]);

  return UpdateSubscription;
})(Component);

UpdateSubscription.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { UpdateSubscription as PureUpdateSubscription };
export default withTranslation()(labeling()(UpdateSubscription));
