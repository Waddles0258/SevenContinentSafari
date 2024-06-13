import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';
import { useState } from 'react';
import { ArrowUp } from '../ArrowUp';

export const QuizzAnimal = () => {
  const [page, setPage] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  let sum;

  const [continents, setContinents] = useState([
    {
      number: '1',
      question: 'On what continent does Macaw parrot live?',
      right: 'South America',
      wrong: 'Asia',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '2',
      question: 'On what continent does Emperor penguin live?',
      right: 'Antarctica',
      wrong: 'Africa',
      img: '/penguin.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '3',
      question: 'On what continent does kangaroo live?',
      right: 'Australia',
      wrong: 'Antarctica',
      img: '/kangaroo.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '4',
      question: 'On what continent does panda live?',
      right: 'Asia',
      wrong: 'Africa',
      img: '/panda.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '5',
      question: 'On what continent does lion live?',
      right: 'Africa',
      wrong: 'Antarctica',
      img: '/lion.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '6',
      question: 'On what continent does fox live?',
      right: 'Europa',
      wrong: 'Asia',
      img: '/fox.svg',
      mark: 0,
    },
    {
      number: '',
      question: '',
      right: '',
      wrong: '',
      img: '/parrot.svg',
      mark: 0,
    },
    {
      number: '7',
      question: 'On what continent does fox live?',
      right: 'North America',
      wrong: 'Europa',
      img: '/fox.svg',
      mark: 0,
    },
  ]);
  const result = () => {
    sum = 0;
    continents.forEach((prvek) => {
      sum += prvek.mark;
    });
    setTotalSum(sum);
    return 12;
  };
  const restart = () => {
    const updatedContinents = [...continents];
    updatedContinents.forEach((prvek) => {
      prvek.mark = 0;
      setContinents(updatedContinents);
    });
  };
  const handleRightAnswerClick = () => {
    const updatedContinents = [...continents];
    updatedContinents[page].mark = 1;
    setContinents(updatedContinents);
  };

  const handleWrongAnswerClick = () => {
    const updatedContinents = [...continents];
    updatedContinents[page].mark = 0;
    setContinents(updatedContinents);
  };
  return (
    <>
      <Header />
      <div className="quizz_container">
        <h1 className="quizz_title">ANIMAL QUIZ</h1>
        <h2 className="quizz_subtitle">
          On what continents do these animals live?
        </h2>
        <div className="quizz_container-box">
          <p className="quizz_page-number">{continents[page].number} of 7</p>
          <div className="quizz_box">
            <img className="box_img" src={continents[page].img} alt="earth" />
          </div>
          <p className="quizz_question">{continents[page].question}</p>
          <div
            onClick={() => {
              handleRightAnswerClick();
              setPage(page < 12 ? page + 1 : result());
              document.querySelector('.correct').classList.remove('hidden');
            }}
            className="quizz-field"
          >
            <p className="answer">{continents[page].right}</p>
          </div>
          <div
            onClick={() => {
              handleWrongAnswerClick();
              setPage(page < 12 ? page + 1 : result());
              document.querySelector('.incorrect').classList.remove('hidden');
            }}
            className="quizz-field quizz-field--second"
          >
            <p className="answer">{continents[page].wrong}</p>
          </div>
          <div className="quizz_btns">
            <a
              onClick={() => {
                setPage(page > 0 ? page - 1 : 0);
                document.querySelector('.correct').classList.add('hidden');
                document.querySelector('.incorrect').classList.add('hidden');
              }}
              href="#"
              className="previous"
            >
              &laquo; Previous
            </a>
            <a
              onClick={() => {
                setPage(page < 12 ? page + 1 : result());
                document.querySelector('.correct').classList.add('hidden');
                document.querySelector('.incorrect').classList.add('hidden');
                if (page === 12) {
                  document
                    .querySelector('.quizzLP_container')
                    .classList.remove('hidden');
                  document
                    .querySelector('.quizz_container-box')
                    .classList.add('hidden');
                }
              }}
              href="#"
              className="next"
            >
              Next &raquo;
            </a>
          </div>
        </div>
        <div className="answer_rslt correct hidden">
          <div className="box_rslt">
            <img className="icon_smile" alt="smile" src="/smileperfect.svg" />
            <div className="rslt">
              <img className="icon_checked" src="/checked.svg" />
              <p className="text_rslt">Correct!</p>
            </div>
          </div>
        </div>

        <div className="answer_rslt incorrect hidden">
          <div className="box_rslt">
            <img className="icon_smile" alt="smile" src="/smilegood.svg" />
            <div className="rslt">
              <img className="icon_checked" src="/incorrect.svg" />
              <p className="text_rslt">Incorrect!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quizzLP_container hidden">
        <div className="quizzLP_container-box">
          <div className="quizzLP_box">
            <div className="box_cnt">
              <p className="lst-page_header">
                Your score is {totalSum} out of 7
              </p>
              <p className="lst-page_text">
                {totalSum < 7
                  ? 'Nice work! Take another chilly trip and go for a better score.'
                  : 'That`s a perfect score, great job!'}
                <br />
                <strong>Play again!</strong>
              </p>
              <div
                onClick={() => {
                  restart();
                  window.location.reload();
                }}
                className="quizz_btn"
              >
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
      <ArrowUp />
    </>
  );
};
