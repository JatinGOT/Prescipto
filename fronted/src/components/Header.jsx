import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/* {left side} */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl md:text-white font-semibold leading-tight lg:text-5xl md:leading-tight '>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row gap-3 items-center text-sm font-light text-white'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse throug our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free</p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-white py-3 text-gray-600 md:bg-neutral-50 hover:scale-105 rounded-full transition-all duration-300 px-8'>Book appointment  <img className='w-3' src={assets.arrow_icon} alt="" /> </a>
            </div>
            {/* {right side} */}
            <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
