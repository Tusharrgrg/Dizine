
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function NavBar() {


    return (
        < >
            <header className="w-full bg-white sm:px-8 px-4  sticky top-0 z-50 border-b border-b-[#e6ebf4]">
                <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto py-4 px-2">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-10 mr-4" alt="Flowbite Logo" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">

                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                            <li><Link to="/" className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 dark:text-black md:hover:text-blue-700 " aria-current="page">Home</Link></li>
                            <li><Link to="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link></li>
                            <li><Link to="/create-post" className="font-inter font-medium bg-[#293462] text-white p-2 rounded-md">Create</Link></li>
                        </ul>

                    </div>
                </div>
            </header>

        </>


    );
}

