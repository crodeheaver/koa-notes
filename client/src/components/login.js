import React, { Component } from 'react'
import { login, simpleAction } from '../store/actions'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { CardHeader } from '@material-ui/core';

class Login extends Component {

  constructor(props) {
    super(props);
    console.log(props.auth)
    this.state = { email: '', password: '' };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  handleClick= (e)=> {
    e.preventDefault()
    this.props.simpleAction(this.state.email, this.state.password)
  }

  render = () => (
    <Card>
      <CardHeader title="Login" />
      <form onSubmit={this.handleSubmit}>
        <CardContent>
          <FormControl component="fieldset">
            <FormGroup>
              <TextField
                id="email"
                label="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                margin="normal"
                required
              />
              <TextField
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                type="password"
                margin="normal"
                required
              />
              {this.props.auth.loginError !== '' &&
                <FormLabel component="legend" error>{this.props.auth.loginError}</FormLabel>
              }
              
            </FormGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Input type='submit' size="small" value='Submit' />
          <Input type='button' size="small" value='Submit' onClick={this.handleClick} />
        </CardActions>
      </form>
    </Card>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
