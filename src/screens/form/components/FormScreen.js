import React, { Component } from 'react'

import { connect } from "react-redux"
import { getQuestions } from '../../../store/actions/form'

class FormScreen extends Component {

  render() {
    return (
      <div>
        Form
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   users: state.users
// });

const mapDispatchToProps = { getQuestions };

export default connect(
  null,
  mapDispatchToProps
)(FormScreen);
