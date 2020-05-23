import React from 'react';

import Shelf from './Shelf';
import Headshot from '../img/headshot2.jpg';
import { ReactComponent as IconJS } from '../img/javascript.svg';
import { ReactComponent as IconHTML } from '../img/html5.svg';
import { ReactComponent as IconCSS } from '../img/css3.svg';
import { ReactComponent as IconReact } from '../img/react.svg';
import { ReactComponent as IconNode } from '../img/node-dot-js.svg';
import { ReactComponent as IconMongo } from '../img/mongodb.svg';
import { ReactComponent as IconGql } from '../img/graphql.svg';
import { ReactComponent as IconSass } from '../img/sass.svg';
import { ReactComponent as IconSphere } from '../img/sphere.svg';
import { ReactComponent as IconGithub } from '../img/github.svg';
import { ReactComponent as IconPDF} from '../img/file-pdf.svg';
import { ReactComponent as IconPhone } from '../img/mobile.svg';
import { ReactComponent as IconEmail} from '../img/mail4.svg';

import resume from '../media/DCP Resume 52120.pdf'

import bsscPic from '../img/bsscPic.PNG';
import riptidePic from '../img/riptidePic.PNG';

const Landing = ({ toggleShelf, shelfVisible }) => {
  return (
    <div className="Landing" id="landing">
      <Shelf shelfVisible={shelfVisible} toggleShelf={toggleShelf} />
      <div
        className={'backdrop' + (shelfVisible ? ' visible' : '')}
        onClick={() => toggleShelf()}
      />
      <figure className="About__shape" id="AboutMe">
        <img
          src={Headshot}
          alt="Derek Pyle Headshot"
          className="About__shape__img"
        />
      </figure>
      <h2 className="About__title About__title--main header-large">
        Derek Pyle
      </h2>
      <h4 className="About__title About__title--submain header-medium">
        Full Stack Dev
      </h4>
      <p className="About__blurb">
        I'm a developer based in <span className="highlight-text">Boston.</span>{' '}
        My current goal is to gain a{' '}
        <span className="highlight-text">junior level</span> developer position
        and to keep growing the{' '}
        <span className="highlight-text">languages</span> and{' '}
        <span className="highlight-text">frameworks</span> I'm fluent in!
      </p>
      <h2 className="About__title About__title--tools header-medium">
        What I Work With
      </h2>
      <div className="About__toolbox">
        <div className="About__toolbox__box">
          <IconJS className="About__toolbox__box__icon About__toolbox__box__icon--JS" />
          <p className="About__toolbox__box__text About__toolbox__box__text--JS">
            Javascript
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconHTML className="About__toolbox__box__icon About__toolbox__box__icon--HTML" />
          <p className="About__toolbox__box__text About__toolbox__box__text--HTML">
            HTML
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconCSS className="About__toolbox__box__icon About__toolbox__box__icon--CSS" />
          <p className="About__toolbox__box__text About__toolbox__box__text--CSS">
            CSS
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconReact className="About__toolbox__box__icon About__toolbox__box__icon--React" />
          <p className="About__toolbox__box__text About__toolbox__box__text--React">
            React/Redux
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconNode className="About__toolbox__box__icon About__toolbox__box__icon--Node" />
          <p className="About__toolbox__box__text About__toolbox__box__text--Node">
            Node
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconMongo className="About__toolbox__box__icon About__toolbox__box__icon--Mongo" />
          <p className="About__toolbox__box__text About__toolbox__box__text--JS">
            MongoDB
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconGql className="About__toolbox__box__icon About__toolbox__box__icon--GQL" />
          <p className="About__toolbox__box__text About__toolbox__box__text--GQL">
            GraphQL
          </p>
        </div>
        <div className="About__toolbox__box">
          <IconSass className="About__toolbox__box__icon About__toolbox__box__icon--Sass" />
          <p className="About__toolbox__box__text About__toolbox__box__text--Sass">
            Sass
          </p>
        </div>
      </div>
      <h4 className="Project__projects-title header-medium" id="Projects">
        Projects
      </h4>
      <div className="Project Project--BSSC">
        <figure className="Project__img-box Project__img-box--left Project__img--left">
          <img
            src={bsscPic}
            alt="BSSC Website"
            className="Project__img-box__img Project__img-box__img--left Project__img--BSSC"
          />
        </figure>

        <h3 className="Project__title Project__title--bssc Project__title--right header-medium italic">
          BSSC
        </h3>
        <div className="Project__subheader Project__subheader--right Project__subheader--bssc">
          <h4 className="Project__subheader__subtitle Project__subheader__subtitle--bssc header-small italic">
            Made With...
          </h4>
          <ul className="Project__subheader__list  Project__subheader__list--bssc">
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              React
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              Redux
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              MongoDB
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              Express
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              Node
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--bssc">
              GraphQL
            </li>
          </ul>
        </div>
        <div className="Project__main Project__main--bssc">
          <ul className="Project__main__description Project__main__description--bssc">
            <li className="Project__main__description__item Project__main__description__item--bssc">
              Searchable documentation for a orthopedic surgery practice
            </li>
            <li className="Project__main__description__item Project__main__description__item--bssc">
              Live, updateable practice alerts for improved workflow and
              accuracy, gated with authentication and user-levels
            </li>
            <li className="Project__main__description__item Project__main__description__item--bssc">
              Programmatic sorting of key documents needed to print for patient
              encounters
            </li>
            <li className="Project__main__description__item Project__main__description__item--bssc">
              Test with username: dpyle password: admin
            </li>
          </ul>
          <div className="Project__main__links Project__links--bssc">
            <a
              href="https://github.com/Derek42588/bssc"
              className="Project__main__links__link Project__main__links__link--bssc-github"
            >
              <button className="button">
                <IconGithub className="Project__main__links__link__icon" />
              </button>
            </a>
            <a
              href="https://vast-earth-35629.herokuapp.com"
              className="Project__main__links__link Project__main__links__link--bssc-live"
            >
              <button className="button">
                <IconSphere className="Project__main__links__link__icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="Project Project--Riptide">
        <figure className="Project__img-box Project__img-box--right Project__img--right">
          <img
            src={riptidePic}
            alt="Riptide Website"
            className="Project__img-box__img Project__img-box__img--right Project__img--Riptide"
          />
        </figure>

        <h3 className="Project__title Project__title--Riptide Project__title--left header-medium italic">
          Riptide
        </h3>
        <div className="Project__subheader Project__subheader--left Project__subheader--Riptide">
          <h4 className="Project__subheader__subtitle Project__subheader__subtitle--Riptide header-small italic">
            Made With...
          </h4>
          <ul className="Project__subheader__list  Project__subheader__list--Riptide">
            <li className="Project__subheader__list__item Project__subheader__list__item--Riptide">
              React
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--Riptide">
              Sass
            </li>
            <li className="Project__subheader__list__item Project__subheader__list__item--Riptide">
              Node
            </li>
          </ul>
        </div>
        <div className="Project__main Project__main--Riptide">
          <ul className="Project__main__description Project__main__description--Riptide">
            <li className="Project__main__description__item Project__main__description__item--Riptide">
              Informational hub for a private server of an MMORPG, Asheron's Call
            </li>
            <li className="Project__main__description__item Project__main__description__item--Riptide">
              Searchable wiki-like content area
            </li>
            <li className="Project__main__description__item Project__main__description__item--Riptide">
              Completely responsive and mobile-optimized - my first project after learning Sass
            </li>
          </ul>
          <div className="Project__main__links Project__links--Riptide">
            <a
              href="https://github.com/Derek42588/riptideSite/"
              className="Project__main__links__link Project__main__links__link--Riptide-github"
            >
              <button className="button">
                <IconGithub className="Project__main__links__link__icon" />
              </button>
            </a>
            <a
              href="http://acriptide.herokuapp.com/"
              className="Project__main__links__link Project__main__links__link--Riptide-live"
            >
              <button className="button">
                <IconSphere className="Project__main__links__link__icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
    <h4 className="Contact__contact-title header-medium" id="Contact">
        Contact Me
      </h4>
      <div className="Contact">
      <div className="Contact__contact-box">
        <p className = "Contact__contact-box__cta">Resume</p>
      <a
       target="_blank"
        href={resume} className="">
        <button className="button">
                <IconPDF className = "Contact__contact-box__icon"/>
      </button>
        </a>
      </div>
      <div className="Contact__contact-box">
        <p className = "Contact__contact-box__cta">Call</p>
      <a
        href="tel:+1(201)400-9742" className="">
        <button className="button">
                <IconPhone className = "Contact__contact-box__icon"/>
      </button>
        </a>
      </div>
      <div className="Contact__contact-box">
        <p className = "Contact__contact-box__cta">Write</p>
      <a
        href="mailto:derekpyle@gmail.com" className="">
        <button className="button">
                <IconEmail className = "Contact__contact-box__icon"/>
      </button>
        </a>
      </div>
      <div className="Contact__contact-box">
        <p className = "Contact__contact-box__cta">Collaborate</p>
      <a
        href="https://github.com/Derek42588" className="">
        <button className="button">
                <IconGithub className = "Contact__contact-box__icon"/>
      </button>
        </a>
      </div>
      
     
    </div>
    </div>

  );
};

export default Landing;
