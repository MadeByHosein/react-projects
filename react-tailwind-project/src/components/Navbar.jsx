import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOn, setMobileMenuOn] = useState(false)

  return (
    <nav className='navbar fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm'>
  <div className="navbar__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
    <div className="navbar__content flex justify-between items-center h-14 sm:h-16 md:h-20">  
      <div className='flex items-center space-x-1 group cursor-pointer'>
        <div className="navbar__brand flex">  

          <div className="navbar__logo-wrapper">
            <img src={logo} alt="CF Logo" className='navbar__logo w-6 h-6 sm:w-8 sm:h-8'/>
          </div>

          <span className="navbar__title text-lg sm:text-xl md:text-2xl font-medium">       
            <span className="navbar__title-primary text-white">
              Come
            </span>

            <span className="navbar__title-secondary text-blue-400">
              Fore
            </span>
          </span>
        </div>
      </div>
      {/* Nav Links */}
      <div className="navbar__Links hidden md:flex items-center space-x-6 lg:space-x-8 ">
        <a href="#features" className='text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>

        <a href="#pricing" className='text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>

        <a href="#testimonials" className='text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
      </div> 

      <button className='md:hidden p-2 text-gray-300 hover:text-white cursor-pointer' onClick={()=>setMobileMenuOn((prev)=> !prev)}>

        {
          mobileMenuOn ? (
            <X className='w-5 sm:w-6 sm:h-6'/>
          ) : (
            <Menu className='w-5 sm:w-6 sm:h-6'/>
        )}
      </button>                   
    </div>   
  </div>
  {mobileMenuOn && (
          <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-bs-slate-800 animate-in slide-in-from-top duration-300'>
            <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
              <a href="#features" className='block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=> setMobileMenuOn(false)}>Features</a>

              <a href="#pricing" className='block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=> setMobileMenuOn(false)}>Pricing</a>

              <a href="#testimonials" className='block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=> setMobileMenuOn(false)}>Testimonials</a>   

            </div>
          </div>
        )} 
</nav>
  )
}

export default Navbar