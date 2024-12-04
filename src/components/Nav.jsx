export default function Nav(){
    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b">
                <div className="max-w-screen-xl flex items-center justify-between p-1 md:px-5 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="/images/hires-logo.png" style={{ width: '110px', height: 'auto' }}  alt="Toronto Cupcake Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                       <img src="/images/cart-icon.png" className="w-14 h-14 md:w-10 md:h-10" alt="shopping cart icon" />
                        <button 
                            data-collapse-toggle="navbar-sticky" 
                            type="button" 
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                            aria-controls="navbar-sticky" 
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                            <div className="flex flex-row items-center">
                                <a href="#" className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0">Home</a>
                                <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink ">⌄</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row items-center">
                                <a href="#" className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0">About</a>
                                <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink ">⌄</span>
                                </div>
                                
                            </li>
                            <li>
                            <div className="flex flex-row items-center">
                                <a href="#" className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0">Cupcakes</a>
                                <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink ">⌄</span>
                                </div>
                            </li>
                            <li>
                            <div className="flex flex-row items-center">
                                <a href="#" className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0">Contact</a>
                                <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink ">⌄</span>
                                </div>
                            </li>
                            <li>
                            <div className="flex flex-row items-center">
                                <a href="#" className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0">Community</a>
                                <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink ">⌄</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}