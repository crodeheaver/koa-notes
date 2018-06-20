import React, {Component} from 'react'
import {connect } from 'react-redux'
import { getNotes } from '../store/noteActions'

class Home extends Component {

  async componentDidMount() {
    await this.props.getNotes()
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotes())
})

const wrappedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export { wrappedHome as Home }
