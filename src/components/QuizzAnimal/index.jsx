import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';
import { useState } from 'react';
import { ArrowUp } from '../ArrowUp';

export const QuizzAnimal = () => {
  const [page, setPage] = useState(0);

  const [continents, setContinents] = useState([
    {
      number: '1',
      question: 'On what continent does Macaw parrot live?',
      right: 'South America',
      wrong: 'Asia',
      mark: 0,
    },
    {
      number: '2',
      question: 'On what continent does Emperor penguin live?',
      right: 'Antarctica',
      wrong: 'Africa',
      mark: 0,
    },
    {
      number: '3',
      question: 'On what continent does kangaroo live?',
      right: 'Australia',
      wrong: 'Antarctica',
      mark: 0,
    },
    {
      number: '4',
      question: 'On what continent does panda live?',
      right: 'Asia',
      wrong: 'Africa',
      mark: 0,
    },
    {
      number: '5',
      question: 'On what continent does lion live?',
      right: 'Africa',
      wrong: 'Antarctica',
      mark: 0,
    },
    {
      number: '6',
      question: 'On what continent does fox live?',
      right: 'Europa',
      wrong: 'Asia',
      mark: 0,
    },
    {
      number: '7',
      question: 'On what continent does fox live?',
      right: 'North America',
      wrong: 'Europa',
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
        <h1 className="quizz_title">ANIMAL QUIZ</h1>
        <h2 className="quizz_subtitle">
          On what continents do these animals live?
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
      <Videos />
      <Footer />
      <ArrowUp/>
    </>
  );
};
