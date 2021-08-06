import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../../components/home/navbar';
import Slider from '../../components/home/introslides';
import Search from '../../components/home/search';
import Nearme from '../../components/home/nearme';
import Recommend from '../../components/home/recommend';
// import Modal from '../../components/homepage/modal';
import Footer from '../../components/home/footer';
import Vol from './volunteer';
import ngo from './ngo';
import Blog from './blog';
import Donation from './donate';
// import Login from './login';

const home = () => (
  <>
    <Slider />
    <Search />
    <Nearme />
    <Recommend />
  </>
);

export default function Home() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/volunteer" component={Vol} />
          <Route path="/ngo" component={ngo} />
          <Route path="/blog" component={Blog} />
          <Route path="/donation" component={Donation} />
          {/* <Route path="/user-signup" component={UserSignup}/> */}
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}
