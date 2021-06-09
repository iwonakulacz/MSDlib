import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'components/Input';
import EmailInput from 'components/EmailInput';
import DateInput from 'components/DateInput';
import Select from 'components/Select/Select';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { updateCaptureAnswers } from 'api';
import { validateEmailField } from 'util/validators';
import history from '../../../history';
import useInput from './useInput';
import {
  CaptureFormStyled,
  CaptureRowStyled,
  CaptureGroupStyled,
  CaptureBoxStyled,
  CaptureQuestionStyled,
  CaptureError
} from './CaptureFormStyled';

const CaptureForm = function CaptureForm(_ref) {
  const { settings } = _ref;
  const { redirectUrl } = _ref;

  const _useTranslation = useTranslation();
  const _useTranslation2 = _slicedToArray(_useTranslation, 1);
  const t = _useTranslation2[0];

  const _useState = useState(false);
  const _useState2 = _slicedToArray(_useState, 2);
  const processing = _useState2[0];
  const setProcessing = _useState2[1];

  const _useState3 = useState([]);
  const _useState4 = _slicedToArray(_useState3, 2);
  const customSettings = _useState4[0];
  const setCustomSetting = _useState4[1];

  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const birthDate = useInput('');
  const companyName = useInput('');
  const phoneNumber = useInput('');
  const address = useInput('');
  const address2 = useInput('');
  const city = useInput('');
  const state = useInput('');
  const postCode = useInput('');
  let isError = false;

  const setIsError = function setIsError(v) {
    isError = v;
  };

  useEffect(function() {
    for (let i = 0; i < settings.length; i += 1) {
      const item = settings[i];

      if (item.key === 'firstNameLastName' && item.answer) {
        firstName.setValue(item.answer.firstName);
        lastName.setValue(item.answer.lastName);
      }

      if (item.key === 'birthDate' && item.answer)
        birthDate.setValue(item.answer);
      if (item.key === 'companyName' && item.answer)
        companyName.setValue(item.answer);
      if (item.key === 'phoneNumber' && item.answer)
        phoneNumber.setValue(item.answer);

      if (item.key === 'address' && item.answer) {
        address.setValue(item.answer.address);
        address2.setValue(item.answer.address2);
        city.setValue(item.answer.city);
        state.setValue(item.answer.state);
        postCode.setValue(item.answer.postCode);
      }
    }

    const transformedSettings = settings
      .filter(function(item) {
        return item.key.startsWith('custom') && item.enabled;
      })
      .map(function(item) {
        return _objectSpread(
          _objectSpread({}, item),
          {},
          {
            value: item.answer ? item.answer : '',
            values: item.value
              ? item.value.split(';').map(function(i) {
                  const value = i.trim();
                  const label = value;
                  return {
                    value,
                    label
                  };
                })
              : []
          }
        );
      });
    setCustomSetting(transformedSettings);
  }, []);

  const getSettingByKey = function getSettingByKey(key) {
    return settings.find(function(setting) {
      return setting.key === key;
    });
  };

  const isRequired = function isRequired(key) {
    const setting = getSettingByKey(key);
    return setting === null || setting === void 0 ? void 0 : setting.required;
  };

  const isEnabled = function isEnabled(key) {
    const setting = getSettingByKey(key);
    return setting === null || setting === void 0 ? void 0 : setting.enabled;
  };

  const validateNames = function validateNames() {
    if (!firstName.value) firstName.setError(t('First Name is required'));
    if (!lastName.value) lastName.setError(t('Last Name is required'));
    if (!firstName.value || !lastName.value) setIsError(true);
  };

  const validateAddress = function validateAddress() {
    if (!isRequired('address')) return;

    if (!address.value || !city || !state || !postCode) {
      setIsError(true);
    }

    if (!address.value) address.setError(t('Address is required'));
    if (!city.value) city.setError(t('City is required'));
    if (!state.value) state.setError(t('State is required'));
    if (!postCode.value) postCode.setError(t('Post code is required'));
  };

  const validateEmail = function validateEmail() {
    const message = validateEmailField(email.value);

    if (message) {
      email.setError(t(message));
      setIsError(true);
    }
  };

  const validateCompany = function validateCompany() {
    if (!companyName.value) {
      companyName.setError(t('Company name is required'));
      setIsError(true);
    }
  };

  const validatePhone = function validatePhone() {
    if (!phoneNumber.value) {
      phoneNumber.setError(t('Phone number is required'));
      setIsError(true);
    }
  };

  const validateBirthDate = function validateBirthDate() {
    if (!birthDate.value) {
      birthDate.setError(t('Birth date is required'));
      setIsError(true);
    }
  };

  const validateCustomSettings = function validateCustomSettings() {
    const newArr = customSettings.map(function(item) {
      if (item.enabled && item.required && !item.value) {
        setIsError(true);
        return _objectSpread(
          _objectSpread({}, item),
          {},
          {
            error: t('Answer on that question is required')
          }
        );
      }

      return _objectSpread(
        _objectSpread({}, item),
        {},
        {
          error: ''
        }
      );
    });
    setCustomSetting(newArr);
  };

  const validateFields = function validateFields() {
    setIsError(false);
    if (isEnabled('firstNameLastName') && isRequired('firstNameLastName'))
      validateNames();
    if (isEnabled('address') && isRequired('address')) validateAddress();
    if (isEnabled('email') && isRequired('email')) validateEmail();
    if (isEnabled('companyName') && isRequired('companyName'))
      validateCompany();
    if (isEnabled('phoneNumber') && isRequired('phoneNumber')) validatePhone();
    if (isEnabled('birthDate') && isRequired('birthDate')) validateBirthDate();
    validateCustomSettings();
  };

  const handleCustomSetting = function handleCustomSetting(key, option) {
    const newArr = customSettings.map(function(item) {
      return _objectSpread(
        _objectSpread({}, item),
        {},
        {
          value: item.key === key ? option.value : item.value
        }
      );
    });
    setCustomSetting(newArr);
  };

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields();

    if (!isError) {
      const customAnswers = customSettings.map(function(item) {
        return {
          questionId: item.key,
          question: item.question,
          value: item.value
        };
      });
      setProcessing(true);
      updateCaptureAnswers({
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        address2: address.value,
        city: city.value,
        state: state.value,
        postCode: postCode.value,
        email: email.value,
        birthDate: birthDate.value,
        companyName: companyName.value,
        phoneNumber: phoneNumber.value,
        customAnswers
      }).then(function() {
        setProcessing(false);
        const currentRedirection = redirectUrl.shift();
        history.push(currentRedirection, {
          redirectUrl
        });
      });
    }
  };

  return /* #__PURE__ */ React.createElement(
    CaptureFormStyled,
    {
      onSubmit: handleSubmit,
      noValidate: true
    },
    isEnabled('firstNameLastName') &&
      /* #__PURE__ */ React.createElement(
        CaptureRowStyled,
        null,
        /* #__PURE__ */ React.createElement(Input, {
          placeholder: t('First Name'),
          value: firstName.value,
          error: firstName.error,
          onChange: function onChange(val) {
            return firstName.setValue(val);
          },
          onBlur: function onBlur() {
            return validateNames();
          },
          required: isRequired('firstNameLastName')
        }),
        /* #__PURE__ */ React.createElement(Input, {
          placeholder: t('Last Name'),
          value: lastName.value,
          error: lastName.error,
          onChange: function onChange(val) {
            return lastName.setValue(val);
          },
          onBlur: function onBlur() {
            return validateNames();
          },
          required: isRequired('firstNameLastName')
        })
      ),
    isEnabled('email') &&
      /* #__PURE__ */ React.createElement(EmailInput, {
        label: t('Confirm Email'),
        value: email.value,
        error: email.error,
        onChange: function onChange(val) {
          return email.setValue(val);
        },
        onBlur: function onBlur() {
          return validateEmail();
        },
        required: isRequired('email')
      }),
    isEnabled('birthDate') &&
      /* #__PURE__ */ React.createElement(DateInput, {
        label: t('Date of Birth'),
        value: birthDate.value,
        error: birthDate.error,
        onChange: function onChange(val) {
          return birthDate.setValue(val);
        },
        onBlur: function onBlur() {
          return validateBirthDate();
        },
        required: isRequired('birthDate')
      }),
    isEnabled('companyName') &&
      /* #__PURE__ */ React.createElement(Input, {
        placeholder: t('Company'),
        value: companyName.value,
        error: companyName.error,
        onChange: function onChange(val) {
          return companyName.setValue(val);
        },
        onBlur: function onBlur() {
          return validateCompany();
        },
        required: isRequired('companyName')
      }),
    isEnabled('phoneNumber') &&
      /* #__PURE__ */ React.createElement(Input, {
        placeholder: t('Mobile phone'),
        value: phoneNumber.value,
        error: phoneNumber.error,
        onChange: function onChange(val) {
          return phoneNumber.setValue(val);
        },
        onBlur: function onBlur() {
          return validatePhone();
        },
        required: isRequired('phoneNumber')
      }),
    isEnabled('address') &&
      /* #__PURE__ */ React.createElement(
        CaptureGroupStyled,
        null,
        /* #__PURE__ */ React.createElement(Input, {
          placeholder: t('Address line 1'),
          value: address.value,
          error: address.error,
          onChange: function onChange(val) {
            return address.setValue(val);
          },
          onBlur: function onBlur() {
            return validateAddress();
          },
          required: isRequired('address')
        }),
        /* #__PURE__ */ React.createElement(Input, {
          placeholder: t('Address line 2'),
          value: address2.value,
          onChange: function onChange(val) {
            return address2.setValue(val);
          }
        }),
        /* #__PURE__ */ React.createElement(Input, {
          placeholder: t('City'),
          value: city.value,
          error: city.error,
          onChange: function onChange(val) {
            return city.setValue(val);
          },
          onBlur: function onBlur() {
            return validateAddress();
          },
          required: isRequired('address')
        }),
        /* #__PURE__ */ React.createElement(
          CaptureRowStyled,
          null,
          /* #__PURE__ */ React.createElement(Input, {
            placeholder: t('State/Region'),
            value: state.value,
            error: state.error,
            onChange: function onChange(val) {
              return state.setValue(val);
            },
            onBlur: function onBlur() {
              return validateAddress();
            },
            required: isRequired('address')
          }),
          /* #__PURE__ */ React.createElement(Input, {
            placeholder: t('ZIP/Postal code'),
            value: postCode.value,
            error: postCode.error,
            onChange: function onChange(val) {
              return postCode.setValue(val);
            },
            onBlur: function onBlur() {
              return validateAddress();
            },
            required: isRequired('address')
          })
        )
      ),
    customSettings.map(function(setting) {
      if (setting.values.length === 1 && isEnabled(setting.key))
        return /* #__PURE__ */ React.createElement(
          CaptureBoxStyled,
          {
            key: setting.key
          },
          /* #__PURE__ */ React.createElement(
            CaptureQuestionStyled,
            {
              required: setting.required
            },
            setting.question
          ),
          /* #__PURE__ */ React.createElement(
            Checkbox,
            {
              key: setting.key,
              onClickFn: function onClickFn() {
                return handleCustomSetting(setting.key, {
                  value: setting.value ? '' : setting.values[0].value,
                  label: setting.value ? '' : setting.values[0].value
                });
              },
              checked: setting.value === setting.values[0].value
            },
            setting.values[0].value
          ),
          /* #__PURE__ */ React.createElement(CaptureError, null, setting.error)
        );
      if (setting.values.length === 2 && isEnabled(setting.key))
        return /* #__PURE__ */ React.createElement(
          CaptureBoxStyled,
          {
            key: setting.key
          },
          /* #__PURE__ */ React.createElement(
            CaptureQuestionStyled,
            {
              required: setting.required
            },
            setting.question
          ),
          /* #__PURE__ */ React.createElement(
            Checkbox,
            {
              key: ''.concat(setting.key, '-01'),
              onClickFn: function onClickFn() {
                return handleCustomSetting(setting.key, {
                  value: setting.values[0].value,
                  label: setting.values[0].value
                });
              },
              isRadioButton: true,
              checked: setting.value === setting.values[0].value
            },
            setting.values[0].value
          ),
          /* #__PURE__ */ React.createElement(
            Checkbox,
            {
              key: ''.concat(setting.key, '-02'),
              onClickFn: function onClickFn() {
                return handleCustomSetting(setting.key, {
                  value: setting.values[1].value,
                  label: setting.values[1].value
                });
              },
              isRadioButton: true,
              checked: setting.value === setting.values[1].value
            },
            setting.values[1].value
          ),
          /* #__PURE__ */ React.createElement(CaptureError, null, setting.error)
        );
      if (setting.values.length > 2 && isEnabled(setting.key))
        return /* #__PURE__ */ React.createElement(
          CaptureBoxStyled,
          {
            key: setting.key
          },
          /* #__PURE__ */ React.createElement(Select, {
            label: setting.question,
            name: setting.key,
            value: setting.value
              ? {
                  value: setting.value,
                  label: setting.value
                }
              : null,
            values: setting.values,
            required: setting.required,
            onChange: handleCustomSetting
          }),
          /* #__PURE__ */ React.createElement(CaptureError, null, setting.error)
        );
      if (isEnabled(setting.key))
        return /* #__PURE__ */ React.createElement(Input, {
          key: setting.key,
          placeholder: setting.question,
          value: setting.value,
          error: setting.error,
          onChange: function onChange(val) {
            return handleCustomSetting(setting.key, {
              value: val
            });
          },
          onBlur: function onBlur() {
            return validateCustomSettings();
          },
          required: setting.required
        });
      return /* #__PURE__ */ React.createElement('div', null);
    }),
    /* #__PURE__ */ React.createElement(
      Button,
      {
        type: 'submit',
        size: 'big',
        theme: 'confirm',
        margin: '10px 0'
      },
      processing
        ? /* #__PURE__ */ React.createElement(Loader, {
            buttonLoader: true,
            color: '#ffffff'
          })
        : t('Continue')
    )
  );
};

CaptureForm.defaultProps = {
  settings: [],
  redirectUrl: []
};
export default CaptureForm;
