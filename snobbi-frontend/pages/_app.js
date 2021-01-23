import '../styles/globals.css'
import {useState} from "react";

function MyApp({Component, pageProps}) {
    let [menuVisible, setMenuVisible] = useState(false)

    return (
        <div>
            <div className="bg-gray-800 pb-32">
                <nav className="bg-">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="border-b border-gray-700">
                            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8"
                                             src="/stack-left.png"
                                             alt="Workflow"/>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            <a href="#"
                                               className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Create</a>

                                            <a href="#"
                                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Popular</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden" onClick={() => setMenuVisible(!menuVisible)}>
                                    <button
                                        className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>

                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 6h16M4 12h16M4 18h16"/>
                                        </svg>

                                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${menuVisible ? "block" : "hidden"} border-b border-gray-700 md:hidden`}>
                        <div className="px-2 py-3 space-y-1 sm:px-3">
                            <a href="#"
                               className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Create</a>

                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Popular</a>

                        </div>
                    </div>
                </nav>
                <header className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-white">
                            Dashboard
                        </h1>
                    </div>
                </header>
            </div>

            <main className="-mt-32">
                <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <Component {...pageProps} />
                </div>
            </main>
        </div>
    )
}

export default MyApp
