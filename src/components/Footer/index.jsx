import { Link } from 'react-router-dom';
import '../../global.css';
import './style.css';
import { useState, useEffect} from 'react';


export const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setYear(newYear);
  },
);

  return (
    <footer id="cnt">
      <p className="footer-title">Contact us</p>
      <div className="footer_info">
        <Link to="/">
          <img className="footer_logo" src="/Earth.svg" />
        </Link>
        <div className="footer_content">
          <p className="footer_text">
            Front-End Developer:
            <br />
            <b>Anna Ustenko</b>
            <br />
            <a className="footer_link" href="mailto:anna06491@gmail.com">
              <img className="mail" src="/mail.svg" />
            </a>
          </p>
          <p className="footer_text">
            Front-End Developer: <br />
            <b>Olga Pogrebna</b>
            <br />
            <a className="footer_link" href="mailto:olga.pogrebnya@live.com">
              <img className="mail" src="/mail.svg" />
            </a>
          </p>
          <p className="footer_text">
            Illustrator:
            <br />
            <b>Polina Kuzmenko</b>
            <br />
            <a
              className="footer_link"
              href="mailto:polina.kuzmenko.91@gmail.com"
            >
              <img className="mail" src="/mail.svg" />
            </a>
          </p>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; <span className="year">{year}</span> by
        SevenContinentsSafari, Inc. All rights reserve.
      </p>
    </footer>
  );
};
