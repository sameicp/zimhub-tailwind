function Header() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-screen-2xl mx-auto p-8 flex justify-between items-center">
            <h1 className="text-3xl font-medium">
                <a href="/">ZimHub</a>
            </h1>
            <div>
                <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                    &#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-2xl" aria-label="main">
                    <a href="/" className="hover:opacity-90">Home</a>
                    <a href="#about" className="hover:opacity-90">About Us</a>
                    <a href="/services" className="hover:opacity-90">Services</a>
                    <a href="#blog" className="hover:opacity-90">Blog</a>
                    <a href="#team" className="hover:opacity-90">Our Team</a>
                    <a href="/contact" className="hover:opacity-90">Contact Us</a>
                </nav>
            </div>
        </section>
    </header>
  )
}

export default Header