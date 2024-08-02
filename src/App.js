import './App.css';
import Navbar from './components/navbar/navbar';
import MobileAppBar from './components/MobileAppBar/MobileAppBar'; // Import MobileAppBar component
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Greeting from './components/Greeting/Greeting';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="App min-h-screen flex flex-col items-start md:justify-start bg-white dark:bg-custom-gray-800">

        <Navbar />

      <div className="block md:hidden w-full  shadow-md">
        <MobileAppBar />
      </div>
      <button
        className="themeMode text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105 absolute top-4 right-4 dark:text-white md:hover:bg-custom-rose"
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
      <div className="mainBodyContainer pl-4 pt-4 md:pt-[2%] md:pl-[10%] flex w-full ">
  <Greeting />
</div>
      
    </div>
  );
}

export default App;
