import { HiMoon, HiOutlineMoon } from 'react-icons/hi'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className='bg-light-elements dark:bg-dark-elements'>
      <div className='custom-container py-8 flex justify-between'>
        <h1 className='font-extrabold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Where in the world?</h1>
        <div
          className='flex items-center gap-1 sm:gap-2 lg:gap-3 cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <HiMoon /> : <HiOutlineMoon />}
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
