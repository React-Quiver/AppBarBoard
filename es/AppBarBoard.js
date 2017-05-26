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
    key: 'getAppButtons',
    value: function getAppButtons() {
      var apps = this.props.apps;

      var JSX = [];

      for (var k in apps) {
        if (apps.hasOwnProperty(k)) {
          (function () {
            var app = apps[k];
            JSX.push(React.createElement(
              'div',
              {
                onMouseDown: function onMouseDown() {
                  window.location.replace(app.url);
                }
              },
              React.createElement(AppButton, { backgroundColor: app.color, label: app.label })
            ));
          })();
        }
      }

      return JSX;
    }
  }, {
    key: 'openBoard',
    value: function openBoard() {
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

      var _props = this.props,
          moreAppUrl = _props.moreAppUrl,
          iconStyle = _props.iconStyle;
      var isOpen = this.state.isOpen;


      return React.createElement(
        MuiThemeProvider,
        { muiTheme: this.context.muiTheme },
        React.createElement(
          'div',
          {
            style: { margin: '12' },
            tabIndex: 1,
            onBlur: this.closeMyAccount.bind(this)
          },
          React.createElement(
            'div',
            null,
            React.createElement(Apps, {
              style: {
                color: iconStyle && iconStyle.color ? iconStyle.color : 'white',
                cursor: 'pointer' },
              onClick: function onClick() {
                _this2.openBoard();
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
                this.getAppButtons()
              ),
              React.createElement(
                'div',
                {
                  style: styles.moreContainer
                },
                React.createElement(FlatButton, {
                  label: 'More Apps',
                  backgroundColor: 'white',
                  hoverColor: '#e0e0e0',
                  onMouseDown: function onMouseDown() {
                    window.location.replace(moreAppUrl);
                  }
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

AppBarBoard.propTypes = {
  apps: PropTypes.array,
  moreAppUrl: PropTypes.string,
  iconStyle: PropTypes.object
};
AppBarBoard.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
  router: React.PropTypes.object
};
export default AppBarBoard;