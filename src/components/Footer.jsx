function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-screen-xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between gap-10">
            <div>
                <h1 className="text-3xl font-medium">ZimHub</h1>
                <p className="">South Africa’s leading representative for the Internet Computer blockchain, 
                championing decentralized innovation and fostering a vibrant Web3 community</p>
            </div>
            <nav className="hidden md:flex flex-col sm:flex-col gap-2" aria-label="footer">
                <a href="#rockets" className="hover:opacity-90">Twitter</a>
                <a href="#testimonials" className="hover:opacity-90">Youtube</a>
                <a href="#testimonials" className="hover:opacity-90">Facebook</a>
                <a href="#contact" className="hover:opacity-90">Contact</a>
            </nav>
            <div>
                <h1 className="text-3xl font-medium">ZimHub</h1>
                <p className="">South Africa’s leading representative for the Internet Computer blockchain, 
                championing decentralized innovation and fostering a vibrant Web3 community</p>
            </div>

        </section>
    </footer>
  )

export default Footer