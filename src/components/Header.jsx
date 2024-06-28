import React from 'react'
import Logo from '../../src/assets/leftlogo.png'

const Header = () => {
  return (
    <>
    <div className='bg-red-400'>
        {/* uppernavbar */}
        <div>
            <div>
                <div>
                    <a href="#"><img src={Logo} alt="logo" /></a>
                </div>
                <div>
                    {/* search bar and order btn */}
                    <div>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
            </div>
        </div>
       {/* lowernavbar */}
       <div></div>
    </div>

    </>
  )
}

export default Header
