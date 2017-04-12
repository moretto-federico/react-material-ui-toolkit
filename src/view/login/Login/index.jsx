import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

export default class Login extends React.Component {    

    constructor() {
        super();
        this.state = {open:true};

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({open:false});
    }

    render() {
      const actions = [<RaisedButton label="Primary" primary={true} onClick={this.handleClose} />];

      return (
        <Dialog
            title="Login"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
        >
            <TextField floatingLabelText="User Name or email"/>
            <TextField floatingLabelText="Password" type="password"/>
        </Dialog>
      );   
    }
}