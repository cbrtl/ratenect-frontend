import React from 'react';
<<<<<<< HEAD
import Nav from '../../components/home/navbar';
import Slider from '../../components/home/introslides';
import Footer from '../../components/home/footer';
=======
import Nav from '../../components/homepage/navbar';
import Slider from '../../components/homepage/introslides';
// import Modal from '../../components/homepage/modal';
import Search from '../../components/homepage/search';
import Nearme from '../../components/homepage/nearme'
import Recommend from '../../components/homepage/recommend'
import Participate from '../../components/homepage/participated';
import Footer from '../../components/homepage/footer';
>>>>>>> 01bf983 (made with html)
import Vol from './volunteer';
import ngo from './ngo';
import Blog from './blog';
import Donation from './donate';
// import Login from './login';
import UserSignup from '../User/usersignup';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function Home(){
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={home}/>
              <Route path="/volunteer" component={Vol}/>
              <Route path="/ngo" component={ngo}/> 
              <Route path="/blog" component={Blog}/> 
              <Route path="/donation" component={Donation}/>
              <Route path="/user-signup" component={UserSignup}/>
            </Switch>
          </div>
          
          <Footer />
        
        </Router>  
    )
}

const home = () => {
  return(
    <Slider />
<<<<<<< HEAD

=======
    <Participate />
    <Search />
    <Nearme />
    <Recommend/>
    
    </>
>>>>>>> 01bf983 (made with html)
  )
  
}