import _toConsumableArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray';
import _defineProperty from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Card from 'components/Card';
import MyAccountInput from 'components/MyAccountInput';
import {
  ButtonStyled,
  ButtonWrapperStyled,
  SuccessMessageStyled
} from 'components/MyAccountConsents/MyAccountConsentsStyled';
import { validateEmailField } from 'util/validators';
import updateCustomer from 'api/Customer/updateCustomer';
import updateCaptureAnswers from 'api/Customer/updateCaptureAnswers';
import Auth from 'services/auth';
import SkeletonWrapper from 'components/SkeletonWrapper';
import Loader from 'components/Loader';
import { WrapStyled, FormStyled } from './ProfileDetailsStyled';

const InputsData = [
  {
    id: 'firstName',
    label: 'First Name',
    onBlur: 'areNamesValid',
    type: 'text'
  },
  {
    id: 'lastName',
    label: 'Last Name',
    onBlur: 'areNamesValid',
    type: 'text'
  },
  {
    id: 'email',
    label: 'E-mail',
    onBlur: 'areEmailAndPasswordValid',
    type: 'email'
  },
  {
    id: 'confirmationPassword',
    label: 'Confirmation password',
    onBlur: 'areEmailAndPasswordValid',
    type: 'password'
  },
  {
    id: 'birthDate',
    label: 'Birth Date',
    onBlur: '',
    type: 'date'
  },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    onBlur: 'isPhoneNumberValid',
    type: 'tel'
  },
  {
    id: 'companyName',
    label: 'Company Name',
    onBlur: 'isCompanyNameValid',
    type: 'text'
  }
];

