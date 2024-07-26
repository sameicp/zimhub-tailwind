import Navbar from "../components/Navbar";

function Home() {
    return (
        <div
            className="min-h-screen px-24 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
            <Navbar />
            <div className="flex space-x-10">
                <div>
                    <h1 className="w-7/12 text-7xl font-semibold">Welcome To Zim ICP Innovation Hub</h1>
                    <p className="font-bold mt-5">Let us build cool sultions that live on the icp blockchain and solve people s problems</p>
                    <div className="flex space-x-10 mt-5">
                        <button>Our Services</button>
                        <button>Call Us</button>
                    </div>
                </div>
                <div>
                    <img src="/bg.jpg" alt="No Img" />
                </div>
            </div>
        </div>
    );
}

export default Home;
