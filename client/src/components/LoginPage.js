import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TextField, Card, CardActions, CardContent, CardHeader, Input, FormControl, FormLabel, FormGroup} from '@material-ui/core'
import { Redirect } from 'react-router-dom';
import { login } from '../store/actions'

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.id] = e.target.value
    this.setState(change)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render = () => {
    
    if (this.props.auth.isAuthenticated === true) {
      console.log(`here ${this.props.auth.isAuthenticated}`)
      return <Redirect to='/' />
    }

    return (
    
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
  login: (email, password) => dispatch(login(email, password))
})

const wrappedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export { wrappedLogin as LoginPage }
