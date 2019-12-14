import React, { memo } from 'react'
import ComplimentItem from './ComplimentItem'

const ComplimentGroup = memo(props => {
  const { complimentList } = props
  const renderCompliments = () => {
    const numOfCompliments = complimentList.length
    let i = 0
    let compliments = []
    while (i < numOfCompliments) {
      compliments.push(
        <div className="flex" key={`compliment${i}`}>
          <ComplimentItem {...complimentList[i]} />
          <ComplimentItem {...complimentList[i + 1]} />
        </div>
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

export default ComplimentGroup
