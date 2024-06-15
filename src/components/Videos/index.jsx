import { useState } from 'react';
import '../../global.css';
import './style.css';

export const Videos = () => {
const videos = [
  "https://www.youtube.com/embed/EIVWtXjcfhA?si=TbntYLj6ox6h2Lk4",
  "https://www.youtube.com/embed/oKficmlxzaI?si=SURV1EAPqWI4f0hx",
  "https://www.youtube.com/embed/fy33YRfNlOE?si=UuF_em4htnmC4U2C",
  "https://www.youtube.com/embed/fy33YRfNlOE?si=UuF_em4htnmC4U2C",
  "https://www.youtube.com/embed/I8LHR7KN1tY?si=b6eO9MEiB5Kj7Vwy",
  "https://www.youtube.com/embed/I8LHR7KN1tY?si=b6eO9MEiB5Kj7Vwy",
  "https://www.youtube.com/embed/PagucjTDrVI?si=OPAd00fmHPFLOMAp",
]

  return (
    <>
      <h2 id="vt" className="video__title">Learn more from video</h2>

      <div className="video__container">
        {/*<div 
        className="arrow-back arrow"> &lsaquo;</div>
        <div 
         className="arrow-right arrow"> &rsaquo;</div>*/}

        <iframe className="video"
          src="https://www.youtube.com/embed/EIVWtXjcfhA?si=TbntYLj6ox6h2Lk4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe className="video"
          src="https://www.youtube.com/embed/oKficmlxzaI?si=SURV1EAPqWI4f0hx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe className="video"
          src="https://www.youtube.com/embed/fy33YRfNlOE?si=UuF_em4htnmC4U2C"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        <iframe className='video'
        src="https://www.youtube.com/embed/RO2m1EAIEkg?si=rOfzHRNz1Nl2Bo5c" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       <iframe className="video"
        src="https://www.youtube.com/embed/I8LHR7KN1tY?si=b6eO9MEiB5Kj7Vwy"
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe className="video" src="https://www.youtube.com/embed/FK3dav4bA4s?si=4y14VeuwXrAM9Sl1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>

        <iframe className="video" 
         src="https://www.youtube.com/embed/PagucjTDrVI?si=OPAd00fmHPFLOMAp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>

         <iframe className="video"
         src="https://www.youtube.com/embed/bNYXweQ81vI?si=qmop09KkxWTTXk7d" title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



      </div>
    </>
  );
};
