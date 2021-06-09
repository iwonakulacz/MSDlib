import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'components/Card';
import Loader from 'components/Loader';
import MyAccountInput from 'components/MyAccountInput';
import Select, { mapToSelectFormat } from 'components/Select/Select';
import Checkbox from 'components/Checkbox';
import useMessage from 'hooks/useMessage';
import { updateCaptureAnswers } from 'api';
import {
  ButtonStyled,
  ButtonWrapperStyled
} from 'components/MyAccountConsents/MyAccountConsentsStyled';
import {
  WrapStyled,
  MessageStyled,
  InputWrapStyled,
  InputLabelStyled
} from './AdditionalProfileInfoStyled';

const AdditionalProfileInfo = function AdditionalProfileInfo(_ref) {
  const { data } = _ref;
  const { isLoading } = _ref;
  const { updateCaptureOption } = _ref;

  const _useTranslation = useTranslation();
  const _useTranslation2 = _slicedToArray(_useTranslation, 1);
  const t = _useTranslation2[0];

  const _useState = useState(true);
  const _useState2 = _slicedToArray(_useState, 2);
  const isSectionDisabled = _useState2[0];
  const setIsSectionDisabled = _useState2[1];

  const _useState3 = useState(false);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isPending = _useState4[0];
  const setIsPending = _useState4[1];

  const _useState5 = useState(null);
  const _useState6 = _slicedToArray(_useState5, 2);
  const customSettings = _useState6[0];
  const setCustomSettings = _useState6[1];

  const _useState7 = useState(null);
  const _useState8 = _slicedToArray(_useState7, 2);
  const initialSettings = _useState8[0];
  const setInitialSettings = _useState8[1];

  const _useMessage = useMessage();
  const _useMessage2 = _slicedToArray(_useMessage, 4);
  const message = _useMessage2[0];
  const type = _useMessage2[1];
  const setMessage = _useMessage2[2];
  const resetMessage = _useMessage2[3];

  useEffect(
    function() {
      if (data) {
        const newData = data.map(function(setting) {
          return _objectSpread(
            _objectSpread({}, setting),
            {},
            {
              value: setting.answer ? setting.answer : '',
              values: setting.value
                ? setting.value.split(';').map(function(v) {
                    return v.trim();
                  })
                : []
            }
          );
        });
        setCustomSettings(newData);
        setInitialSettings(newData);
      }
    },
    [data]
  );

  const handleCustomSetting = function handleCustomSetting(key, value) {
    const newArr = customSettings.map(function(item) {
      return _objectSpread(
        _objectSpread({}, item),
        {},
        {
          value: item.key === key ? value : item.value
        }
      );
    });
    setCustomSettings(newArr);
  };

  const onCancel = function onCancel() {
    setCustomSettings(initialSettings);
    setIsSectionDisabled(true);
  };

  const onSubmit = function onSubmit() {
    setIsPending(true);
    const customAnswers = customSettings.map(function(setting) {
      return {
        questionId: setting.key,
        question: setting.question,
        value: setting.value
      };
    });
    updateCaptureAnswers({
      customAnswers
    })
      .then(function() {
        for (let i = 0; i < customSettings.length; i += 1) {
          updateCaptureOption({
            key: customSettings[i].key,
            value: customSettings[i].value
          });
        }

        setMessage({
          message: t('Your answers have been changed successfully'),
          type: 'success'
        });
        setIsPending(false);
        setIsSectionDisabled(true);
      })
      .catch(function() {
        setMessage({
          message: t('Something went wrong. Try again later.'),
          type: 'error'
        });
        setIsPending(false);
        setIsSectionDisabled(true);
      });
  };

  return isLoading
    ? /* #__PURE__ */ React.createElement(Loader, {
        isMyAccount: true
      })
    : /* #__PURE__ */ React.createElement(
        WrapStyled,
        null,
        customSettings &&
          /* #__PURE__ */ React.createElement(
            Card,
            {
              withBorder: true
            },
            message &&
              /* #__PURE__ */ React.createElement(
                MessageStyled,
                {
                  type
                },
                message
              ),
            customSettings.map(function(setting) {
              if (setting.values.length === 0)
                return /* #__PURE__ */ React.createElement(
                  InputWrapStyled,
                  {
                    key: setting.key
                  },
                  /* #__PURE__ */ React.createElement(MyAccountInput, {
                    id: setting.key,
                    label: setting.question,
                    value: setting.value,
                    onChange: function onChange(e) {
                      return handleCustomSetting(setting.key, e.target.value);
                    },
                    disabled: isSectionDisabled
                  })
                );
              if (setting.values.length === 1)
                return /* #__PURE__ */ React.createElement(
                  InputWrapStyled,
                  {
                    key: setting.key
                  },
                  /* #__PURE__ */ React.createElement(
                    Checkbox,
                    {
                      isMyAccount: true,
                      onClickFn: function onClickFn(e, disabled) {
                        return (
                          !disabled &&
                          handleCustomSetting(
                            setting.key,
                            setting.value ? '' : setting.values[0]
                          )
                        );
                      },
                      checked: setting.value === setting.values[0],
                      disabled: isSectionDisabled
                    },
                    setting.question
                  )
                );
              if (setting.values.length === 2)
                return /* #__PURE__ */ React.createElement(
                  InputWrapStyled,
                  {
                    key: setting.key
                  },
                  /* #__PURE__ */ React.createElement(
                    InputLabelStyled,
                    {
                      required: setting.required
                    },
                    setting.question
                  ),
                  /* #__PURE__ */ React.createElement(
                    Checkbox,
                    {
                      key: ''.concat(setting.key, '-01'),
                      onClickFn: function onClickFn(e, disabled) {
                        return (
                          !disabled &&
                          handleCustomSetting(setting.key, setting.values[0])
                        );
                      },
                      isRadioButton: true,
                      disabled: isSectionDisabled,
                      checked: setting.value === setting.values[0]
                    },
                    setting.values[0]
                  ),
                  /* #__PURE__ */ React.createElement(
                    Checkbox,
                    {
                      key: ''.concat(setting.key, '-02'),
                      onClickFn: function onClickFn(e, disabled) {
                        return (
                          !disabled &&
                          handleCustomSetting(setting.key, setting.values[1])
                        );
                      },
                      isRadioButton: true,
                      disabled: isSectionDisabled,
                      checked: setting.value === setting.values[1]
                    },
                    setting.values[1]
                  )
                );
              return /* #__PURE__ */ React.createElement(
                InputWrapStyled,
                {
                  key: setting.key
                },
                /* #__PURE__ */ React.createElement(Select, {
                  isMyAccount: true,
                  id: setting.key,
                  key: setting.key,
                  label: setting.question,
                  name: setting.key,
                  value: setting.value
                    ? {
                        value: setting.value,
                        label: setting.value
                      }
                    : null,
                  values: mapToSelectFormat(setting.values),
                  disabled: isSectionDisabled,
                  onChange: function onChange(key, value) {
                    return handleCustomSetting(key, value.value);
                  }
                })
              );
            }),
            /* #__PURE__ */ React.createElement(
              ButtonWrapperStyled,
              null,
              isSectionDisabled
                ? /* #__PURE__ */ React.createElement(
                    ButtonStyled,
                    {
                      onClickFn: function onClickFn() {
                        setIsSectionDisabled(false);
                        resetMessage();
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
                        onClickFn: onCancel
                      },
                      t('Cancel')
                    ),
                    /* #__PURE__ */ React.createElement(
                      ButtonStyled,
                      {
                        onClickFn: onSubmit,
                        disabled: isPending,
                        type: 'submit',
                        theme: 'confirm'
                      },
                      (isPending &&
                        /* #__PURE__ */ React.createElement(Loader, {
                          buttonLoader: true,
                          color: '#ffffff'
                        })) ||
                        t('Save')
                    )
                  )
            )
          )
      );
};

export default AdditionalProfileInfo;
AdditionalProfileInfo.defaultProps = {
  isLoading: false,
  data: null,
  updateCaptureOption: function updateCaptureOption() {}
};
