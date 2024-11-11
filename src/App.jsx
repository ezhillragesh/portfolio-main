import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";


function App() {
  return (
    <>
      {/* Background gradient */}
      <div className="fixed -z-10 min-h-screen top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <main className="flex flex-col items-start px-20 md:px-32 lg:px-48 w-full"> {/* Removed items-center */}
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Blog />
        <Contact /> 
        
        <Footer />
      </main>
    </>
  );
}

export default App;
