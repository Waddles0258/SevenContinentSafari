import '../../global.css';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-box" >
          <Link className="logo" to="/"></Link>
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
            <Link className="hover-orange" to="/Videos">
              Video
            </Link>
            <Link className="hover-orange" to="/Footer">
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
