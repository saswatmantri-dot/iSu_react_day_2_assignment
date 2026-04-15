import React, { useState } from 'react'

function SearchBar({className}) {

    const [text, setText] = useState("Enter in small letters here...")

    const capitalise = (event) => {
    const capVal = event.target.value.toUpperCase();
    setText(capVal);
    };

  return (
    <div className={className}>
        
        <input
        type = "text"  
        onChange={capitalise}
        placeholder={"Search..."}
        />
        
        <p>{text}</p>

    </div>
  )
}

export default SearchBar