import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';
import { useState } from 'react';
import { ArrowUp } from '../ArrowUp';

export const QuizzContinent = () => {
  const [page, setPage] = useState(0);

  const [continents, setContinents] = useState([
    {
      number: '1',
      question: 'How many continents are there on our planet?',
      right: '7',
      wrong: '5',
      mark: 0,
    },
    {
      number: '2',
      question: 'How many oceans are there on our planet?',
      right: '5',
      wrong: '7',
      mark: 0,
    },
    {
      number: '3',
      question: 'Which continent is completely covered with ice',
      right: 'Antarctica',
      wrong: 'Africa',
      mark: 0,
    },
    {
      number: '4',
      question: 'Which ocean is the saltiest?',
      right: 'Atlantic Ocean',
      wrong: 'Indian ocean',
      mark: 0,
    },
    {
      number: '5',
      question: 'Which ocean is the largest?',
      right: 'Pasific ocean',
      wrong: 'Arctic Ocean',
      mark: 0,
    },
    {
      number: '6',
      question: 'Which continent is a separate country?',
      right: 'Australia',
      wrong: 'Antarctica',
      mark: 0,
    },
    {
      number: '7',
      question: 'On which continent is the world`s smallest state Vatican ?',
      right: 'Europa',
      wrong: 'Asia',
      mark: 0,
    },
  ]);
  const result = () => {
    let sum = 0;
    continents.forEach((prvek) => {
      sum += prvek.mark;
    });
    alert(sum);
    return 6;
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
        <h1 className="quizz_title">Continent quizz</h1>
        <h2 className="quizz_subtitle">
          What do you know about continents and oceans?
        </h2>
        <div className="quizz_container-box">
          <p className="quizz_page-number">{continents[page].number} of 7</p>
          <div className="quizz_box">
            <img className="box_img" src="/Earth.svg" alt="earth" />
          </div>
          <p className="quizz_question">{continents[page].question}</p>
          <div
            onClick={() => {
              handleRightAnswerClick();
              setPage(page < 6 ? page + 1 : result());
            }}
            className="quizz-field"
          >
            <p className="answer">{continents[page].right}</p>
          </div>
          <div
            onClick={() => {
              handleWrongAnswerClick();
              setPage(page < 6 ? page + 1 : result());
            }}
            className="quizz-field quizz-field--second"
          >
            <p className="answer">{continents[page].wrong}</p>
          </div>
          <div className="quizz_btns">
            <a
              onClick={() => setPage(page > 0 ? page - 1 : 0)}
              href="#"
              className="previous"
            >
              &laquo; Previous
            </a>
            <a
              onClick={() => setPage(page < 6 ? page + 1 : result())}
              href="#"
              className="next"
            >
              Next &raquo;
            </a>
          </div>
        </div>
      </div>

      <div className="answer_rslt">
        <div className='box_rslt'>
       <img className="icon_smile" alt="smile" src="/smileperfect.svg" />
        <div className="rslt">
          <img className="icon_checked" src="/checked.svg" />
          <p className="text_rslt">Correct!</p>
        </div></div>
      </div>

      <div className="answer_rslt incorrect">
        <div className='box_rslt'>
       <img className="icon_smile" alt="smile" src="/smilegood.svg" />
        <div className="rslt">
          <img className="icon_checked" src="/incorrect.svg" />
          <p className="text_rslt">Incorrect!</p>
        </div></div>
      </div>

      <Videos />
      <Footer />
      <ArrowUp/>
    </>
  );
};
