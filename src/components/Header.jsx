import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import Icons from "../components/Icons";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import PlusIcon from "../assets/icons/plus.svg";
import SideNav from "../assets/icons/sideNav.svg";
import LangSelection from "../assets/icons/langSel.svg";

import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import "../index.scss";
//assets

import tcbeaLogo from "../assets/img/tcbea_logo_resized.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const goToAbout = () => {
    navigate("/about");
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className=" header__nav__container">
      <div className=" header__nav__container--img">
        <img
          src={tcbeaLogo}
          className="logo"
          alt="thiscannotbeall"
          onClick={goToHome}
        ></img>
      </div>
      <div className=" header__nav__container--btns">
        {isMobile ? (
          <Button variant="tcbea" onClick={handleShow}>
            <Icons value={HamburgerIcon} alternativText="hamburger text" />
          </Button>
        ) : (
          <nav className="header__nav__container--navBtns">
            <Button variant="tcbea-noBorders" onClick={goToHome}>
              {t("home")}
            </Button>
            <Button variant="tcbea-noBorders" onClick={goToAbout}>
              {t("about")}
            </Button>
            <Button variant="tcbea" onClick={handleShow}>
              <Icons value={SideNav} alternativText="show menu in Desktop" />
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="tcbea" id="dropdown-basic">
                <Icons
                  value={LangSelection}
                  alternativText="language selection"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("de")}>
                  DE
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("es")}>
                  ES
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  EN
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        )}
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isMobile ? (
            <div className="header__nav__container--navBtnsMobil">
              <Button variant="tcbea" onClick={goToHome}>
                {t("home")}
              </Button>
              <Button variant="tcbea" onClick={goToAbout}>
                {t("about")}
              </Button>
              <Dropdown>
                <Dropdown.Toggle variant="tcbea" id="dropdown-basic">
                  <Icons
                    value={LangSelection}
                    alternativText="language selection"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage("de")}>
                    DE
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("es")}>
                    ES
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage("en")}>
                    EN
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            ""
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
