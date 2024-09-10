import '../../global.css';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header id="hdr">
        <div className="header-box" >
          <Link to="/"><img className="logo" src="/Logo.svg"/></Link>
          <div className="nav">
          
            <div className="subnav">
              <a className="hover-orange">
                Quizes <i className="fa fa-caret-down"></i>
              </a>
              <div className="subnav-content hover-orange">
                <Link className='sbn-cnt_link' to="/QuizzContinent">Continent</Link>
                <Link className='sbn-cnt_link' to="/QuizzAnimal">Animal</Link>
              </div>
            </div>
            <a href='#vt' className="hover-orange" >
              Video
            </a>
            <a href="#cnt" className="hover-orange" >
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
