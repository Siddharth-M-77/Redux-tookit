import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full p-2 flex items-center justify-between gap-16 text-xl uppercase  bg-pink-400'>
      <Link className='px-5 py-1 bg-blue-400 rounded-full' to={"/"}>Home</Link>
      <Link className='px-5 py-1 bg-blue-400 rounded-full' to={"/users"}>user</Link>
      <Link className='px-5 py-1 bg-blue-400 rounded-full text-black shadow-lg' to={"/Products"}>Products</Link>
    </div>
  )
}

export default Nav
