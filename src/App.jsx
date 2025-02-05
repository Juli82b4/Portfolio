import "./App.css";
import About from "./Components/About/About";
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
    </>
  );
}

export default App;
