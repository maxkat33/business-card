import React from 'react'

import LinkedInIcon from './LinkedInIcon'
import EmailIcon from './EmailIcon'

const Main = () => {
    return (
        <main className='flex flex-col items-center p-8 bg-gray-900 font-inter'>
            <div className='bio-container flex flex-col items-center text-gray-50'>
                <h1 className='name font-bold text-3xl' >Max Katilius</h1>
                <h4 className='p-1 text-yellow-700'>Frontend Developer</h4>
                <p className='website text-xs' >max.katilius.website</p>
            </div>
            {/* Flex-grow here doesn't do anything? */}
            <div className='container flex-grow w-[90%] p-4 text-gray-50'>
                <div className='btns-container flex justify-between pt-2 pb-8 text-lg'>
                    <button className='px-8 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium'>
                        <div className='flex items-center justify-between w-20'>
                            {/* Do you know of a way to achieve a 'border-radius' effect on this svg? Would I have to make a div and have the background image the svg file? */}
                            <EmailIcon tailwindClass='h-5 w-5 text-bold'/>
                            <h4>Email</h4>
                        </div>
                    </button>
                    <button className='px-8 py-2 rounded-lg bg-blue-500 text-gray-200 font-medium'>
                        <div className='flex items-center justify-between w-20'>
                            <LinkedInIcon tailwindClass='h-5 w-5 fill-current text-gray-200'/>
                            {/* For some strange reason if I change the below text from 'Email' to 'LinkedIn' it somewhat breaks the button and svg file */}
                            <h4>Email</h4>
                        </div>
                    </button>
                </div>
                <h3 className='text-lg font-bold pb-1' >About</h3>
                <p className='pb-3 text-sm'>I am a frontend developer with a particular interest in making things crisp, clean and simpl - both in appearance and functionality. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className='text-lg font-bold pb-1' >Interests</h3>
                <p className='text-sm'>Cat guru. Piano amateur. Internet nerd. Biscoff Fiend. Entrepreneur. Travel geek. Hydration expert. Hot and cold beverage enthusiast.</p>
            </div>  
        </main>
    )
}

export default Main