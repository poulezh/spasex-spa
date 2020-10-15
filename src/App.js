import React from "react";
import { BrowserRouter, Route} from 'react-router-dom'

import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Features />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
