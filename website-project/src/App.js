import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

// refere this website to make changes in this portfolio https://priyankaguravmyportfoliowebsite.framer.website/
// follow the list of changes from the notebook
// Deloy the website on internet
function App() {
  return (
  <div>
   <NavBar/>
   <Home/>
   <About/>
   <Projects/>
   <Skills/>
   <Contact/>

   <SocialLinks/>
  </div>
  );
}

export default App;


