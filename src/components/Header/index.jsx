import '../../global.css';

export const Header = () => {
  return (
    <header>
      <div className="header-box">
        <a href="#Logo" className="logo"></a>
        <div className="nav">
          <a className="hover-orange" href="http://localhost:5173/Pexesso">
            Pexxesso
          </a>
          <div className="subnav">
            <a className="hover-orange">
              Quizes <i className="fa fa-caret-down"></i>
            </a>
            <div className="subnav-content hover-orange">
              <a href="http://localhost:5173/Quizz">Continent quizz</a>
              <a href="http://localhost:5173/Quizz">Animal quizz</a>
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
  );
};
