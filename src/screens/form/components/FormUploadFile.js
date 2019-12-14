import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UploadFile from './UploadFile'
import Button from './../../../common/Button'
import FormResult from './FormResult'

import { updateAnswer } from './../../../store/actions/form'
import { QUESTION_TYPES } from './../../../constants/questionTypes'
import { STEP_BUTTON } from './../../../constants/buttonSteps'


class FormUploadFile extends Component {
  static propTypes = {
    typeOption: PropTypes.string,
    formQuestions: PropTypes.object
  }
  static defaultProps = {
    typeOption: '',
    formQuestions: ''
  }

  state = {
    stepOption: 0,
    file: ""
  }

  refFile = React.createRef()

  onChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  remove = () => {
    this.setState({
      file: "",
      imagePreviewUrl: ''
    })
    this.refFile.value = null
  }


  /**
   * Change question in list
   * next => value = 1
   * prev => value = -1
   */
  changeQuestion = (value = STEP_BUTTON.NEXT) => {
    this.setState(preState => ({
      stepOption: preState.stepOption + value
    }))

    // Update answer value
    const { imagePreviewUrl, file } = this.state
    this.props.updateAnswer(-1, { imagePreviewUrl, file }, QUESTION_TYPES.FILE_UPLOAD_QUESTION)
  }

  render() {
    const { stepOption, imagePreviewUrl, file } = this.state
    return (
      <>
        {
          stepOption === 1 ?
            <FormResult questionType={QUESTION_TYPES.FILE_UPLOAD_QUESTION} /> :
            <>
              {
                imagePreviewUrl &&
                <div className="uploaded-img">
                  <img src={imagePreviewUrl} className="f-cover" alt='upload' />
                  <button onClick={this.remove}>x</button>
                </div>
              }
              <UploadFile
                onChange={this.onChange}
                ref={ref => this.refFile = ref}
                title={file ? 'Reupload' : 'Upload file'}
              />
            </>
        }

        <div className="group-btn m-t-50">
          <Button
            title="Prev"
            isDisabled={stepOption === 0}
            onClick={() => this.changeQuestion(STEP_BUTTON.PREV)}
          />
          <Button
            title="Next"
            isDisabled={!file || stepOption === 1}
            onClick={() => this.changeQuestion()}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  formQuestions: state.form,
  typeOption: ownProps.type
});

const mapDispatchToProps = { updateAnswer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUploadFile);

