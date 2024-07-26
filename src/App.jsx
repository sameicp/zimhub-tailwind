
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Home />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
