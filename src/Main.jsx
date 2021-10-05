import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './pages/Homepage/blog';
import Donation from './pages/Homepage/donate';
import Homepage from './pages/Homepage/homepage';
import Ngo from './pages/Homepage/ngo';
import Vol from './pages/Homepage/volunteer';
import Ngohome from './pages/NGO/ngoHome';
import NgoPageLayout, {
  NgoProfileFormLayout,
  NgoProfileViewLayout,
  NgoDetailedProfileLayout,
} from './pages/NGO/layout';
import HomePageLayout from './pages/Homepage/layout';

import NgoForm from './components/ngoComp/ngoForm';
import NgoProfile from './components/ngoComp/ngoProfileView';
import NgoAboutUs from './components/ngoComp/ngoAboutUs';
import NgoBlogComp from './components/home/recommend';
import NgoGallery from './components/ImageSlider/ImgSlider';
import NgoContactUs from './components/ngoComp/ngoContactUs';
import NgoWorkspace from './pages/NGO/ngoWorkspace';
import NgoBlog from './pages/NGO/ngoBlog';

function Main() {
  return (
    <Router>
      <Switch>
        <RouteWithLayout
          exact
          path="/"
          component={Homepage}
          layout={HomePageLayout}
        />
        <RouteWithLayout
          exact
          path="/donation"
          component={Donation}
          layout={HomePageLayout}
        />
        <RouteWithLayout
          exact
          path="/volunteer"
          component={Vol}
          layout={HomePageLayout}
        />
        <RouteWithLayout
          exact
          path="/blog"
          component={Blog}
          layout={HomePageLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo"
          component={Ngo}
          layout={HomePageLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/home"
          component={Ngohome}
          layout={NgoPageLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile/aboutUs"
          component={NgoAboutUs}
          layout={NgoDetailedProfileLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile/blog"
          component={NgoBlogComp}
          layout={NgoDetailedProfileLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile/gallery"
          component={NgoGallery}
          layout={NgoDetailedProfileLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile/contactUs"
          component={NgoContactUs}
          layout={NgoDetailedProfileLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile-edit"
          component={NgoForm}
          layout={NgoProfileFormLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/profile"
          component={NgoProfile}
          layout={NgoProfileViewLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/blog"
          component={NgoBlog}
          layout={NgoProfileFormLayout}
        />
        <RouteWithLayout
          exact
          path="/ngo/workspace"
          component={NgoWorkspace}
          layout={NgoProfileFormLayout}
        />
      </Switch>
    </Router>
  );
}

function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        React.createElement(
          layout,
          props,
          React.createElement(component, props)
        )
      }
    />
  );
}

export default Main;
