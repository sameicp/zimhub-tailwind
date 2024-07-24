import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


export default function App() {
  return (
    <div>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <p>The home part of the page</p>
        </main>
        <Footer />
      </body>
    </div>
  )
}
