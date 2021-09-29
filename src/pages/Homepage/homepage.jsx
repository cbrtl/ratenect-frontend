import React from 'react';
import IntroSlider from '../../components/home/introslides';
import Nearme from '../../components/home/nearme';
import Recommend from '../../components/home/recommend';
import Search from '../../components/home/search';

const Home = () => (
  <div style={{ marginTop: '100px' }}>
    <IntroSlider />
    <Search />
    <Nearme />
    <Recommend />
  </div>
);

export default Home;
