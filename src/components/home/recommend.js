import React from "react";
import blog from "../asset/images/blog.jpg";
import profile from "../asset/images/profile.png";

export default function Recommend() {
  return (
    //method 1

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

    //method 2

    // <section id="rec-blogs">
    //   <div className="container-md">
    //     <div className="text-center">
    //       <h2>Recommended Blogs</h2>
    //       <p className="lead text-muted">Blogs you would love</p>
    //     </div>
    //   </div>

    //   <div className="row my-5 g-5 justify-content-around align-items-center bg-light">
    //     <div className="col-6 col-lg-4">
    //       <div className="row-6 row-lg-4">
    //           <div className="row ">
    //             <div className="col-6 col-lg-2">
    //               <div className="card-profile-image">
    // <a href="#">
    //   <img src={profile} alt="" className="rounded-circle" />
    // </a>
    //               </div>
    //             </div>
    //             <div className="col-6 col-lg-5">
    //               <div className="row-6 row-lg-12">
    //                 <h5 className=" col-6 col-lg-12">Barenya Kumar Panda</h5>
    //                 <h5 >23 April,2021</h5>
    //               </div>
    //             </div>
    //           </div>
    //       </div>
    //       <div className="row-6 row-lg-4">
    //         <p className="col-10 col-lg-10">
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
    //               corrupti rem mollitia nobis deserunt placeat in amet dicta
    //               delectus doloribus, necessitatibus et ex eaque modi ipsa!
    //               Tempore assumenda debitis sequi laborum in optio numquam
    //               perferendis saepe est, recusandae quaerat fuga voluptatem esse,
    //               cum iure illo fugiat. Ipsam nostrum facere quibusdam.
    //         </p>
    //       </div>
    //     </div>

    //       <div className="col-6 col-lg-4">
    //         <img src={blog} alt="blog" className="img-fluid" />
    //       </div>

    //   </div>
    // </section>

    //method3

    <div className="container-fluid bg-light">
      <div className="text-center">
          <h2>Recommended Blogs</h2>
          <p className="lead text-muted">Blogs you would love</p>
        </div>
      <div className="row">
        <div className="col mt-1 mt-lg-3">
          <div className="row ">
            {/* <div className="col bg-secondary"> */}
            {/* <div className="card-profile-image"> */}
            <a href="#" className="col  ms-1 ms-lg-5">
              <img src={profile} alt="" className="rounded-circle " />
            </a>
            {/* </div> */}
            {/* </div> */}
            <div className="col-8 me-3 mt-2 me-lg-5 col-lg-9">
              <div className="row ">Rahul Srivastav khandelwal</div>
              <div className="row ">29 April,2021</div>
            </div>
          </div>
          <div className="row m-lg-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate ratione temporibus deserunt sunt cumque
              quod quas vero, quis eum ea magni nostrum quisquam autem dolor
              nihil quibusdam. Itaque rerum sint tempora maiores perspiciatis ut
              delectus vitae vel temporibus natus voluptatibus non eaque,
              architecto odio esse quas, unde et doloremque debitis sequi!
              Natus, labore facere, facilis itaque ratione veniam ullam
              voluptate dolores similique veritatis rerum pariatur excepturi
              eligendi repellendus autem a at. Natus similique, maxime, ducimus
              sit repudiandae tenetur doloremque provident blanditiis, dolore
              commodi debitis? Quaerat quos labore magni harum, accusamus vitae
              consequatur eos aspernatur quisquam pariatur repellendus enim
              repudiandae.
            </p>
          </div>
          <div className="row justify-content-center  ">
            <button type="button" className="btn btn-outline-dark col-3 me-2">
              Health
            </button>
            <button type="button" className="btn button button5 btn-outline-dark col-3 ">
              online
            </button>
          </div>
        </div>

        <div className="col">
          <img src={blog} alt="blog" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
