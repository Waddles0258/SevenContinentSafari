import '../../global.css';
import './style.css';

export const Videos = () => {
  return (
    <>
      <h2 id="vt" className="video__title">Learn more from video</h2>
      <div className="video__container">
        <div className="arrow-back arrow"> &lsaquo;</div>
        <div className="arrow-right arrow"> &rsaquo;</div>
        <iframe className="video"
          width="350"
          height="205"
          src="https://www.youtube.com/embed/EIVWtXjcfhA?si=TbntYLj6ox6h2Lk4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe className="video"
          width="350"
          height="205"
          src="https://www.youtube.com/embed/oKficmlxzaI?si=SURV1EAPqWI4f0hx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe className="video"
          width="350"
          height="205"
          src="https://www.youtube.com/embed/RO2m1EAIEkg?si=QVfTto5QraItjmPi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe className="video"
          width="350"
          height="205"
          src="https://www.youtube.com/embed/fy33YRfNlOE?si=UuF_em4htnmC4U2C"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
