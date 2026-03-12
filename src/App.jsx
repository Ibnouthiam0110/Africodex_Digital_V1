import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import StatsBand      from "./components/StatsBand";
import About          from "./components/About";
import Influenceurs from "./components/NosInfluenceurs";
import RejoignezNous  from "./components/RejoignezNous";
import Services       from "./components/Services";
import Realisations   from "./components/Realisations";
import { WhyUs, Process } from "./components/WhyAndProcess";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import ScrollToTop    from "./components/ScrollToTop";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Influenceurs />
        <RejoignezNous />
        <Services />
        <Realisations />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}