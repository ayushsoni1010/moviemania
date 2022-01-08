import React from "react";

// Routing
// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./styles/global/GlobalStyle";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </React.Fragment>
  );
};

export default App;
