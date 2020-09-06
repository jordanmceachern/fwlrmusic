import React from 'react'
import './resources/LoadingSpinner.css'
import { VscLoading } from 'react-icons/vsc'

const LoadingSpinner = ({ inline }) => {
  let inlineClass = ''
  let iconSize = 60
  if (inline) {
    inlineClass = 'inline'
    iconSize = 28
  }
  return (
    <div className={`loading-spinner-container ${inlineClass}`}>
      <VscLoading
        size={iconSize}
        color='#fff'
        className='loading-spinner'
      />
    </div>
  )
}

export default LoadingSpinner
