/* istanbul ignore file */
import React from 'react';

const CreditCardExample = function CreditCardExample() {
  return /* #__PURE__ */ React.createElement(
    'form',
    {
      style: {
        alignSelf: 'flex-end',
        margin: 40,
        background: 'lightblue',
        border: 'solid 1px black'
      }
    },
    /* #__PURE__ */ React.createElement(
      'p',
      {
        style: {
          textAlign: 'center',
          padding: 10
        }
      },
      'Test card data'
    ),
    [
      {
        label: 'Card number',
        value: '4988 4388 4388 4305'
      },
      {
        label: 'Expires',
        value: '03/30'
      },
      {
        label: 'CVV',
        value: '737'
      }
    ].map(function(_ref) {
      const { label } = _ref;
      const { value } = _ref;
      return /* #__PURE__ */ React.createElement(
        'div',
        {
          key: label,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
          }
        },
        /* #__PURE__ */ React.createElement(
          'label',
          {
            htmlFor: label
          },
          label
        ),
        /* #__PURE__ */ React.createElement('input', {
          type: 'text',
          name: label,
          onClick: function onClick(_ref2) {
            const { target } = _ref2;
            target.focus();
            target.select();
            document.execCommand('copy');
          },
          defaultValue: value,
          contentEditable: 'false',
          style: {
            marginLeft: 20,
            border: 'none'
          }
        })
      );
    }),
    /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          textAlign: 'right',
          padding: 10,
          cursor: 'pointer'
        }
      },
      '(click to copy)'
    )
  );
};

export default CreditCardExample;
