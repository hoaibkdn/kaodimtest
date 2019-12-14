import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ComplimentItem from './ComplimentItem'
import { Layout } from './../../../../themes'

const ComplimentGroup = memo(props => {
  const { complimentList } = props
  const renderCompliments = () => {
    const numOfCompliments = complimentList.length
    let i = 0
    let compliments = []
    while (i < numOfCompliments) {
      compliments.push(
        <Layout.Flex key={`compliment${i}`}>
          <ComplimentItem {...complimentList[i]} />
          <ComplimentItem {...complimentList[i + 1]} />
        </Layout.Flex>
      )
      i += 2
    }
    return compliments
  }
  return (
    <>
      <h3>Compliments</h3>
      {renderCompliments()}
    </>
  )
})

ComplimentGroup.propTypes = {
  complimentList: PropTypes.array
}

ComplimentGroup.defaultProps = {
  complimentList: []
}

export default ComplimentGroup
