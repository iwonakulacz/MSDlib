import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import SectionHeader from 'components/SectionHeader';
import ProfileDetails from 'components/ProfileDetails';
import AddressDetails from 'components/AddressDetails';
import Password from 'components/Password';
import { getCustomer, getCaptureStatus } from 'api';
import MyAccountError from 'components/MyAccountError';
import MyAccountConsents from 'components/MyAccountConsents';
import EditPassword from 'components/EditPassword/EditPassword';
import AdditionalProfileInfo from 'components/AdditionalProfileInfo';
import { WrapStyled } from './UpdateProfileStyled';

const UpdateProfile = /* #__PURE__ */ (function(_Component) {
  _inherits(UpdateProfile, _Component);

  const _super = _createSuper(UpdateProfile);

  function UpdateProfile(props) {
    let _this;

    _classCallCheck(this, UpdateProfile);

    _this = _super.call(this, props);

    _this.getObjectByKey = function(array, key) {
      return array.find(function(setting) {
        return setting.key === key;
      });
    };

    _this.state = {
      detailsError: [],
      isUserDetailsLoading: false,
      isCaptureLoading: false,
      isConsentLoading: false
    };
    return _this;
  }

  _createClass(UpdateProfile, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this2 = this;

        const _this$props = this.props;
        const { userProfile } = _this$props;
        const { setCurrentUser } = _this$props;
        const { setUserCapture } = _this$props;

        if (!userProfile.user) {
          this.setState({
            isUserDetailsLoading: true
          });
          getCustomer()
            .then(function(response) {
              if (response.errors.length) {
                _this2.setState({
                  detailsError: response.errors
                });
              } else {
                setCurrentUser(response.responseData);
              }

              _this2.setState({
                isUserDetailsLoading: false
              });
            })
            .catch(function(err) {
              _this2.setState({
                detailsError: [err],
                isUserDetailsLoading: false
              });
            });
        }

        if (!userProfile.capture) {
          this.setState({
            isCaptureLoading: true
          });
          getCaptureStatus()
            .then(function(response) {
              if (response.errors.length) {
                _this2.setState({
                  detailsError: response.errors
                });
              } else {
                setUserCapture(response.responseData);
              }

              _this2.setState({
                isCaptureLoading: false
              });
            })
            .catch(function(err) {
              _this2.setState({
                detailsError: [err],
                isCaptureLoading: false
              });
            });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this$state = this.state;
        const { detailsError } = _this$state;
        const { isUserDetailsLoading } = _this$state;
        const { isCaptureLoading } = _this$state;
        const { isConsentLoading } = _this$state;
        const _this$props2 = this.props;
        const _this$props2$userProf = _this$props2.userProfile;
        const { user } = _this$props2$userProf;
        const { consents } = _this$props2$userProf;
        const { capture } = _this$props2$userProf;
        const { consentsError } = _this$props2$userProf;
        const { setConsents } = _this$props2;
        const { setCurrentUser } = _this$props2;
        const { updateCaptureOption } = _this$props2;
        const _showInnerPopup = _this$props2.showInnerPopup;
        const { hideInnerPopup } = _this$props2;
        const { innerPopup } = _this$props2;
        const { t } = _this$props2;
        const address =
          capture && capture.isCaptureEnabled
            ? capture.settings.filter(function(setting) {
                return setting.key === 'address';
              })[0]
            : null;
        const customSettings =
          capture && capture.isCaptureEnabled
            ? capture.settings.filter(function(setting) {
                return setting.key.startsWith('custom') && setting.enabled;
              })
            : null;
        const birthDate =
          capture && capture.isCaptureEnabled
            ? this.getObjectByKey(capture.settings, 'birthDate')
            : null;
        const companyName =
          capture && capture.isCaptureEnabled
            ? this.getObjectByKey(capture.settings, 'companyName')
            : null;
        const phoneNumber =
          capture && capture.isCaptureEnabled
            ? this.getObjectByKey(capture.settings, 'phoneNumber')
            : null;
        return /* #__PURE__ */ React.createElement(
          WrapStyled,
          null,
          innerPopup.isOpen && innerPopup.type === 'editPassword'
            ? /* #__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* #__PURE__ */ React.createElement(EditPassword, {
                  hideInnerPopup
                })
              )
            : /* #__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* #__PURE__ */ React.createElement(
                  SectionHeader,
                  {
                    marginTop: '0'
                  },
                  t('Profile details')
                ),
                detailsError.length !== 0
                  ? /* #__PURE__ */ React.createElement(MyAccountError, {
                      generalError: true
                    })
                  : /* #__PURE__ */ React.createElement(
                      React.Fragment,
                      null,
                      /* #__PURE__ */ React.createElement(ProfileDetails, {
                        firstName: user ? user.firstName : '',
                        lastName: user ? user.lastName : '',
                        email: user ? user.email : '',
                        isLoading: isUserDetailsLoading || isCaptureLoading,
                        setCurrentUser,
                        updateCaptureOption,
                        birthDate,
                        companyName,
                        phoneNumber
                      }),
                      address &&
                        address.enabled &&
                        /* #__PURE__ */ React.createElement(
                          React.Fragment,
                          null,
                          /* #__PURE__ */ React.createElement(
                            SectionHeader,
                            {
                              marginTop: '0'
                            },
                            t('Address details')
                          ),
                          /* #__PURE__ */ React.createElement(AddressDetails, {
                            data: address,
                            isLoading: isCaptureLoading,
                            updateCaptureOption
                          })
                        ),
                      /* #__PURE__ */ React.createElement(
                        SectionHeader,
                        null,
                        t('Password')
                      ),
                      /* #__PURE__ */ React.createElement(Password, {
                        showInnerPopup: function showInnerPopup() {
                          return _showInnerPopup({
                            type: 'editPassword'
                          });
                        }
                      }),
                      customSettings &&
                        customSettings.length > 0 &&
                        /* #__PURE__ */ React.createElement(
                          React.Fragment,
                          null,
                          /* #__PURE__ */ React.createElement(
                            SectionHeader,
                            {
                              marginTop: '0'
                            },
                            t('Additional Options')
                          ),
                          /* #__PURE__ */ React.createElement(
                            AdditionalProfileInfo,
                            {
                              data: customSettings,
                              updateCaptureOption
                            }
                          )
                        )
                    ),
                /* #__PURE__ */ React.createElement(
                  SectionHeader,
                  null,
                  ' ',
                  t('Terms Details')
                ),
                consentsError.length !== 0
                  ? /* #__PURE__ */ React.createElement(MyAccountError, {
                      generalError: true
                    })
                  : /* #__PURE__ */ React.createElement(MyAccountConsents, {
                      consents,
                      isLoading: isConsentLoading,
                      setConsents
                    })
              )
        );
      }
    }
  ]);

  return UpdateProfile;
})(Component);

UpdateProfile.defaultProps = {
  userProfile: {
    user: null
  },
  consentsError: '',
  t: function t(k) {
    return k;
  }
};
export { UpdateProfile as PureUpdateProfile };
export default withTranslation()(labeling()(UpdateProfile));
