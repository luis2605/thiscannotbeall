import React from "react";
import { Helmet } from "react-helmet";
import upsideDown from "../../assets/img/stick_upsidedown.png";
import sitted from "../../assets/img/stick_sit.png";
import stickGirl from "../../assets/img/stick_girl.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Home Page </title>
        <meta
          name="description"
          content="This is the home page of my React application."
        />
        <meta name="keywords" content="home, react, seo, react helmet" />
      </Helmet>

      <div className="home__hero__container">
        <div className="home__hero__first_subcontainer">
          <img
            className="home__hero__image"
            src={upsideDown}
            alt="stickman upside down "
          ></img>
          <h2 className="home__hero__h2"> {t("first_intro")}</h2>
        </div>
        <div className="home__hero__second_subcontainer">
          <img
            className="home__hero__image"
            src={sitted}
            alt="stickman sitting on the floor"
          ></img>
          <h1 className="home__hero__h2"> {t("second_intro")}</h1>
        </div>
        <div className="home__hero__third_subcontainer">
          <img
            className="home__hero__image"
            src={stickGirl}
            alt="stickgirl next to the text"
          ></img>
          <h2 className="home__hero__h2"> {t("third_intro")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
