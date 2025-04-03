import React from 'react';
import Image from 'next/image';
import Logo from '../../public/powerbi.png';
import Avatar from '../../public/GarrettBecker2.jpg';

function Navigation() {

  return (
    <div class="flex h-16 p-10 items-center justify-between overflow-hidden border-lightGray border-b-2 bg-gray 2xl:px-36">
      <div className="flex items-center justify-between">
        <a class="flex items-center justify-center" href="/">
          <h1 className="font-interBold tracking-wide text-xs text-white md:text-lg">Analytics Projects</h1>
          <Image 
            src={Logo}
            alt="Frontend Mentor Logo"
            className="pr-2 mx-2 w-10 h-8 border-lightGray border-r-2 md:w-12 md:h-10 md:mx-none"
          />
        </a>
        <h1 className="font-interRegular tracking-wider text-xs text-lightYellow md:text-lg">Showcase</h1>
      </div>
      <a class="flex items-center justify-center" href="https://github.com/gdbecker/AnalyticsPortfolio/tree/main" target="_blank">
        <Image 
          src={Avatar}
          alt="Profile Photo"
          className="w-10 h-10 rounded-full border-lightGray border-2 md:w-12 md:h-12"
        />
      </a>
    </div>
  )
}

export default Navigation;