import React, { useState } from 'react'

function CounterApp({className}) {

    const [countVal, setCount] = useState(0);
    function incr () {
      setCount(countVal+1);
    }

    function decr () {
      if(countVal>0) {
        setCount(countVal-1);
      }
    }

      function reset () {
      setCount(0);
    }

  return (
    <div className={className}>
       <p>{countVal}</p>
       
       <button onClick={incr}>
        Increment
       </button>

      <button onClick={decr}>
        Decrement
       </button>

        <button onClick={reset}>
        Reset
       </button>

    </div>
  )
}

export default CounterApp