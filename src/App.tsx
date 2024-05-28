import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/bebefits";
import OurClasses from "./scenes/ourClasses";
import { ContactUs } from "./scenes/contact";

// enum SelectedPage {
//   home = "Home",
//   benefits = "benefits",
//   ourClasses = "ourClasses",
//   contactUs = "contactus",
// }

export default function App() {
  // const [selectedPage, setSelectedPage] = useState<string>("home");
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs  setSelectedPage={setSelectedPage}/>
    </div>
  );
}
