// Simple example of a React "smart" component

import { connect } from 'react-redux'
import Header from '../components/Header'
import * as actionsCreators from '../actions/HeaderActionCreators'

const mapStateToProps = state => ({ name: state.name })

export default connect(mapStateToProps, actionsCreators)(Header)
