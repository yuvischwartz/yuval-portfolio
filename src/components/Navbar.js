import React from 'react'

function Navbar() {
  return (
    <div className={'h-18 border-black'}>
          {/* <h1 className={'title2 text-3xl text-left ml-8 sm:ml-36 m-3'}>YS.</h1>  */}
          <ul className={'flex justify-end'}>
          <h1 className={'flex-auto title2 text-3xl text-left ml-8 sm:ml-36 m-4 cursor-pointer'}>YS.</h1>
            <li className={'lite2 my-4 text-lg mr-5 sm:mr-24 hover:border-b border-black cursor-pointer'}>Portfolio</li>
            <li className={'lite2 my-4 text-lg  mr-5 sm:mr-24 hover:border-b border-black cursor-pointer'}>Resume</li>
            <li className={'lite2  text-lg my-4 mr-8 sm:mr-36 hover:border-b border-black cursor-pointer'}>Contact</li>
          </ul>      
    </div>
  )
}

export default Navbar
