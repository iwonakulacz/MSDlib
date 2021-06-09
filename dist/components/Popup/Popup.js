import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';

/* eslint-disable no-debugger */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import submitConsents from 'api/Customer/submitConsents';
import getCustomerConsents from 'api/Customer/getCustomerConsents';
import MyAccountConsents from 'components/MyAccountConsents';
import {
  WrapperStyled,
  ContentStyled,
  TitleStyled,
  TextStyled,
  ImageStyled,
  ButtonWrapperStyled,
  ButtonStyled,
  HeaderStyled,
  DotStyled,
  HeaderTitleStyled,
  DotsWrapperStyled,
  InnerWrapperStyled
} from './PopupStyled';
import popupData from './Popup.const';

const Popup = /* #__PURE__ */ (function(_Component) {
  _inherits(Popup, _Component);

  const _super = _createSuper(Popup);

  function Popup(props) {
    let _this;

    _classCallCheck(this, Popup);

    _this = _super.call(this, props);

    _this.renderNextStep = function() {
      _this.setState(function(prevState) {
        return {
          step: prevState.step + 1
        };
      });
    };

    _this.handleSubmitConsents = function() {
      const { updatedConsents } = _this.state;
      const { setConsents } = _this.props;
      const payload = updatedConsents.map(function(item) {
        return {
          name: item.name,
          version: item.newestVersion,
          state: item.state
        };
      });

      _this.setState({
        isLoading: true
      });

      submitConsents([], [], payload).then(function() {
        getCustomerConsents().then(function(resp) {
          setConsents(resp.responseData.consents);
        });
      });
    };

    _this.state = {
      step: 1,
      updatedConsents: [],
      isLoading: false,
      allowSubmitConsents: false
    };
    return _this;
  }

  _createClass(Popup, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const { consents } = this.props;
        this.setState({
          updatedConsents: consents
        });
        this.checkAccess(consents);
      }
    },
    {
      key: 'checkAccess',
      value: function checkAccess(items) {
        const notCheckedTerm = items.find(function(item) {
          return item.required && item.state === 'declined';
        });

        if (notCheckedTerm) {
          this.setState({
            allowSubmitConsents: false
          });
        } else {
          this.setState({
            allowSubmitConsents: true
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props = this.props;
        const { popupType } = _this$props;
        const { consents } = _this$props;
        const { setConsents } = _this$props;
        const { hidePopup } = _this$props;
        const { t } = _this$props;
        const _this$state = this.state;
        const { step } = _this$state;
        const { isLoading } = _this$state;
        const { allowSubmitConsents } = _this$state;
        const stepData = popupData[popupType].steps[step - 1];
        const { steps } = popupData[popupType];
        return /* #__PURE__ */ React.createElement(
          WrapperStyled,
          null,
          /* #__PURE__ */ React.createElement(
            HeaderStyled,
            null,
            /* #__PURE__ */ React.createElement(
              DotsWrapperStyled,
              {
                currentStep: step
              },
              steps.length > 1 &&
                steps.map(function(item) {
                  return /* #__PURE__ */ React.createElement(DotStyled, {
                    key: item.title
                  });
                })
            ),
            /* #__PURE__ */ React.createElement(
              HeaderTitleStyled,
              null,
              t(stepData.headerTitle)
            )
          ),
          /* #__PURE__ */ React.createElement(
            ContentStyled,
            {
              step: consents.length ? step : 1
            },
            stepData.icon &&
              /* #__PURE__ */ React.createElement(ImageStyled, {
                src: stepData.icon
              }),
            /* #__PURE__ */ React.createElement(
              TitleStyled,
              {
                step
              },
              t(stepData.title)
            ),
            /* #__PURE__ */ React.createElement(
              TextStyled,
              {
                step
              },
              t(stepData.text)
            ),
            step === 2 &&
              consents &&
              /* #__PURE__ */ React.createElement(MyAccountConsents, {
                consents,
                showConsentsOnly: true,
                saveConsents: function saveConsents(items) {
                  _this2.setState({
                    updatedConsents: items
                  });

                  _this2.checkAccess(items);
                },
                setConsents
              })
          ),
          /* #__PURE__ */ React.createElement(
            ButtonWrapperStyled,
            null,
            /* #__PURE__ */ React.createElement(
              InnerWrapperStyled,
              null,
              stepData.undoButton &&
                /* #__PURE__ */ React.createElement(
                  ButtonStyled,
                  {
                    onClickFn: hidePopup,
                    theme: 'secondary',
                    width: 'auto'
                  },
                  t(stepData.undoButton)
                ),
              /* #__PURE__ */ React.createElement(
                ButtonStyled,
                {
                  onClickFn: this[stepData.buttonAction],
                  disabled: step === 2 && !allowSubmitConsents,
                  width: 'auto'
                },
                (isLoading &&
                  /* #__PURE__ */ React.createElement(Loader, {
                    buttonLoader: true,
                    color: '#ffffff'
                  })) ||
                  t(stepData.buttonText)
              )
            )
          ),
          /* #__PURE__ */ React.createElement(Footer, {
            isCheckout: false
          })
        );
      }
    }
  ]);

  return Popup;
})(Component);

Popup.defaultProps = {
  popupType: '',
  setConsents: function setConsents() {},
  consents: [],
  t: function t(k) {
    return k;
  }
};
export { Popup as PurePopup };
export default withTranslation()(labeling()(Popup));
