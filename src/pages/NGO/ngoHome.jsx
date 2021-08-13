import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Homepage/homepage';
import NgoProfileForm from './ngoProfileForm';
import NgoNavbar from '../../components/ngoComp/NgoNavbar';
import Footer from '../../components/home/footer';
import Nearme from '../../components/home/nearme';
import Recommend from '../../components/home/recommend';

const Ngohome = () => (
  <div style={{ marginTop: '100px' }}>
    <Nearme />
    <Recommend />
  </div>
);

export default function NgoHome() {
  return (
    <Router>
      <div>
        <NgoNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ngo/home" exact component={Ngohome} />
          <Route path="/ngo/profile" component={NgoProfileForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
