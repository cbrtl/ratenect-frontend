import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../../components/home/navbar';
import Slider from '../../components/home/introslides';
import Search from '../../components/home/search';
import Nearme from '../../components/home/nearme';
import Recommend from '../../components/home/recommend';

// import ngoProfileForm from '../NGO/ngoProfileForm';
// import NgoHome from '../NGO/ngoHome';
// import Modal from '../../components/homepage/modal';
import Footer from '../../components/home/footer';
import Vol from './volunteer';
import Ngo from './ngo';
import Blog from './blog';
import Donation from './donate';
// import Login from './login';

const Home = () => (
  <>
    <Slider />
    <Search />
    <Nearme />
    <Recommend />
    <ngoProfileForm />
  </>
);

export default function LandingPage() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/volunteer" component={Vol} />
          <Route path="/ngo" component={Ngo} />
          <Route path="/blog" component={Blog} />
          <Route path="/donation" component={Donation} />
          {/* <Route path="/ngo/Home" component={NgoHome} /> */}
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}
