import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import '../../global.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Pexesso } from '../../components/Pexesso';
import { MainVideo } from '../../components/MainVideo';
import { CountDown } from '../../components/CountDown';
import { Map } from '../../components/Map';
import { Videos } from '../../components/Videos';
import { Quizz } from '../../components/Quizz';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <MainVideo />
        <CountDown />
      </div>
      <Map />
      <Videos />
      <Pexesso />
      <Quizz />
      <Footer />
    </>
  );
};
