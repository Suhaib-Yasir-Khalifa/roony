import NavBar from "./App/NavBar";
import Hero from "./App/Hero";
import About from "./App/About";
import Work from "./App/Work";
import Contact from "./App/Contact";
import Footer from "./App/Footer";
const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primaryBg  font-[Ubuntu] via-secondaryBg to-teriaryBg ">
        <NavBar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
