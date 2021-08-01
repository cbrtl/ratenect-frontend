import React from "react";
import blog from "../asset/images/blog.jpg";
import profile from "../asset/images/profile.png";

export default function Recommend() {
  return (
    // <section id="rec-blogs">
    //   <div className="container-md">
    //     <div className="text-center">
    //       <h2>Recommended Blogs</h2>
    //       <p className="lead text-muted">Blogs you would love</p>
    //     </div>
    //     <div className="row my-5 g-5 justify-content-around align-items-center bg-light">
    //       <div className="container-fluid mt--7">
    //         <div className="row">
    //           <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
    //             <div className="card card-profile shadow">
    // <div className="row justify-content-center">
    //   <div className="col-lg-3 order-lg-2">
    //     <div className="card-profile-image">
    // <a href="#">
    //   <img
    //     src={profile}
    //     alt=""
    //     className="rounded-circle"
    //   />
    // </a>
    //     </div>
    //   </div>
    //                 <h5 className="col-xl-9 order-xl-2 mb-5 mb-xl-0">
    //                   Barenya Kumar Panda
    //                 </h5>
    //               </div>
    //             </div>
    //             <p className="lead row-xl-4 order-xl-2 mb-5 mb-xl-0">
    //               23 April 2021
    //             </p>
    //           </div>
    //           <p className="col-6 col-lg-4">
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
    //             corrupti rem mollitia nobis deserunt placeat in amet dicta
    //             delectus doloribus, necessitatibus et ex eaque modi ipsa!
    //             Tempore assumenda debitis sequi laborum in optio numquam
    //             perferendis saepe est, recusandae quaerat fuga voluptatem esse,
    //             cum iure illo fugiat. Ipsam nostrum facere quibusdam.
    //           </p>
    // <div className="col-6 col-lg-4">
    //   <img src={blog} alt="blog" className="img-fluid" />
    // </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="rec-blogs">
      <div className="container-md">
        <div className="text-center">
          <h2>Recommended Blogs</h2>
          <p className="lead text-muted">Blogs you would love</p>
        </div>
      </div>

      <div className="row my-5 g-5 justify-content-around align-items-center bg-light">
        <div className="col-6 col-lg-4">
          <div className="row-6 row-lg-4">
              <div className="row ">
                <div className="col-6 col-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img src={profile} alt="" className="rounded-circle" />
                    </a>
                  </div>
                </div>
                <div className="col-6 col-lg-5">
                  <div className="row">
                    <h5 className=" col-6 col-lg-4">Barenya Kumar Panda</h5>
                    <h5 >23 April,2021</h5>
                  </div>
                </div>     
              </div>
          </div>
          <div className="row-6 row-lg-4">
            <p className="col-10 col-lg-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                  corrupti rem mollitia nobis deserunt placeat in amet dicta
                  delectus doloribus, necessitatibus et ex eaque modi ipsa!
                  Tempore assumenda debitis sequi laborum in optio numquam
                  perferendis saepe est, recusandae quaerat fuga voluptatem esse,
                  cum iure illo fugiat. Ipsam nostrum facere quibusdam.
            </p>
          </div>
        </div>


          <div className="col-6 col-lg-4">
            <img src={blog} alt="blog" className="img-fluid" />
          </div>
        
      </div>
    </section>
  );
}
