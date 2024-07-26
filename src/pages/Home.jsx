import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faPhone, faCoffee, faAppleAlt, faAnchor } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/Card';

function Home() {
    return (
        <div>
            <div
                className="min-h-screen px-24 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/bg2.jpg')" }}
            >
                <Navbar />
                <div className="flex justify-between">
                    <div className="w-11/12">
                        <h1 className="text-7xl mt-28 font-semibold">Dummy H1 Text For The Home Page Here.</h1>
                        <p className="font-bold mt-5">
                            Let us build cool solutions that live on the icp blockchain and solve people problems
                        </p>
                        <div className="flex space-x-10 mt-5">
                            <button className="bg-gradient-to-r from-blacky to-blu2 text-white px-5 py-2 rounded-2xl flex items-center space-x-2">
                                <FontAwesomeIcon icon={faConciergeBell} />
                                <span>Our Services</span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>Call Us</span>
                            </button>
                        </div>
                    </div>
                    <img src="/p2.jpg" className="w-6/12 mt-16 rounded-full" alt="No Image" />
                </div>
            </div>
            <div className="bg-white text-black justify-center mx-auto px-24 py-10">
                <h1 className="text-7xl py-8 text-center font-semibold"> Our Services </h1>
                <div className="flex space-x-5">
                    <div className="w-6/12">
                        <img src="/p2.jpg" className="w-8/12 mt-16 rounded-full" alt="No Image" />
                    </div>
                    <div>
                        <p>Dummy text on the services we provide as the mzansi web3 team</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 justify-center">
                            <Card
                                title="Card 1"
                                text="Dummy text for the first card in relation to the services that we provide"
                                icon={faConciergeBell}
                            />
                            <Card
                                title="Card 2"
                                text="Dummy text for the second card in relation to the services that we provide"
                                icon={faCoffee}
                            />
                            <Card
                                title="Card 3"
                                text="Dummy text for the third card in relation to the services that we provide"
                                icon={faAppleAlt}
                            />
                            <Card
                                title="Card 4"
                                text="Dummy text for the fourth card in relation to the services that we provide"
                                icon={faAnchor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
