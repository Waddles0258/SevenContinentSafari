import React from 'react';

import '../../global.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MainVideo } from '../../components/MainVideo';
import { CountDown } from '../../components/CountDown';
import { Map } from '../../components/Map';
import { Videos } from '../../components/Videos';

import { Link, Outlet } from 'react-router-dom';
import { AnimalCard } from '../../components/AnimaCard';
import { QuizzLastPage } from '../../components/QuizzLastPage';
import { ArrowUp } from '../../components/ArrowUp';

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
      <ArrowUp/>
    </>
  );
};
