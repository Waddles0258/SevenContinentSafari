import '../../global.css';
import './style.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Videos } from '../Videos';
import { useState } from 'react';

export const Pexesso = () => {
  const [status, setStatus] = useState(false);
  const cardsData = [
    { id: 1, value: 'black-swan' },
    { id: 2, value: 'buffalo' },
    { id: 3, value: 'camel' },
    { id: 4, value: 'cockatoo' },
    { id: 5, value: 'cougar' },
    { id: 6, value: 'coyote' },
    { id: 7, value: 'crocodile' },
    { id: 8, value: 'dingo' },
    { id: 9, value: 'eagle' },
    { id: 10, value: 'elephant' },
    { id: 11, value: 'fox' },
    { id: 12, value: 'giraffe' },
    { id: 13, value: 'gorilla' },
    { id: 13, value: 'sloth' },
    { id: 13, value: 'hare' },
    { id: 13, value: 'hedgehog' },
    { id: 13, value: 'jaguar' },
    { id: 13, value: 'kangaroo' },
  ];
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
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
        <div className="pexesso__item pexesso__item--green"></div>
      </div>
      <div className="button__play-again">Play again</div>
      <Videos />
      <Footer />
    </>
  );
};
