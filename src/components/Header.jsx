import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";

import "../index.scss";
//assets

import tcbeaLogo from "../assets/img/tcbea_logo_resized.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className=" header__nav__container">
      <div className=" header__nav__container--img">
        <img src={tcbeaLogo} className="logo" alt="thiscannotbeall"></img>
      </div>
      <div className=" header__nav__container--btns">
        {isMobile ? (
          <Button variant="tcbea" onClick={handleShow}>
            Launch
          </Button>
        ) : (
          <Button variant="tcbea" onClick={handleShow}>
            see more
          </Button>
        )}
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
