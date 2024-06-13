import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';

export const QuizzLastPage = () => {
  return (
    <>
      <Header />
      <div className="quizzLP_container">
        <div className="quizzLP_container-box">
          <div className="quizzLP_box">
            <div className='box_cnt'>
            <p className="lst-page_header">Your score is 6 out of 7</p>
            <p className="lst-page_text">
              Nice work! Take another chilly trip and go for a better score.<br/>
              <strong>Play again!</strong>
            </p>
           {/*<p className="lst-page_text">That`s a perfect score, great job!</p> */} 
            <div className="quizz_btn">
              <a href="#" className="play-again">
                Play again
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Videos />
      <Footer />
    </>
  );
};
