import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";
import { LandingHeader } from "./pages/LandingHeader";
import { Navigation } from "./components/Navigation";
import { Services } from "./pages/Services";
import { Footer } from "./components/Footer";
import { Comments } from "./pages/comments";

function App() {
  return (
    <>
      <div className="overflow-hidden p-0 m-0">
        <main className="m-0 p-0">
          <Navigation />
          <div>
            <LandingHeader />
          </div>
          <article className="relative">
            <AboutMe />
            <Services />
          </article>
          <article className="p-0 m-0">
            <Contact />
            <Comments />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
