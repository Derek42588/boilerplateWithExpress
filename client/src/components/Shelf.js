import React from 'react';
import { HashLink } from 'react-router-hash-link'

import { ReactComponent as IconGithub } from '../img/github.svg';
import { ReactComponent as IconPDF } from '../img/file-pdf.svg';
import { ReactComponent as IconPhone } from '../img/mobile.svg';
import { ReactComponent as IconEmail } from '../img/mail4.svg';

import resume from '../media/DCP Resume 52120.pdf'


const Shelf = ({ toggleShelf, shelfVisible }) => {
  return (
    <div className={'Shelf' + (shelfVisible ? ' shelfVisible' : '')}>
      <ul className="Shelf__list">
        <li className="Shelf__list__item">
          <HashLink to = "/#AboutMe" className = "Shelf__list__item__link" onClick = {() => toggleShelf()}>
                  About Me
            </HashLink>
        </li>
        <li className="Shelf__list__item">
        <HashLink to = "/#Projects" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Projects
            </HashLink>
        </li>
        <li className="Shelf__list__item">
        <HashLink to = "/#Contact" className = "Shelf__list__item__link"  onClick = {() => toggleShelf()}>
                  Contact
            </HashLink>
        </li>
        <li className="Shelf__list__item Shelf__list__item--toolbox">
        <ul className="Shelf__list__item__sublist">
            <li className="Shelf__list__item__sublist__item">
              <a href="https://github.com/Derek42588" alt>
                <IconGithub className="Shelf__list__item__sublist__item__icon"/>
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a target="_blank" href={resume}>
                <IconPDF className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a href="tel:+1(201)400-9742">
                <IconPhone className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
            <li className="Shelf__list__item__sublist__item">
              <a href="mailto:derekpyle@gmail.com">
                <IconEmail className="Shelf__list__item__sublist__item__icon" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/* <ul className="Shelf__icons-list">
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
          <li className="Shelf__icons-list__item">1</li>
      </ul> */}
    </div>
  );
};

export default Shelf;