const ProfileDetails = /* #__PURE__ */ (function(_Component) {
  _inherits(ProfileDetails, _Component);

  const _super = _createSuper(ProfileDetails);

  function ProfileDetails(props) {
    let _this;

    _classCallCheck(this, ProfileDetails);

    _this = _super.call(this, props);

    _this.updateProfile = function(e) {
      e.preventDefault();
      const { updated } = _this.state;
      const _this$props = _this.props;
      const { email } = _this$props;
      const { setCurrentUser } = _this$props;
      const { updateCaptureOption } = _this$props;
      const { t } = _this$props;
      const shouldLogOut = updated.email !== email;

      if (_this.areNamesValid() && _this.areEmailAndPasswordValid()) {
        _this.setState({
          isSubmittingPending: true
        });

        updateCustomer({
          firstName: updated.firstName,
          lastName: updated.lastName,
          email: updated.email !== email ? updated.email : '',
          confirmationPassword:
            updated.email !== email ? updated.confirmationPassword : ''
        }).then(function(response) {
          _this.setState({
            isSubmittingPending: false
          });

          if (response.errors.length) {
            const errorMsg = response.errors[0];
            const isEmailError = errorMsg.includes('mail');
            const isPasswordError = errorMsg.includes('confirmationPassword');

            _this.setState({
              errors: {
                confirmationPassword: isPasswordError
                  ? t('Incorect password')
                  : '',
                email: isEmailError ? errorMsg : ''
              },
              successMessage: false
            });
          } else {
            setCurrentUser(response.responseData);

            _this.setState({
              isSectionDisabled: true,
              successMessage: true
            });

            if (shouldLogOut) {
              Auth.logout(true, '?emailChanged=true');
            }
          }
        });
      }

      if (_this.isPhoneNumberValid() && _this.isCompanyNameValid()) {
        _this.setState({
          isSubmittingPending: true
        });

        updateCaptureAnswers({
          birthDate: updated.birthDate,
          companyName: updated.companyName,
          phoneNumber: updated.phoneNumber
        }).then(function() {
          updateCaptureOption({
            key: 'birthDate',
            value: updated.birthDate
          });
          updateCaptureOption({
            key: 'companyName',
            value: updated.companyName
          });
          updateCaptureOption({
            key: 'phoneNumber',
            value: updated.phoneNumber
          });

          _this.setState({
            isSubmittingPending: false,
            isSectionDisabled: true,
            successMessage: true
          });
        });
      }
    };

    _this.areNamesValid = function() {
      const { updated } = _this.state;
      const { t } = _this.props;

      if (updated.firstName.length > 50 || updated.lastName.length > 50) {
        _this.setState({
          errors: {
            firstName:
              updated.firstName.length > 50
                ? t('First name can have max 50 characters')
                : '',
            lastName:
              updated.lastName.length > 50
                ? t('Last name can have max 50 characters')
                : ''
          }
        });

        return false;
      }

      _this.setState({
        errors: {
          firstName: '',
          lastName: ''
        }
      });

      return true;
    };

    _this.areEmailAndPasswordValid = function() {
      const { updated } = _this.state;
      const _this$props2 = _this.props;
      const { email } = _this$props2;
      const { t } = _this$props2;

      if (updated.email === email) {
        _this.setState({
          errors: {
            email: ''
          }
        });

        return true;
      }

      const isEmailValid = !validateEmailField(updated.email).length;
      const isPasswordValid = !!updated.confirmationPassword;

      if (!isEmailValid || !isPasswordValid) {
        _this.setState({
          errors: {
            email: validateEmailField(updated.email),
            confirmationPassword: updated.confirmationPassword
              ? ''
              : t(
                  'Please confirm your password to proceed with changing your email address.'
                )
          }
        });

        return false;
      }

      _this.setState({
        errors: {
          email: '',
          confirmationPassword: ''
        }
      });

      return true;
    };

    _this.isPhoneNumberValid = function() {
      const { updated } = _this.state;
      const { t } = _this.props;
      const regexp = /^[0-9()+-\s]+$/;

      if (updated.phoneNumber && !regexp.test(updated.phoneNumber)) {
        _this.setState({
          errors: {
            phoneNumber: t('This is not a valid phone number')
          }
        });

        return false;
      }

      _this.setState({
        errors: {
          phoneNumber: ''
        }
      });

      return true;
    };

    _this.isCompanyNameValid = function() {
      const { updated } = _this.state;
      const { t } = _this.props;

      if (updated.companyName && updated.companyName.length > 50) {
        _this.setState({
          errors: {
            companyName:
              updated.companyName.length > 50
                ? t('Company name can have max 50 characters')
                : ''
          }
        });

        return false;
      }

      _this.setState({
        errors: {
          companyName: ''
        }
      });

      return true;
    };

    _this.handleInputChange = function(fieldName, inputValue) {
      _this.setState(function(prevState) {
        return {
          updated: _objectSpread(
            _objectSpread({}, prevState.updated),
            {},
            _defineProperty({}, fieldName, inputValue)
          )
        };
      });
    };

    _this.state = {
      updated: {
        firstName: '',
        lastName: '',
        email: '',
        confirmationPassword: '',
        birthDate: '',
        phoneNumber: '',
        companyName: ''
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        confirmationPassword: '',
        birthDate: '',
        phoneNumber: '',
        companyName: ''
      },
      isSectionDisabled: true,
      isSubmittingPending: false,
      successMessage: false
    };
    return _this;
  }

  _createClass(ProfileDetails, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this$props3 = this.props;
        const { firstName } = _this$props3;
        const { lastName } = _this$props3;
        const { email } = _this$props3;
        const { birthDate } = _this$props3;
        const { phoneNumber } = _this$props3;
        const { companyName } = _this$props3;
        const { updated } = this.state;
        this.setState({
          updated: _objectSpread(
            _objectSpread({}, updated),
            {},
            {
              firstName,
              lastName,
              email,
              birthDate: birthDate ? birthDate.answer : '',
              phoneNumber: phoneNumber ? phoneNumber.answer : '',
              companyName: companyName ? companyName.answer : ''
            }
          )
        });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        const _this$state = this.state;
        const { updated } = _this$state;
        const { isSectionDisabled } = _this$state;
        const _this$props4 = this.props;
        const { firstName } = _this$props4;
        const { lastName } = _this$props4;
        const { email } = _this$props4;
        const { birthDate } = _this$props4;
        const { phoneNumber } = _this$props4;
        const { companyName } = _this$props4;

        if (
          isSectionDisabled &&
          (firstName !== updated.firstName ||
            lastName !== updated.lastName ||
            email !== updated.email ||
            (birthDate && birthDate.answer !== updated.birthDate) ||
            (phoneNumber && phoneNumber.answer !== updated.phoneNumber) ||
            (companyName && companyName.answer !== updated.companyName))
        ) {
          this.setState({
            updated: _objectSpread(
              _objectSpread({}, updated),
              {},
              {
                firstName,
                lastName,
                email,
                confirmationPassword: '',
                birthDate: birthDate ? birthDate.answer : '',
                phoneNumber: phoneNumber ? phoneNumber.answer : '',
                companyName: companyName ? companyName.answer : ''
              }
            )
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props5 = this.props;
        const { firstName } = _this$props5;
        const { lastName } = _this$props5;
        const { email } = _this$props5;
        const { isLoading } = _this$props5;
        const { t } = _this$props5;
        const _this$state2 = this.state;
        const { updated } = _this$state2;
        const { isSectionDisabled } = _this$state2;
        const { isSubmittingPending } = _this$state2;
        const { errors } = _this$state2;
        const { successMessage } = _this$state2;
        return /* #__PURE__ */ React.createElement(
          WrapStyled,
          null,
          /* #__PURE__ */ React.createElement(
            Card,
            {
              withBorder: true
            },
            isLoading
              ? /* #__PURE__ */ React.createElement(
                  React.Fragment,
                  null,
                  _toConsumableArray(Array(3)).map(function(i, k) {
                    return (
                      /* #__PURE__ */
                      // eslint-disable-next-line react/no-array-index-key
                      React.createElement(
                        React.Fragment,
                        {
                          key: 'skeleton-item-'.concat(k)
                        },
                        /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                          width: 100,
                          margin: '0 0 12px 0'
                        }),
                        /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                          height: 40,
                          margin: '0 0 28px 0'
                        })
                      )
                    );
                  }),
                  /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                    height: 40,
                    width: 140,
                    margin: '40px 0 0 auto'
                  })
                )
              : /* #__PURE__ */ React.createElement(
                  FormStyled,
                  {
                    onSubmit: this.updateProfile
                  },
                  successMessage &&
                    /* #__PURE__ */ React.createElement(
                      SuccessMessageStyled,
                      null,
                      t('Your profile details have been changed successfully')
                    ),
                  InputsData.map(function(input) {
                    let _this2$props$input$id;

                    const shouldBeHidden =
                      typeof _this2.props[input.id] === 'object' &&
                      !((_this2$props$input$id = _this2.props[input.id]) ===
                        null || _this2$props$input$id === void 0
                        ? void 0
                        : _this2$props$input$id.enabled);
                    return !shouldBeHidden
                      ? /* #__PURE__ */ React.createElement(MyAccountInput, {
                          key: input.id,
                          id: input.id,
                          value: updated[input.id],
                          label: t(input.label),
                          onChange: function onChange(e) {
                            return _this2.handleInputChange(
                              input.id,
                              e.target.value
                            );
                          },
                          disabled: isSectionDisabled,
                          error: errors[input.id],
                          onBlur: _this2[input.onBlur],
                          type: input.type,
                          name: input.id,
                          hideInput:
                            input.id === 'confirmationPassword' &&
                            updated.email === email,
                          autoComplete:
                            input.id === 'confirmationPassword'
                              ? 'new-password'
                              : 'off'
                        })
                      : null;
                  }),
                  /* #__PURE__ */ React.createElement(
                    ButtonWrapperStyled,
                    null,
                    isSectionDisabled
                      ? /* #__PURE__ */ React.createElement(
                          ButtonStyled,
                          {
                            onClickFn: function onClickFn() {
                              return _this2.setState({
                                isSectionDisabled: false
                              });
                            },
                            width: '100%'
                          },
                          t('Edit Profile')
                        )
                      : /* #__PURE__ */ React.createElement(
                          React.Fragment,
                          null,
                          /* #__PURE__ */ React.createElement(
                            ButtonStyled,
                            {
                              theme: 'simple',
                              onClickFn: function onClickFn() {
                                return _this2.setState({
                                  isSectionDisabled: true,
                                  updated: {
                                    firstName,
                                    lastName,
                                    email,
                                    confirmationPassword: ''
                                  },
                                  errors: {
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    confirmationPassword: ''
                                  }
                                });
                              }
                            },
                            t('Cancel')
                          ),
                          /* #__PURE__ */ React.createElement(
                            ButtonStyled,
                            {
                              onClickFn: this.updateProfile,
                              disabled: isSubmittingPending,
                              type: 'submit',
                              theme: 'confirm'
                            },
                            (isSubmittingPending &&
                              /* #__PURE__ */ React.createElement(Loader, {
                                buttonLoader: true,
                                color: '#ffffff'
                              })) ||
                              t('Save')
                          )
                        )
                  )
                )
          )
        );
      }
    }
  ]);

  return ProfileDetails;
})(Component);

ProfileDetails.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  birthDate: null,
  phoneNumber: null,
  companyName: null,
  isLoading: false,
  setCurrentUser: function setCurrentUser() {},
  updateCaptureOption: function updateCaptureOption() {},
  t: function t(k) {
    return k;
  }
};
export { ProfileDetails as PureProfileDetails };
export default withTranslation()(labeling()(ProfileDetails));
