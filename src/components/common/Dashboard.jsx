import React from 'react'

function UserProfile({className, username,age, isAdmin = false /*Default false */}) {

  return (
    <div className={className}>
    
        <p>
        User name = {username}
    </p>

    <p>
        age = {age}
    </p>

<p>
    isAdmin = {isAdmin? "Yes" : "No"}
</p>
    </div>


  )
}

export default UserProfile