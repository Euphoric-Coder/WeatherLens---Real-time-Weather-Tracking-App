import React from 'react'
import CountUp from 'react-countup';
const AnimatedCounter = ({ value } ) => {
  return (
    <div>
        <CountUp 
            end={value} 
            decimals={2}
        />
    </div>
  )
}

export default AnimatedCounter