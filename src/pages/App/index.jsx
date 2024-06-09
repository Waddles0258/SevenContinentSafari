import React from 'react';

import '../../global.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Pexesso } from '../../components/Pexesso';
import { MainVideo } from '../../components/MainVideo';
import { CountDown } from '../../components/CountDown';
import { Map } from '../../components/Map';
import { Videos } from '../../components/Videos';
import { Quizz } from '../../components/Quizz';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <MainVideo />
        <CountDown />
      </div>
      <Map />
      <Videos />
      <Footer />
     
    </>
  );
};
