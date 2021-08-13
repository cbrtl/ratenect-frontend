import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../../components/home/navbar';
import IntroSlider from '../../components/home/introslides';
import Search from '../../components/home/search';
import Nearme from '../../components/home/nearme';
import Recommend from '../../components/home/recommend';
import Footer from '../../components/home/footer';
import Vol from './volunteer';
import ngo from './ngo';
import Blog from './blog';
import Donation from './donate';

const home = () => (
  <div style={{ marginTop: '100px' }}>
    <IntroSlider />
    <Search />
    <Nearme />
    <Recommend />
  </div>
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
