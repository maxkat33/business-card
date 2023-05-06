import React from 'react';
import ProfilePic from '../images/profile-pic-mk.jpg';

const Header = () => {
  return (
    <header className="flex justify-center bg-gray-800">
      <div
    //   How would you manipulate the height of this element? Using padding, height and vh, px?
        className="w-[100%] p-[12em]"
        style={{
          backgroundImage: `url(${ProfilePic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '170%',
          backgroundPosition: '100% 80%',
        // backgroundPosition: 'bottom 20% right',
        }}
      ></div>
    </header>
  );
};

export default Header;

// Would you just use an img tag like below instead?
// <img src={ ProfilePic } alt='' className='h-96'/> 