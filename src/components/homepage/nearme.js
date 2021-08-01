import React from 'react'
import Maps from "../asset/images/map.jpg"


export default function Nearme(){
    return (
        
      <section id="pricing" class="bg-light mt-5">
        <div class="container-lg">
          <div class="text-center">
            <h2>Near by NGOs</h2>
            <p class="lead text-muted">
              Choose a ngo near by you to volumteer.
            </p>
          </div>

          <div class="row my-5 g-3 align-items-center justify-content-center">
            <div class="col-8 col-lg-4 col-xl-3">
              <div class="card border-0">
                <div class="card-body text-center py-4">
                  <h4 class="card-title">Clean up foundation</h4>

                  <p class="lead card-subtitle">Pune, Maharashtra</p>
                  
                  <img className="d-block w-100" src={Maps} alt="First slide" />
                  <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                  Volunteer
                  </a>
                </div>
              </div>
            </div>

            <div class="col-9 col-lg-4">
              <div class="card border-primary border-2">
                <div class="card-header text-center text-primary">
                  Most Visited
                </div>
                <div class="card-body text-center py-5">
                  <h4 class="card-title">Clean up foundation</h4>
                  <p class="lead card-subtitle">Pune, Maharashtra</p>
                  <img className="d-block w-100" src={Maps} alt="First slide" />
                  <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                  Volunteer
                  </a>
                </div>
              </div>
            </div>

            <div class="col-8 col-lg-4 col-xl-3">
              <div class="card border-0">
                <div class="card-body text-center py-4">
                  <h4 class="card-title">Clean up foundation</h4>
                  <p class="lead card-subtitle">Pune, Maharashtra</p>
                  <img className="d-block w-100" src={Maps} alt="First slide" />
                  <a href="#" class="btn btn-outline-primary btn-lg mt-3">
                    Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}