

function About() {
    return (
        <div>
            <div
                className="min-h-screen px-24 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            >
                <div className="flex justify-between items-center">
                    <div className="w-11/12">
                        <h1 className="text-7xl mt-28 font-semibold">About</h1>
                        <p className="font-bold mt-5 text-2xl inline-block align-middle">
                            Learn more about our mission, vision, and values.
                        </p>
                        <p className="mt-5 text-lg">
                            We are a team of dedicated professionals committed to providing top-notch solutions that leverage the latest in blockchain technology. Our goal is to create innovative solutions that address real-world problems and drive positive change.
                        </p>
                    </div>
                    <img src="/p2.jpg" className="w-6/12 mt-16 rounded-full" alt="Team" />
                </div>
            </div>
            <section className="py-10 bg-gray-50">
                <h1 className="text-7xl mt-8 font-semibold text-center text-black">Our Team</h1>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                        <div className="w-full lg:w-1/2">
                            <h2
                                className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                                Our leading, strong & creative team</h2>
                            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
                                product best.</p>
                            <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Join
                                our team</button>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                                <img src="https://pagedone.io/asset/uploads/1696238665.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                                <img src="https://pagedone.io/asset/uploads/1696238684.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                                <img src="https://pagedone.io/asset/uploads/1696238702.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                                <img src="https://pagedone.io/asset/uploads/1696238720.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                                <img src="https://pagedone.io/asset/uploads/1696238737.png" alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default About;
