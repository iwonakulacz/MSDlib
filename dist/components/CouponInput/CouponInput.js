import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_FAIL } from 'components/Input';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { ReactComponent as CloseIcon } from 'assets/images/xmark.svg';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import {
  InputComponentStyled,
  MessageStyled,
  InputElementWrapperStyled,
  InputElementStyled,
  CloseButtonStyled
} from './CouponInputStyled';

const FADE_OUT_DELAY = 5000;

const CouponInput = /* #__PURE__ */ (function(_Component) {
  _inherits(CouponInput, _Component);

  const _super = _createSuper(CouponInput);

  function CouponInput(props) {
    let _this;

    _classCallCheck(this, CouponInput);

    _this = _super.call(this, props);

    _this.disableSuppressMessage = function() {
      return _this.setState({
        suppressMessage: false
      });
    };

    _this.clearFadeOutTimeout = function() {
      const { timeoutId } = _this.state;

      if (timeoutId) {
        clearTimeout(timeoutId);

        _this.setState({
          timeoutId: 0
        });
      }
    };

    _this.scheduleFadeOut = function() {
      const timeoutId = setTimeout(function() {
        _this.setState({
          suppressMessage: true,
          timeoutId: 0
        });
      }, FADE_OUT_DELAY);

      _this.setState({
        timeoutId
      });
    };

    _this.handleSubmit = /* #__PURE__ */ (function() {
      const _ref = _asyncToGenerator(
        /* #__PURE__ */ _regeneratorRuntime.mark(function _callee(event) {
          let onSubmit;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  onSubmit = _this.props.onSubmit;
                  event.target.blur();
                  _context.next = 4;
                  return onSubmit(event.target.value);

                case 4:
                  _this.setState({
                    suppressMessage: false
                  });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );

      return function(_x) {
        return _ref.apply(this, arguments);
      };
    })();

    _this.onRedeemClick = /* #__PURE__ */ _asyncToGenerator(
      /* #__PURE__ */ _regeneratorRuntime.mark(function _callee2() {
        let isOpened;
        let _this$props;
        let onSubmit;
        let onInputToggle;
        let value;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                isOpened = _this.state.isOpened;
                (_this$props = _this.props),
                  (onSubmit = _this$props.onSubmit),
                  (onInputToggle = _this$props.onInputToggle),
                  (value = _this$props.value);

                if (isOpened) {
                  _context2.next = 7;
                  break;
                }

                onInputToggle();

                _this.setState({
                  isOpened: true
                });

                _context2.next = 9;
                break;

              case 7:
                _context2.next = 9;
                return onSubmit(value);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );

    _this.onCloseClick = function() {
      const { isOpened } = _this.state;
      const { onClose } = _this.props;

      if (isOpened) {
        _this.setState({
          isOpened: false
        });

        onClose();
      }
    };

    _this.state = {
      suppressMessage: false,
      timeoutId: 0,
      isOpened: false
    };
    return _this;
  }

  _createClass(CouponInput, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        const _this$props2 = this.props;
        const { showMessage } = _this$props2;
        const { message } = _this$props2;
        const { messageType } = _this$props2;

        if (
          showMessage !== prevProps.showMessage ||
          message !== prevProps.message ||
          messageType !== prevProps.messageType
        ) {
          this.disableSuppressMessage();
          this.clearFadeOutTimeout();

          if (showMessage) {
            this.scheduleFadeOut();
          }
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.clearFadeOutTimeout();
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props3 = this.props;
        const { showMessage } = _this$props3;
        const { fullWidth } = _this$props3;
        const { message } = _this$props3;
        const { messageType } = _this$props3;
        const { value } = _this$props3;
        const _onChange = _this$props3.onChange;
        const { couponLoading } = _this$props3;
        const { t } = _this$props3;
        const _this$state = this.state;
        const { suppressMessage } = _this$state;
        const { isOpened } = _this$state;
        return /* #__PURE__ */ React.createElement(
          InputComponentStyled,
          {
            isOpened,
            fullWidth
          },
          /* #__PURE__ */ React.createElement(
            InputElementWrapperStyled,
            {
              showMessage: showMessage && !suppressMessage,
              messageType
            },
            /* #__PURE__ */ React.createElement(
              CloseButtonStyled,
              {
                onClick: function onClick() {
                  return _this2.onCloseClick();
                },
                isInputOpened: isOpened
              },
              CloseIcon && /* #__PURE__ */ React.createElement(CloseIcon, null)
            ),
            /* #__PURE__ */ React.createElement(InputElementStyled, {
              isOpened,
              placeholder: t('Your coupon'),
              onKeyDown: function onKeyDown(event) {
                if (event.key === 'Enter') {
                  _this2.handleSubmit(event);
                }
              },
              onFocus: function onFocus() {
                _this2.setState({
                  suppressMessage: true
                });
              },
              autoComplete: 'off',
              value,
              onChange: function onChange(event) {
                return _onChange(event.target.value);
              },
              type: 'text',
              readOnly: couponLoading,
              fullWidth,
              'aria-label': t('Your coupon'),
              'aria-required': false
            }),
            /* #__PURE__ */ React.createElement(
              Button,
              {
                width: 'auto',
                onClickFn: function onClickFn() {
                  return _this2.onRedeemClick();
                }
              },
              /* #__PURE__ */ React.createElement(
                React.Fragment,
                null,
                couponLoading &&
                  /* #__PURE__ */ React.createElement(Loader, {
                    buttonLoader: true,
                    color: '#ffffff'
                  }),
                !couponLoading && isOpened && t('Redeem'),
                !couponLoading && !isOpened && t('Redeem coupon')
              )
            )
          ),
          isOpened &&
            /* #__PURE__ */ React.createElement(
              MessageStyled,
              {
                showMessage: showMessage && !suppressMessage,
                messageType
              },
              message
            )
        );
      }
    }
  ]);

  return CouponInput;
})(Component);

CouponInput.defaultProps = {
  value: '',
  showMessage: false,
  fullWidth: false,
  message: null,
  messageType: MESSAGE_TYPE_FAIL,
  onChange: function onChange() {},
  onClose: function onClose() {},
  onInputToggle: function onInputToggle() {},
  t: function t(k) {
    return k;
  },
  couponLoading: false
};
export { CouponInput as PureCouponInput };
export default withTranslation()(labeling()(CouponInput));
