import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


export default function App() {
  return (
    <div>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        </main>
        <p className="font-sans text-blue-500 text-2xl">footer section</p>
      </body>
    </div>
  )
}
