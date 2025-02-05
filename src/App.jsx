import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
    </>
  );
}

export default App;
