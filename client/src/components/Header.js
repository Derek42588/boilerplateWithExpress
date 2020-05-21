import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ReactComponent as IconGithub } from '../img/github.svg';
import { ReactComponent as IconPDF } from '../img/file-pdf.svg';
import { ReactComponent as IconPhone } from '../img/mobile.svg';
import { ReactComponent as IconEmail } from '../img/mail4.svg';

import resume from '../media/DCP Resume 52120.pdf'
const Header = ({ toggleShelf }) => {
  return (
    <div className="NavBar">
      <ul className="NavBar__nav">
        <li className="NavBar__nav__item NavBar__nav__item--full">
          <HashLink to="/#AboutMe" className="NavBar__nav__item__link">
            About Me
          </HashLink>
        </li>
        <li className="NavBar__nav__item NavBar__nav__item--full">
          <HashLink to="/#Projects" className="NavBar__nav__item__link">
            Projects
          </HashLink>
        </li>
        <li className="NavBar__nav__item NavBar__nav__item--full">
          <HashLink to="/#Contact" className="NavBar__nav__item__link">
            Contact
          </HashLink>
        </li>
        <li className="NavBar__nav__item NavBar__nav__item--full">
          <ul className="NavBar__nav__item__sublist">
            <li className="NavBar__nav__item__sublist__item">
              <a href="https://github.com/Derek42588" alt>
                <IconGithub className="NavBar__nav__item__sublist__item__icon"/>
              </a>
            </li>
            <li className="NavBar__nav__item__sublist__item">
              <a target="_blank" href={resume}>
                <IconPDF className="NavBar__nav__item__sublist__item__icon" />
              </a>
            </li>
            <li className="NavBar__nav__item__sublist__item">
              <a href="tel:+1(201)400-9742">
                <IconPhone className="NavBar__nav__item__sublist__item__icon" />
              </a>
            </li>
            <li className="NavBar__nav__item__sublist__item">
              <a href="mailto:derekpyle@gmail.com">
                <IconEmail className="NavBar__nav__item__sublist__item__icon" />
              </a>
            </li>
          </ul>
        </li>
        <li
          className="NavBar__nav__item NavBar__nav__item--mobile"
          onClick={() => toggleShelf()}
        >
          <span className="NavBar__nav__item__icon">&nbsp;</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
