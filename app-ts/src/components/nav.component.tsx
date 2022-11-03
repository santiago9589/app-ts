import React, { useState } from 'react'
import NavRouter from './links.components'

const NavComponent = () => {

    const [viewNavbar, setViewNavbar] = useState<boolean>(false)

    return (

        <>
            <div className='hidden sm:block'>
                <NavRouter />
            </div>
            <div className='block sm:hidden '>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setViewNavbar(!viewNavbar)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-110 active:scale-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {viewNavbar ? <NavRouter /> : null}
            </div>
        </>
    )
}


export default NavComponent