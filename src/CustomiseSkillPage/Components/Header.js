import React, { useState } from "react";

const Header = (props) => {
  const skill = props.skill;
  const [isImgShow, setIsImgShow] = useState(true);
  const imgShowHandler = () => {
    setIsImgShow((state) => !state);
  };

  return (
    <header className="customise-skill-page__details">
      <section className="customise-skill-page__details-content">
        <label>Nazwa sprawności</label>
        <p className="customise-skill-page_skill-title">
          {skill.title}
          {skill.level}
        </p>
        <label htmlFor="name">Imię i nazwisko</label>
        <input type="text" id="name" />
        <label htmlFor="degree">Stopień</label>
        <input type="text" id="degree" />
        <label htmlFor="function">Funkcja</label>
        <input type="text" id="function" />
        <label htmlFor="team">Jednostka</label>
        <input type="text" id="team" />
      </section>
      <section className="customise-skill-page__general">
        <label htmlFor="open-date">Data Otwarcia</label>
        <input type="text" id="open-date" className="date-input" />
        <div
          className={`customise-skill-page__general-img-box ${
            isImgShow ? "show" : "hide"
          }`}
          onClick={imgShowHandler}
        >
          <img src={require(`../../shared${skill.img}`)} alt="" />
        </div>
        {!props.isDownloading && (
          <p>
            Kliknij w{" "}
            {isImgShow ? "zdjęcie aby schować " : "okrąg aby pokazać "}
            logo sprawności
          </p>
        )}
      </section>
    </header>
  );
};

export default Header;
