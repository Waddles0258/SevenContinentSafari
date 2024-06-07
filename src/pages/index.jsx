import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <>
    <div class="wrapper">
      <div className="main__container container">
        <iframe
          className="main__video"
          src="https://www.youtube.com/embed/ZPYVCyC5m2U?si=oRy_SN-CeQ_Lep-O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p className="main__text">
          In this video, you will learn about the seven continents and five
          oceans. You will<br></br> also learn a few interesting facts about
          them, including the animals which can be<br></br> found on each
          continent and ocean!
        </p>
      </div>
      <div className="countdown__container container">
        <h2 className="countdown__text">
          Let`s explore <br></br>Seven <br></br>Continents Safari
        </h2>
        <h2 className="countdown__number">3 2 1 . .</h2>
      </div>
    </div>
    <div className="map__container container">
      <p className="map__title-ocean map__title-ocean--arctic">Arctic Ocean</p>
      <p className="map__title-ocean map__title-ocean--atlantic">
        Atlantic Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--pacific1">
        Pacific Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--pacific2">
        Pacific Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--indian">Indian Ocean</p>
      <p className="map__title-ocean map__title-ocean--southern">
        Southern Ocean
      </p>
      <p className="map__title-continent map__title-continent--europe">
        Europa
      </p>
      <div className="map__img map__img--squirrel"></div>
      <div className="map__img map__img--fox"></div>
      <div className="map__img map__img--hare"></div>
      <div className="map__img map__img--hedgehog"></div>
      <div className="map__img map__img--stork"></div>
      <div className="map__img map__img--wolf"></div>
      <p className="map__title-continent map__title-continent--asia">Asia</p>
      <p className="map__title-continent map__title-continent--n-america">
        North<br></br> America
      </p>
      <p className="map__title-continent map__title-continent--s-america">
        South<br></br> America
      </p>
      <div className="map__img map__img--toukan"></div>
      <div className="map__img map__img--parrot"></div>
      <div className="map__img map__img--cingulata"></div>
      <div className="map__img map__img--sloth"></div>
      <div className="map__img map__img--jaguar"></div>
      <div className="map__img map__img--cougar"></div>
      <p className="map__title-continent map__title-continent--africa">
        Africa
      </p>
      <p className="map__title-continent map__title-continent--australia">
        Australia
      </p>
      <p className="map__title-continent map__title-continent--antarctica">
        Antarctica
      </p>
    </div>
    <h2 className="video__title">Learn more from video</h2>
    <div className="video__container">
      <a href="#" className="video__item video__item--butterfly"></a>
      <a href="#" className="video__item video__item--eagle"></a>
      <a
        href="#"
        className="video__item video__item--fox video__item--center"
      ></a>
      <a href="#" className="video__item video__item--panda"></a>
      <a href="#" className="video__item video__item--turtle"></a>
    </div>
    ,
  </>,
);
