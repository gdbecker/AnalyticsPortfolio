import React from 'react';

function Footer() {

  return (
    <div className="h-fit p-5 font-interRegular text-center text-white text-sm border-lightGray border-t-2 bg-gray 2xl:px-36">
      Designed and developed with ❤️ by <a href="https://github.com/gdbecker/AnalyticsPortfolio/tree/main" target="_blank" className="font-interRegular text-mediumYellow hover:text-lightYellow">Garrett Becker</a>. &copy; {new Date().getFullYear()} All rights reserved.
    </div>
  )
}

export default Footer;