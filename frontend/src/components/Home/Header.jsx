import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import img from '../../assets/logo.png'

const Header = () => {
  const {user,logoutUser} = useContext(UserContext);
  return (
    <div className='sticky top-0 shadow-md z-20'>
        <div className="flex justify-between items-center bg-black text-white w-full h-[85px] p-8">
            <div className='flex justify-center items-center gap-8'>
              <Link to='/'><img src={img} width={90} height={90}></img></Link>
              {user?<Link to='/'><h1 className='text-xl'>Home</h1></Link>:<></>}
            </div>
            <div className="flex justify-center items-center text-lg gap-5">
                {user?<Link onClick={()=>logoutUser()} to='/logout'>Logout</Link>:<Link to='/login'>Login</Link>}
                {user?<></>:<Link to='/register'>Register</Link>}
            </div>
        </div>
    </div>
  )
}

export default Header