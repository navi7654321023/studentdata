/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./design.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import SegmentIcon from "@mui/icons-material/Segment";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./Header.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    IoMdBookmark,
    IoMdCall,
    IoMdChatboxes,
    IoMdClipboard,
    IoMdClose,
    IoMdHammer,
    IoMdHome,
    IoMdImage,
    IoMdMenu,
    IoMdPerson,
  } from "react-icons/io";
function Slidebar() {
    const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };
  return (
    <div>

<div className="header">
        <div className="imageee">
          <img
          src="data:image/png;base64,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"
          height={50}
        ></img>
      </div>
      <div className="Paraphraser">
        {" "}
        <a>Paraphraser</a>
      </div>





      <div className="variant">
        {" "}
        <Button variant="contained" className="upgradebtn">
          {" "}
          <DiamondIcon className="diamondheader" style={{ fill: "white" }} />
          Upgrade to Premium
        </Button>
      </div>
      <div>
        <img
          className="america"
          src="https://cdn.pixabay.com/photo/2012/04/10/16/22/united-26177__340.png"
          width="35"
          height="35"
        ></img>
      </div>

      <div className="moon">
        <NightlightRoundIcon style={{ fill: "#7f7e7a" }} />
      </div>
      <div className="PermIdentityIcon">
        <PermIdentityIcon style={{ fill: "grey" }} />
      </div>
      </div>
      <div className={active ? "header1" : "header-mobile"}>
        <div className="menu-icon" onClick={activateNav}>
          {!active ? (
            <IoMdMenu className="menu" style={{ fill: "#5f6368" }} />
          ) : (
            <KeyboardDoubleArrowRightIcon
              className="menu"
              style={{ fill: "#5f6368" }}
            />
          )}
          <hr className="hr3" />
       

        <div className={active ? "bbb" : ""}>
          <nav>
            <ul className={active ? "ul-item" : "ul-item oicon"}>
              <li>
                <AssignmentIcon className="iconfirst" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Paraphraser
                </Link>
              </li>

              <li>
                <SpellcheckIcon className="icon1" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Grammer Checker
                </Link>
              </li>

              <li>
                <PhonelinkSetupIcon className="icon3" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Grammer Checker
                </Link>
              </li>

              <li>
                <BorderColorIcon className="icon2" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Plagiarism Checker
                </Link>
              </li>

              <li>
                <SegmentIcon className="icon4" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Co-Writer
                </Link>
              </li>

              <li>
                <FormatQuoteIcon className="icon5" />
                <Link
                  to="/"
                  className="leftm"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Citazon generator
                </Link>
              </li>
              
              <hr className={active?"hr4" :  "" }/>
              <hr className={!active?"hr" : ""} />
              <li>
                <DiamondIcon className="icon7" />
                <Link
                  to="/"
                  className="colorhh"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                 <p className="colorh">QuillBot Premium</p> 
                </Link>
              </li>
              <hr className={active?"hr4" :  "" }/>
              <hr className={!active?"hr" : ""} />
              <div className="flexx">
                <img
                  className="chromeicon"
                  src={require("./icons8-chrome-48.png")}
                  alt="icon"
                  height={30}
                  width={30}
                />
                <Link
                  to="/"
                  className="topmarginn"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Chrome Extension
                </Link>
              </div>
              <div className="flexx">
                <img
                  className="chromeicon"
                  src={require("./icons8-microsoft-word-2019-48.png")}
                  alt="icon"
                  height={30}
                  width={30}
                />
                <Link
                  to="/"
                  className="topmarginn"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Word Extension
                </Link>
              </div>
              <hr className={active?"hr4" :  "" }/>
              <hr className={!active?"hr" : ""} />
              <div className="flexx">
                <HelpOutlineIcon
                  className="questionmak"
                  style={{ fill: "#5f6368" }}
                />
                <Link
                  to="/"
                  className="topmarginn"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Help Center
                </Link>
              </div>
              <div className="flexx">
                <MailOutlineIcon
                  className="questionmak"
                  style={{ fill: "#5f6368" }}
                />
                <Link
                  to="/"
                  className="topmarginn"
                  style={{ textDecoration: "none", color: "#4f4f4f" }}
                >
                  Contact Us
                </Link>
              </div>
            </ul>
          </nav>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Slidebar