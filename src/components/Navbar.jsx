import React from 'react'


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ello</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/18091535/pexels-photo-18091535/free-photo-of-a-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        alt=""
         />
        <span>Hanima</span>
        <button>logout</button>
      </div>
     
    </div>
  )
}

export default Navbar
