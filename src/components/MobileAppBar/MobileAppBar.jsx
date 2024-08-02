// src/components/MobileAppBar.js
import React from 'react';
import Logo from '../navbar/assets/Logo.png';

function MobileAppBar() {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-custom-gray-800 shadow-md">
       <div className="logoContainer flex flex-row items-center justify-start">
       <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
       <div className="text-2xl ml-3 font-ubuntu font-medium text-red-300">Note.me</div>
       </div>
      <div></div>
    </div>
  );
}

export default MobileAppBar;
