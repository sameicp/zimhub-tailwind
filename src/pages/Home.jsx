
function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article className="sm:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center sm:max-w-lg sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    Unleashing Potential, Empowering Innovations on the <span className="text-indigo-700 dark:text-indigo-300">Internet Computer Protocol</span>...
                </h2>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    We are accelerating the Internet Computer mass adoption in Zimbabwe
                </p>
                <a href="" className="max-w-md text-2xl mt-8 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    Learn more
                </a>
            </article>
            <img className="sm:w-1/2" src="./assets/imgs/team/1.jpg" alt="rocket-dab" />
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="about" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                About Us ZimHub
            </h2>
            <figure className="my-12">
                <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p className="text-2xl text-center mt-2 text-white dark:text-slate-400 2">
                        Welcome to Mzanzi Web3! We take pride in South Africa&apos;s burgeoning role as a pivotal contributor to the Internet Computer blockchain within the African continent.
                        In the ever-evolving blockchain realm, new organizations and initiatives consistently make their mark. 
                        Standing at the vanguard of this digital revolution, Mzanzi Web3 (MW3) holds a central position in the region.
                        With backing from the Dfinity Foundation, our dedication to progress spans multiple arenas, from developer training, project nurturing, facilitating transitions to the Internet Computer platform, 
                        to carving out significant partnerships with the blockchain community&apos;s giants. 
                        As the contours of blockchain innovation continue to shift, our endeavours seek to supercharge the expansion and acceptance of the Internet Computer ecosystem throughout South Africa. 
                        Embark with us on this voyage towards a unified and decentralised tomorrow!
                    </p>
                </blockquote>
            </figure>

            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                The <span className="text-indigo-700 dark:text-indigo-300">Internet Computer Protocol</span>
            </h2>
            <figure className="my-12 flex flex-col-reverse sm:flex-row">
                <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p className="text-2xl text-center sm:text-left mt-2 text-white dark:text-slate-400 2">
                        The Internet Computer Protocol (ICP) heralds a groundbreaking series of protocols that catalyze decentralized synergy between data centers across the globe. 
                        Its audacious mission sets its sights on superseding conventional cloud providers, cultivating an equitable and fortified global computational infrastructure. 
                        The ICP token is the engine of this avant-garde movement, underpinning governance, rewarding community contributors, and enabling smooth transactions. 
                        Embrace ICP for a tomorrow where the web belongs to everyone, decentralised and barrier-free.

                        Within the spectrum of public decentralized smart contract networks, ICP holds an unrivalled position. 
                        Boasting unmatched on-chain data storage cost-effectiveness coupled with state-of-the-art tech, ICP’s smart contracts – termed ‘canisters’ – equip you to seamlessly host and automate a vast range of dapps and services. 
                        Step into the next epoch of decentralized dynamism with the unparalleled prowess of ICP.
                    </p>
                </blockquote>
                <img className="sm:w-1/2 mb-6" src="./assets/imgs/testimonial/1/1.png" alt="rocket-dab" />
            </figure>

            <button>Learn more About ICP</button>

        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="team" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Our Team
            </h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-4">
                <li className="w-2/3 sm:w-5/6 flex flex-col items-center py-4 px-2">
                    <img src="./assets/imgs/blog/1.jpg" alt="Explorer" className="w-2/3 sm:w-5/6 md-6 rounded-3xl shadow-xl" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Samuel Muto</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-900 dark:text-slate-400">Developer Advocate</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Developer</p>
                </li>

                <li className="w-2/3 sm:w-5/6 flex flex-col items-center py-4 px-2">
                    <img src="./assets/imgs/blog/1.jpg" alt="Explorer" className="w-2/3 sm:w-5/6 md-6 rounded-3xl shadow-xl" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Samuel Muto</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-900 dark:text-slate-400">Developer Advocate</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Developer</p>
                </li>

                <li className="w-2/3 sm:w-5/6 flex flex-col items-center py-4 px-2">
                    <img src="./assets/imgs/blog/1.jpg" alt="Explorer" className="w-2/3 sm:w-5/6 md-6 rounded-3xl shadow-xl" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Samuel Muto</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-900 dark:text-slate-400">Developer Advocate</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Developer</p>
                </li>
            </ul>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="events" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Events
            </h2>
            
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="blog" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Recent Blogs
            </h2>
            
        </section>
    </main>
  )
}

export default Home