import React, { memo } from 'react'
import Box from './../Box'
import VerticalText from '../VertialText'

const ContactBox = memo(props => {
  const { contact } = props
  return (
    <Box>
      <VerticalText
        title="Contact person"
        text={contact.contactPerson}
      />
      <VerticalText
        title="Company address"
        text={contact.companyAddress}
      />
      <VerticalText
        title="Registration no"
        text={contact.registrationNo}
      />
    </Box>
  )
})

export default ContactBox
