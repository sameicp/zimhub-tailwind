import Navbar from "../components/Navbar";

function Home() {
    return (
        <div
            className="min-h-screen px-24 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
            <Navbar />

            <div className="flex justify-between">
                <div>
                    <h1 className="text-7xl mt-28">King Vanq Murisei henyu .</h1>
                </div>
                <img src="/bg.jpg" className="w-6/12 mt-8 rounded" alt="No Image" />

            </div>
        </div>
    );
}

export default Home;
