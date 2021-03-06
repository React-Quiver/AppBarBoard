import React, { Component, PropTypes } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Apps from 'material-ui/svg-icons/navigation/apps';

// open source components
import cookie from 'react-cookie';

import AppButton from './AppButton';

// styles
import styles from './styles';

export default class AppBarBoard extends Component {
  static propTypes = {
    apps: PropTypes.array,
    homeUrl: PropTypes.string,
    iconStyle: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: React.PropTypes.object,
  };

  state = {
    isOpen: false,
  }

  getAppButtons() {
    const { apps } = this.props;
    const JSX = [];

    for (const k in apps) {
      if (apps.hasOwnProperty(k)) {
        const app = apps[k];
        JSX.push(
          <div
            key = {k}
            onMouseDown={() => {
              if (app.url) {
                window.open(`https://${app.url}`, '_blank');
                window.focus();
              }
            }}
          >
            <AppButton backgroundColor={app.color} label={app.name} />
          </div>
        );
      }
    }

    return JSX;
  }

  openBoard() {
    this.setState({ isOpen: true });
  }

  closeMyAccount() {
    this.setState({ isOpen: false });
  }

  render() {
    const { homeUrl, iconStyle } = this.props;
    const { isOpen } = this.state;

    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
          <div
            style={{ margin: 12 }}
            tabIndex={1}
            onBlur={::this.closeMyAccount}
          >
            <div>
              <Apps
                style={{
                  color: iconStyle && iconStyle.color ? iconStyle.color : 'white',
                  cursor: 'pointer' }}
                onClick = {() => {
                  this.openBoard();
                }}
              />
              {
                isOpen ?
                <Paper
                  style = {styles.containerB}
                >
                <div
                  style = {styles.subContainer}
                >
                  {this.getAppButtons()}
                </div>
                <div
                  style = {styles.moreContainer}
                >
                  <FlatButton
                    label="Home"
                    backgroundColor={'white'}
                    hoverColor={'#e0e0e0'}
                    onMouseDown = {() => {
                      window.location.replace(homeUrl);
                    }}
                  />
                </div>
                </Paper>
                : null
              }
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}
