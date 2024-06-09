import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';

export const Quizz = () => {
  return (
    <>
      <Header />
      <div className="quizz_container">
        <h1 className="quizz_title">Continent quizz</h1>
        <h2 className="quizz_subtitle">
          What do you know about continents and oceans?
        </h2>
        <div className="quizz_container-box">
          <p className="quizz_page-number">2 of 7</p>
          <div className="quizz_box">
            <img
              className="box_img"
              src="src/components/Quizz/img/Earth.svg"
              alt="earth"
            />
          </div>
          <p className="quizz_question">
            How many oceans are there on our planet?
          </p>
          <div className="quizz-field">
            <p className="answer">7</p>
          </div>
          <div className="quizz-field quizz-field--second">
            <p className="answer">5</p>
          </div>
          <div className="quizz_btns">
            <a href="#" className="previous">
              &laquo; Previous
            </a>
            <a href="#" className="next">
              Next &raquo;
            </a>
          </div>
        </div>
      </div>
      <Videos />
      <Footer />
    </>
  );
};
