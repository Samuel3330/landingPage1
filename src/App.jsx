import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Group from "./components/Group";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <div className="m-auto p-0 max-w-[1700px]">
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Group />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
