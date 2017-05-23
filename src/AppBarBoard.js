import React, { Component, PropTypes } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Apps from 'material-ui/svg-icons/navigation/apps';

import AppButton from './AppButton';

// styles
import styles from './styles';

export default class AppBarBoard extends Component {
  static propTypes = {
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: React.PropTypes.object,
  };

  state = {
    isOpen: false,
  }

  openMyAccount() {
    this.setState({ isOpen: true });
  }

  closeMyAccount() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
        <div
          tabIndex={1}
          onBlur={::this.closeMyAccount}
        >
          <div>
            <Apps
              style={{ color: 'white', cursor: 'pointer' }}
              onClick = {() => {
                this.openMyAccount();
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
                <AppButton backgroundColor={'#9c27b0'} label={'Sales'} />
                <AppButton backgroundColor={'#673ab7'} label={'Dispatch'} />
                <AppButton backgroundColor={'#3f51b5'} label={'Scheduling'} />
                <AppButton backgroundColor={'#2196f3'} label={'Fleet'} />
                <AppButton backgroundColor={'#4caf50'} label={'Safety'} />
                <AppButton backgroundColor={'#cddc39'} label={'Accounting'} />
                <AppButton backgroundColor={'#ffc107'} label={'HR'} />
                <AppButton backgroundColor={'#00bcd4'} label={'Reports'} />
                <AppButton backgroundColor={'#e91e63'} label={'EDI'} />
                <AppButton backgroundColor={'#607d8b'} label={'Manager'} />
                <AppButton backgroundColor={'#000000'} label={'Admin'} />
              </div>
              <div
                style = {styles.moreContainer}
              >
                <FlatButton
                  label="More Apps"
                  backgroundColor={'white'}
                  hoverColor={'#e0e0e0'}
                  // onMouseDown = {() => {
                  //   browserHistory.push('/signout');
                  // }}
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
