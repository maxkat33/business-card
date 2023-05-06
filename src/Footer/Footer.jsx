import React from 'react'
import TwitterIcon from './Icons/TwitterIcon'
import FacebookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/InstagramIcon'
import GitHubIcon from './Icons/GitHubIcon'

const Footer = () => {
    return (
        <footer className='h-20 flex justify-center bg-gray-950'>
            <div className='flex justify-between items-center w-64 flex text-gray-300'>
                <TwitterIcon tailwindClass='w-10 h-10 p-1 rounded-lg bg-gray-400 text-gray-300'/>
                <FacebookIcon tailwindClass='w-10 h-10 p-1 rounded-lg bg-gray-400 text-gray-300'/>
                <InstagramIcon tailwindClass='w-10 h-10 p-1 rounded-lg bg-gray-400 text-gray-300'/>
                <GitHubIcon tailwindClass='w-10 h-10 p-1 rounded-lg bg-gray-400 text-gray-300'/>
            </div>
        </footer>
    )
}

export default Footer
