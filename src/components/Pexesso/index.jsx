import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';

export const Pexesso = () => {
  return (
    <>
      <Header />
      <div id="pexesso" className="pexesso__text">
        <p className="main__text">
          Your goal is to find two cards with the same<br></br> picture. Turn
          over any two cards. If they don't<br></br> match, put them back in
          place and try to<br></br>
          remember which card was where.
        </p>
      </div>
      <div className="pexesso__container">
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
        <div className="pexesso__item"></div>
      </div>
      <div className="button__play-again">Play again</div>
      <Videos />
      <Footer />
    </>
  );
};
