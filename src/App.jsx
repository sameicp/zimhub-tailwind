
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./components/Team";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Home />
      </main>
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
