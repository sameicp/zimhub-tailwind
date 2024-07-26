
function Blog() {
  return (
    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-slate-100 shadow-none grid gap-2 item sm:grid-cols-2">
        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
            <img src="./assets/fav-blog-default.png" alt="Sustainable Practices for a Greener Future" className="object-cover w-full h-full" /></div>
        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
            <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">The Internet Computer</p>
            <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Importance of Decentralised system in third world countries</a>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal">Find out how block-chain is driving us towards a greener future, showcasing our commitment to transparency.</p>
            <div className="flex items-center gap-4">
                <img src="./assets/fav-blog-default.png" className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" />
            <div>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">ZimHub</p>
                <p className="block antialiased font-sans text-sm leading-normal text-slate-100 font-normal">2022-09-20</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog