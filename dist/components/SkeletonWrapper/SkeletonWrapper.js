import _objectWithoutProperties from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties';
import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function _templateObject6() {
  const data = _taggedTemplateLiteral([
    '\n      border-radius: 50% !important;\n    '
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral([
    '\n  border-radius: 16px !important;\n\n  ',
    '\n'
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(['\n      text-align: ', ';\n    ']);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(['\n        margin: ', ';\n      ']);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(['\n      width: ', 'px;\n    ']);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 10px;\n  overflow: hidden;\n  text-align: center;\n\n  ',
    '\n\n    ',
    '\n\n  ',
    '\n'
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var SkeletonWrapperStyled = styled.div(
  _templateObject(),
  function(props) {
    return props.width && css(_templateObject2(), props.width);
  },
  function(props) {
    return props.margin && css(_templateObject3(), props.margin);
  },
  function(props) {
    return props.align && css(_templateObject4(), props.align);
  }
);
export var StyledSkeleton = styled(Skeleton)(_templateObject5(), function(
  props
) {
  return props.circle && css(_templateObject6());
});

const SkeletonWrapper = function SkeletonWrapper(_ref) {
  const { showChildren } = _ref;
  const { children } = _ref;
  const { margin } = _ref;
  const { width } = _ref;
  const props = _objectWithoutProperties(_ref, [
    'showChildren',
    'children',
    'margin',
    'width'
  ]);

  return showChildren
    ? children
    : /* #__PURE__ */ React.createElement(
        SkeletonWrapperStyled,
        {
          width,
          margin
        },
        /* #__PURE__ */ React.createElement(
          SkeletonTheme,
          {
            color: '#eeeff2'
          },
          /* #__PURE__ */ React.createElement(StyledSkeleton, props)
        )
      );
};

SkeletonWrapper.defaultProps = {
  showChildren: false,
  children: '',
  margin: '',
  width: null
};
export default SkeletonWrapper;
