import '../../global.css';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-box">
          <a href="#Logo" className="logo"></a>
          <div className="nav">
            <Link className="hover-orange" to="/Pexesso">
              Pexxesso
            </Link>
            <div className="subnav">
              <a className="hover-orange">
                Quizes <i className="fa fa-caret-down"></i>
              </a>
              <div className="subnav-content hover-orange">
                <Link to="/QuizzContinent">Continent quizz</Link>
                <Link to="/QuizzAnimal">Animal quizz</Link>
              </div>
            </div>
            <a className="hover-orange" href="#Video">
              Video
            </a>
            <a className="hover-orange" href="#Contact">
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
