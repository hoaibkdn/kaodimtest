import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Box from './../Box'
import VerticalText from '../VertialText'
import Button from './../../../../common/Button'

const NeedServiceBox = memo(props => {
  const { benefits } = props
  const renderBenefits = () => {
    let benefitsArr = []
    for (let i = 0; i < benefits.length; i++) {
      benefitsArr.push(
        <p key={`benefit${i}`}>
          <FontAwesomeIcon icon={faCheck} size='xs' />
          <span> {benefits[i]}</span>
        </p>
      )
    }
    return benefitsArr
  }
  return (
    <Box>
      <VerticalText
        title="Need this service"
        text="Hire best service providers for your everyday needs from Kaodim."
      />
      <div className='m-t-10'>
        <Button
          title='Submit a request'
          className='w-100'
        />
      </div>
      {renderBenefits()}
      <p>{'Terms & conditions apply'}</p>
    </Box>
  )
})

Button.propTypes = {
  benefits: PropTypes.array
}
Button.defaultProps = {
  benefits: []
}
export default NeedServiceBox
