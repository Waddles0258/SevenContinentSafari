import '../../global.css';

export const Header = () => {
  return (
    <header>
      <div className="header-box">
        <a href="#Logo" className="logo"></a>
        <div className="nav">
          <a className="hover-orange" href="#Pexxesso">
            Pexxesso
          </a>
          <div className="subnav">
            <a className="hover-orange">
              Quizes <i className="fa fa-caret-down"></i>
            </a>
            <div className="subnav-content hover-orange">
              <a href="#Continent quizz">Continent quizz</a>
              <a href="#Animal quizz">Animal quizz</a>
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
