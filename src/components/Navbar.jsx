import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="h-20 bg-gray-100">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex space-x-3">
                    {/* <img src="" alt="Car Logo" width="20%" /> */}
                    <a href="/" className="inline-block py-4 md:py-0 mt-2">
                        <span className="p-1 text-2xl leading-none text-gray-900 font-mono text-clip">Logo</span>
                    </a>
                </div>

                <div className="flex space-x-10 font-mono text-black">
                    <a href="/" className="hover:font-bold hover:text-gray-900 transition">Home</a>
                </div>

                <div className="flex space-x-5">
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 hover:text-gray-700 text-lg hover:text-xl transition" />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebook} className="text-gray-500 hover:text-gray-700 text-lg hover:text-xl transition" />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faGlobe} className="text-gray-500 hover:text-gray-700 text-lg hover:text-xl transition" />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-gray-700 text-lg hover:text-xl transition" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
