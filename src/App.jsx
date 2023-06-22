import { Contact } from "./components/Contact";
import { AboutMe } from "./components/AboutMe";
import { LandingHeader } from "./components/LandingHeader";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <main>
        <Navigation />
        <div>
          <LandingHeader />
        </div>
        <article className="w-full h-full py-2 px-2">
          <AboutMe />
          <Services />
        </article>
        <article className="flex w-full h-full">
          <Contact />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
