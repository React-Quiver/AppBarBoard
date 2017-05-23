var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Apps from 'material-ui/svg-icons/navigation/apps';

import AppButton from './AppButton';

// styles
import styles from './styles';

var AppBarBoard = function (_Component) {
  _inherits(AppBarBoard, _Component);

  function AppBarBoard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBarBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBarBoard.__proto__ || Object.getPrototypeOf(AppBarBoard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppBarBoard, [{
    key: 'openMyAccount',
    value: function openMyAccount() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeMyAccount',
    value: function closeMyAccount() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;


      return React.createElement(
        MuiThemeProvider,
        { muiTheme: this.context.muiTheme },
        React.createElement(
          'div',
          {
            tabIndex: 1,
            onBlur: this.closeMyAccount.bind(this)
          },
          React.createElement(
            'div',
            null,
            React.createElement(Apps, {
              style: { color: 'white', cursor: 'pointer' },
              onClick: function onClick() {
                _this2.openMyAccount();
              }
            }),
            isOpen ? React.createElement(
              Paper,
              {
                style: styles.containerB
              },
              React.createElement(
                'div',
                {
                  style: styles.subContainer
                },
                React.createElement(AppButton, { backgroundColor: '#9c27b0', label: 'Sales' }),
                React.createElement(AppButton, { backgroundColor: '#673ab7', label: 'Dispatch' }),
                React.createElement(AppButton, { backgroundColor: '#3f51b5', label: 'Scheduling' }),
                React.createElement(AppButton, { backgroundColor: '#2196f3', label: 'Fleet' }),
                React.createElement(AppButton, { backgroundColor: '#4caf50', label: 'Safety' }),
                React.createElement(AppButton, { backgroundColor: '#cddc39', label: 'Accounting' }),
                React.createElement(AppButton, { backgroundColor: '#ffc107', label: 'HR' }),
                React.createElement(AppButton, { backgroundColor: '#00bcd4', label: 'Reports' }),
                React.createElement(AppButton, { backgroundColor: '#e91e63', label: 'EDI' }),
                React.createElement(AppButton, { backgroundColor: '#607d8b', label: 'Manager' }),
                React.createElement(AppButton, { backgroundColor: '#000000', label: 'Admin' })
              ),
              React.createElement(
                'div',
                {
                  style: styles.moreContainer
                },
                React.createElement(FlatButton, {
                  label: 'More Apps',
                  backgroundColor: 'white',
                  hoverColor: '#e0e0e0'
                  // onMouseDown = {() => {
                  //   browserHistory.push('/signout');
                  // }}
                })
              )
            ) : null
          )
        )
      );
    }
  }]);

  return AppBarBoard;
}(Component);

AppBarBoard.propTypes = {};
AppBarBoard.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
  router: React.PropTypes.object
};
export default AppBarBoard;