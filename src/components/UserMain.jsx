import React from 'react'
import NavBarUser from '../elements/NavBarUser'

const UserMain = (props) => {
  return (
    <div>
        <NavBarUser/>
        {props.child}
    </div>
  )
}

export default UserMain