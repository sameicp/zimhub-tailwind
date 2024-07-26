import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"


export default function App() {
  return (
    <div>
      <body className="flex flex-col min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </body>
    </div>
  )

export default App
