import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import NavBar from "./Components/NavBar/NavBar";
import ImagesWork from "./Components/MyImagesWork/ImagesWork";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ImagesWork />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
