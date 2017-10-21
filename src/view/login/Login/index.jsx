import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = { open: true };

    this.handleClose = this.handleClose.bind(this);
  }

  /*
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }*/

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [<RaisedButton label="Primary" primary onClick={this.handleClose} />];

    return (
      <MuiThemeProvider>
        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField floatingLabelText="User Name or email" />
          <TextField floatingLabelText="Password" type="password" />
        </Dialog>
      </MuiThemeProvider >
    );
  }
}

Login.childContextTypes = {
  muiTheme: PropTypes.object,
};
