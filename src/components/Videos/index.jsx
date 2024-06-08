import '../../global.css';
import './style.css';

export const Videos = () => {
  return (
    <>
      <h2 className="video__title">Learn more from video</h2>
      <div className="video__container">
        <div className="arrow-back arrow"> &lsaquo;</div>
        <div className="arrow-right arrow"> &rsaquo;</div>
        <a href="#" className="video__item video__item--butterfly"></a>
        <a href="#" className="video__item video__item--eagle"></a>
        <a
          href="#"
          className="video__item video__item--fox video__item--center"
        ></a>
        <a href="#" className="video__item video__item--panda"></a>
        <a href="#" className="video__item video__item--turtle"></a>
      </div>
    </>
  );
};
