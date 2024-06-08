import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Pexesso } from '../components/Pexesso';
import { MainVideo } from '../components/MainVideo';
import { CountDown } from '../components/CountDown';
import { Map } from '../components/Map';
import { Videos } from '../components/Videos';

document.querySelector('#root').innerHTML = render(
  <>
    <Header />
    <div class="wrapper">
      <MainVideo />
      <CountDown />
    </div>
    <Map />
    <Videos />
    <Pexesso />
    <Footer />
  </>,
);
