import '../../global.css';
import './style.css';

export const Videos = () => {
  return (
    <>
      <h2 className="video__title">Learn more from video</h2>
      <div className="video__container">
        <div className="arrow-back arrow"> &lsaquo;</div>
        <div className="arrow-right arrow"> &rsaquo;</div>
        <iframe width="400" height="235" src="https://www.youtube.com/embed/EIVWtXjcfhA?si=TbntYLj6ox6h2Lk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="400" height="235" src="https://www.youtube.com/embed/oKficmlxzaI?si=SURV1EAPqWI4f0hx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="400" height="235" src="https://www.youtube.com/embed/RO2m1EAIEkg?si=QVfTto5QraItjmPi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="400" height="235" src="https://www.youtube.com/embed/fy33YRfNlOE?si=UuF_em4htnmC4U2C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
      </div>
    </>
  );
};
