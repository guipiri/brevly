import logo from '../assets/Logo.svg'

function HomeHeader() {
  return (
    <header className="pb-6 pt-8 w-full bg-gray-200 sm:max-w-[60.5rem] mx-auto">
      <img className="block m-auto sm:ml-0" src={logo} alt="logo-brevly" />
    </header>
  )
}

export default HomeHeader
