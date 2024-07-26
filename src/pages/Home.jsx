import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell, faPhone } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <div
            className="min-h-screen px-24 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
            <Navbar />

            <div className="flex justify-between">
                <div className=" w-11/12">
                    <h1 className="text-7xl mt-28 font-semibold">Welcome To Zim ICP Innovation Hub.</h1>
                    <p className="font-bold mt-5">Let us build cool sultions that live on the icp blockchain
                        and solve people problems
                    </p>
                    <div className="flex space-x-10 mt-5">
                        <button className="bg-blacky text-white px-5 py-2 rounded-2xl flex items-center space-x-2">
                            <FontAwesomeIcon icon={faConciergeBell} />
                            <span>Our Services</span>
                        </button>
                        <button className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Call Us</span>
                        </button>
                    </div>

                </div>
                <img src="/bg.jpg" className="w-6/12 mt-16 rounded-full" alt="No Image" />

            </div>
        </div>
    );
}

export default Home;
