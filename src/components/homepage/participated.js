import React from 'react';
import { Carousel,Container } from 'react-bootstrap';
import img from '../asset/images/prt.png'

export default function Participate(){
    return(


        <Carousel className="m-5 p-5" >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src= {img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Plantation Drive</h1>
          <p>Go Green India Foundation PUNE</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

    


    )
}