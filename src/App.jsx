import { useState } from "react";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import StatsBand      from "./components/StatsBand";
import About          from "./components/About";
import Influenceurs   from "./components/NosInfluenceurs";
import RejoignezNous  from "./components/RejoignezNous";
import Services       from "./components/Services";
import Realisations   from "./components/Realisations";
import { WhyUs, Process } from "./components/WhyAndProcess";
import Blog           from "./components/BlogArticle";
import BlogArticle    from "./components/BlogArticle";  // ← ton article complet
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import ScrollToTop    from "./components/ScrollToTop";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("home"); // "home" | "article"

  // Quand on change de page, scroll en haut
  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "article") {
    return (
      <>
        <Navbar onNavigate={navigate} />
        <BlogArticle onNavigate={navigate} />
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  return (
    <>
      <Navbar onNavigate={navigate} />
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
        <PolitiqueConfidentialite />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}