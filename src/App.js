import React from "react";
import Header from "./components/Header/Header";
import Firstscreen from "./components/Firstscreen/Firstscreen";
import Inside from "./components/Inside/Inside";
import Service from "./components/Service/Service";
import Tabsection from "./components/Tabsection/Tabsection";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
     <Header/>
      <main>
         <Firstscreen/>
        <Inside/>
        <Service/>
        <Tabsection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
