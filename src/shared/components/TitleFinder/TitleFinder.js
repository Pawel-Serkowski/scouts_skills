import React from "react";

import "./TitleFinder.css";

const TitleFinder = (props) => {
  return (
    <header className="skills-scroller__options">
      <div className="filter" onClick={props.filterIsOpenHandler}>
        <i className="fa-solid fa-filter"></i>
      </div>
      <input
        placeholder="wpisz początek nazwy"
        type="text"
        className="title-filter"
        id="title-filter"
        onChange={props.filterChangeHandler}
      />
      <div></div>
    </header>
  );
};

export default TitleFinder;
