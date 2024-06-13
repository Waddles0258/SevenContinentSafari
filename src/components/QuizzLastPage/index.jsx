import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';

export const QuizzLastPage = ({ sum, onVote }) => {
  return (
    <>
      <div className="quizzLP_container hidden">
        <div className="quizzLP_container-box">
          <div className="quizzLP_box">
            <div className="box_cnt">
              <p className="lst-page_header">Your score is {sum} out of 7</p>
              <p className="lst-page_text">
                {sum < 7
                  ? 'Nice work! Take another chilly trip and go for a better score.'
                  : 'That`s a perfect score, great job!'}
                <br />
                <strong onClick={onVote(0)}>Play again!</strong>
              </p>
              <div className="quizz_btn">
                <a href="#" className="play-again">
                  Play again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
