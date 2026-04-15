import React, { useState } from 'react'

function SecretMessage({className}) {

    const [isLoggedIn, loginSetter] = useState(false)
    const [secretMsg, secretMsgSetter] = useState("")

    const checkLoginStatus = (event) => {
        if(event.target.checked) {
        loginSetter(true);
        secretMsgSetter("*****Secret msg is displayed*****")
        }else{
            loginSetter(false);
            secretMsgSetter("")
        }
    };

  return (
    <div className={className}>
       <label>
        <input 
            type="checkbox"
            checked={isLoggedIn}
            onChange = {checkLoginStatus}
        />
        isLoggedIn
       </label>
        
        <p>{secretMsg}</p>
    </div>
  )
}

export default SecretMessage