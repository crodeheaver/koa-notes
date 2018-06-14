import React, { Component } from 'react'
import { login, simpleAction } from '../store/actions'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { CardHeader } from '@material-ui/core';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render = () => (
        <Card>
            <CardHeader title="Sign Up" />
            <CardContent>
                <FormControl component="fieldset">
                    <FormGroup>
                        <TextField
                            id="email"
                            label="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                            margin="normal"
                        />
                        
                    </FormGroup>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => this.props.login(this.state.email, this.state.password) }>Submit</Button>
                <Button size="small" onClick={() => this.props.simpleAction(this.state.email, this.state.password) }>Submit</Button>
            </CardActions>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
