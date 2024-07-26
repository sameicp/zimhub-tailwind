import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="h-20">
            <div className="container mx-auto flex items-center justify-between h-full">
                <div className="flex space-x-3">
                    <a href="/" className="inline-block py-4 md:py-0 mt-2">
                        <span className="p-1 text-2xl leading-none font-mono">Logo</span>
                    </a>
                </div>

                <div className="flex space-x-10 font-mono">
                    <a href="/" className="hover:font-bold hover:text-gray-900 transition">Home</a>
                    <a href="/about" className="hover:font-bold hover:text-gray-900 transition">About Us</a>
                    <a href="/projects" className="hover:font-bold hover:text-gray-900 transition">Services</a>
                    <a href="/team" className="hover:font-bold hover:text-gray-900 transition">Team</a>
                </div>

                <div className="flex space-x-5">
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-700 text-lg transition" />
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-700 text-lg transition" />
                    </a>
                    <a href="https://example.com" aria-label="Website" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe} className="hover:text-gray-700 text-lg transition" />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-700 text-lg transition" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
