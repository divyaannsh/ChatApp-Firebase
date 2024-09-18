import React from 'react'
import "./adduser.css"
const Adduser = () => {
  return (
    <div className='adduser'>
        <form >
        <input type="text" placeholder='Username' name='username' />
        <button>
            Seacrh
        </button>
        </form>
    <div className="user">
        <div className="deatil">
            <img src="./avatar.png" alt="" />
            <span>Jane Doe</span>
        </div>
        <button>Add user</button>
        </div>  
    </div>
  )
}

export default Adduser
