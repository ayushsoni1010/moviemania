import React from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./styles/global/GlobalStyle";

// Context
import UserProvider from "./context/context";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./components/Login/login";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<Movie />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
