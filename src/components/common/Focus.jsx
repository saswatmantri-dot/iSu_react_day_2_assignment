import React, { useEffect, useRef } from 'react'

function Focus({className}) {

    const ref = useRef(null);

    useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className = {className}>
        <>Focused at start-up</>
        <input 
        
        ref={ref} 
        type="text"

        />

    </div>
  )
}

export default Focus