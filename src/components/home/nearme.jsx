import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import data from './data';
import './css/nearme.css';

function Nearme() {
  // const [ngos, setNgos] = useState(data);
  const ngos = data;
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const lastIndex = ngos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, ngos]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h1>Nearby NGO&#39;s</h1>
        <h3>Choose a near by NGO to volunteer</h3>
      </div>
      <div className="section-center">
        {ngos.map((ngo, ngoIndex) => {
          const { id, name, image, title, link } = ngo;
          let position = 'nextSlide';
          if (ngoIndex === index) position = 'activeSlide';

          if (
            ngoIndex === index - 1 ||
            (index === 0 && ngoIndex === ngos.length - 1)
          )
            position = 'lastSLide';

          return (
            <article className={position} key={id}>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              {/* <button className="volunteer"> Volunteer</button> */}
              <img src={image} alt="" className="ngo-img" />
              <p>Click here to know more</p>
              {/* <button type="button">Volunteer</button> */}
              <Button variant="success" href={link}>
                Volunteer
              </Button>{' '}
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Nearme;

// import React from 'react'
// import Maps from "../asset/images/map.jpg"

// export default function Nearme(){
//     return (

//       <section id="pricing" class="bg-light mt-5">
//         <div class="container-lg">
//           <div class="text-center">
//             <h2>Near by NGOs</h2>
//             <p class="lead text-muted">
//               Choose a ngo near by you to volumteer.
//             </p>
//           </div>

//           <div class="row my-5 align-items-center justify-content-center">
//             <div class="col-8 col-lg-4 col-xl-3">
//               <div class="card border-0">
//                 <div class="card-body text-center py-4">
//                   <h4 class="card-title">Clean up foundation</h4>

//                   <p class="lead card-subtitle">Pune, Maharashtra</p>

//                   <img className="d-block w-100 bg-light" src={Maps} alt="First slide" />
//                   <a href="#" class="btn btn-outline-primary btn-lg mt-3">
//                   Volunteer
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div class="col-9 col-lg-4 bg-light">
//               <div class="card border-primary border-2 px-3">
//                 <div class="card-header text-center text-primary">
//                   Most Visited
//                 </div>
//                 <div class="card-body text-center py-5">
//                   <h4 class="card-title">Clean up foundation</h4>
//                   <p class="lead card-subtitle">Pune, Maharashtra</p>
//                   <img className="d-block w-100" src={Maps} alt="First slide" />
//                   <a href="#" class="btn btn-outline-primary btn-lg mt-3">
//                   Volunteer
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div class="col-8 col-lg-4 col-xl-3">
//               <div class="card border-0">
//                 <div class="card-body text-center py-4">
//                   <h4 class="card-title">Clean up foundation</h4>
//                   <p class="lead card-subtitle">Pune, Maharashtra</p>
//                   <img className="d-block w-100" src={Maps} alt="First slide" />
//                   <a href="#" class="btn btn-outline-primary btn-lg mt-3">
//                     Volunteer
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// }
