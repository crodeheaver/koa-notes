import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TextField, Card, CardActions, CardContent, CardHeader, Input, FormControl, FormLabel, FormGroup} from '@material-ui/core'
import { Redirect } from 'react-router-dom';
import { register } from '../store/authActions'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = { email: '', username: '', password: '', passwordConfirmation: '' }
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.id] = e.target.value
    this.setState(change)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.register(
      this.state.email, 
      this.state.username, 
      this.state.password, 
      this.state.passwordConfirmation)
  }

  render = () => {
    
    if (this.props.auth.isAuthenticated === true) {
      return <Redirect to='/' />
    }

    return (
    
    <Card>
      <CardHeader title="Register" />
      <form onSubmit={this.handleSubmit}>
        <CardContent>
          <FormControl component="fieldset">
            <FormGroup>
              <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
                required
              />
              <TextField
                id="username"
                label="Username"
                value={this.state.username}
                onChange={this.handleChange}
                margin="normal"
                required
              />
              <TextField
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                margin="normal"
                required
              />
              <TextField
                id="passwordConfirmation"
                label="Password Confirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
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
        </CardActions>
      </form>
    </Card>
  )}
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  register: (email, username, password, passwordConfirmation) => 
  dispatch(
    register(
      email, 
      username, 
      password, 
      passwordConfirmation))
})

const wrappedRegister = connect(mapStateToProps, mapDispatchToProps)(Register)

export { wrappedRegister as Register }
