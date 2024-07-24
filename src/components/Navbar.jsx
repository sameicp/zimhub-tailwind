function Navbar() {
    return (
        <nav className="h-20 bg-gray-100">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex space-x-3">
                    <img src="" alt="Car Logo" width="20%" />
                    <a href="/" className="inline-block py-4 md:py-0 mt-2">
                        <span className="p-1 text-2xl leading-none text-gray-900 font-mono  text-clip">Logo</span>
                    </a>
                </div>

                <div className="flex space-x-10 font-mono">

                    <a href="/" className="hover:font-bold hover:text-gray-900 transition">Home</a>

                </div>

                <div className="flex space-x-5">
                    <div className="px-4">
                        <a href="/">
                            <i className="text-gray-500 hover:text-gray-700 fas fa-shopping-cart text-3xl hover:text-xl transition"></i>
                        </a>
                        <div className="rounded-full bg-blue-600 text-white text-center text-xs">
                            1
                        </div>
                    </div>
                    <a href="/">
                        <i className="text-gray-500 hover:text-gray-700 fa-brands fa-twitter text-lg hover:text-xl transition"></i>
                    </a>
                    <a href="/">
                        <i className="text-gray-500 hover:text-gray-700 fa-brands fa-facebook text-lg hover:text-xl transition"></i>
                    </a>
                    <a href="/">
                        <i className="text-gray-500 hover:text-gray-700 fa-solid fa-globe text-lg hover:text-xl transition"></i></a>
                    <a href="/">
                        <i className="text-gray-500 hover:text-gray-700 fa-brands fa-instagram text-lg hover:text-xl transition"></i>
                    </a>
                </div>

            </div>
        </nav>


    )
}

export default Navbar