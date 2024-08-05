import React, { useState, useEffect } from 'react';
import Logo from '../navbar/assets/Logo.png';

function MobileAppBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex flex-row items-center justify-between p-4 bg-custom-gray-800 shadow-xl transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} rounded-b-lg`}>
      <div className="logoContainer flex flex-row items-center justify-start">
        <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
        <div className="text-2xl ml-3 font-ubuntu font-medium text-red-300">Note.me</div>
      </div>
      <div></div>
    </div>
  );
}

export default MobileAppBar;