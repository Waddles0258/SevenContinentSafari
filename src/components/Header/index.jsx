import '../../global.css';

export const Header = () => {
  return (
    <header>
    <div className="header-box">
    <a href="#Logo"><img className="logo" src="src/components/Header/img/Logo.svg" alt="logo"/></a>
    <div className="nav">
      <a className="hover-orange" href="#Pexxesso">Pexxesso</a>
    <div className="subnav">
      <button className="subnavbtn">Quizes <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content hover-orange">
        <a href="#Continent quizz">Continent quizz</a>
        <a href="#Animal quizz">Animal quizz</a>
      </div>
    </div>
      <a className="hover-orange" href="#Video">Video</a>
      <a className="hover-orange" href="#Contact">Contact</a>
    </div>
  </div>
  </header>
  );
};
