function Contact() {
  return (
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8 tails-selected-element">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">

          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p className="font-medium text-blue-500 uppercase">Contact Us</p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Get In Touch With Us.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">We would love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center text-black">Contact Form</h3>
              <input type="text" name="name" id="name" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Full Name" />
              <input type="email" name="email" id="email" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email Address" />
              <textarea name="message" id="message" rows="4" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Your Message"></textarea>
              <div className="block">
                <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Send Message</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


  )
}

export default Contact