import React from "react";
import { GlobalStyle } from './styles/global/GlobalStyle';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Home/>
    </React.Fragment>
    );
}

export default App;
