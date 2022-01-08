import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./SearchBar.styles";

import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Movie"
            onChange={handleChange}
            value={state}
          />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
