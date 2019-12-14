import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RelatedServiceItem from './RelatedServiceItem'

const RelatedServiceBox = memo(props => {
  const { services } = props
  const renderServices = () => {
    const servicesArr = []
    for (let i = 0; i < services.length; i++) {
      servicesArr.push(<RelatedServiceItem key={`services${i}`} {...services[i]} />)
    }
    return servicesArr
  }
  return (
    <>
      <h3 className="text-light-grey">Related Services</h3>
      {renderServices()}
    </>
  )
})

RelatedServiceBox.propTypes = {
  services: PropTypes.array
}

RelatedServiceBox.defaultProps = {
  services: []
}

export default RelatedServiceBox
