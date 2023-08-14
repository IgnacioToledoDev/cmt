import { Contact } from "./components/Contact";
import { AboutMe } from "./components/AboutMe";
import { LandingHeader } from "./components/LandingHeader";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden p-0 m-0">
      <main className="m-0 p-0">
        <Navigation />
        <div>
          <LandingHeader />
        </div>
        <article className="relative w-full h-full py-2 px-2">
          <AboutMe />
          <Services />
        </article>
        <article className="p-0 m-0">
          <Contact />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
