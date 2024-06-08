import '../../global.css';
import './style.css';

export const MainVideo = () => {
  return (
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
        oceans. You will<br></br> also learn a few interesting facts about them,
        including the animals which can be<br></br> found on each continent and
        ocean!
      </p>
    </div>
  );
};
