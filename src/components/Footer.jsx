function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-6xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
                Email: <a href="">same.eth01@gmail.com</a> <br />
                Phone: <a href="">0555-3444-094</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                <a href="#rockets" className="hover:opacity-90">Twitter</a>
                <a href="#testimonials" className="hover:opacity-90">Youtube</a>
                <a href="#testimonials" className="hover:opacity-90">Facebook</a>
                <a href="#contact" className="hover:opacity-90">Contact Us</a>
            </nav>
        </section>
    </footer>
  )
}

export default Footer