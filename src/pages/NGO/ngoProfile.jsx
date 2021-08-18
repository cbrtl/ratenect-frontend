import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/ngoComp/ProfileDash';
// import EditView from '../../components/ngoComp/EditView'
import NgoForm from '../../components/ngoComp/ngoForm';
import NgoBlog from './ngoBlog';
import NgoWorkspace from './ngoWorkspace';
import EditBtn from '../../components/ngoComp/editBtn';
import NgoProfileView from '../../components/ngoComp/ngoProfileView';
import NgoAboutUs from '../../components/ngoComp/ngoAboutUs';
import NgoBlogComp from '../../components/home/recommend';
import NgoGallery from '../../components/ImageSlider/ImgSlider';
import NgoContactUs from '../../components/ngoComp/ngoContactUs';

const NgoProfile = () => (
  <>
    <div style={{ marginTop: '50px' }}>
      <EditBtn />
    </div>
    <Router>
      <div>
        <NgoProfileView />
        <Switch>
          <Route path="/ngo/profile/aboutUs" component={NgoAboutUs} />
          <Route path="/ngo/profile/blog" component={NgoBlogComp} />
          <Route path="/ngo/profile/gallery" component={NgoGallery} />
          <Route path="/ngo/profile/contactUs" component={NgoContactUs} />
        </Switch>
      </div>
    </Router>
  </>
);

export default function NgoProfileForm() {
  return (
    <Router>
      <div>
        <Dashboard />
        <Switch>
          <Route path="/ngo/profile-edit" component={NgoForm} />
          <Route path="/ngo/profile" component={NgoProfile} />
          <Route path="/ngo/blog" component={NgoBlog} />
          <Route path="/ngo/workspace" component={NgoWorkspace} />
        </Switch>
      </div>
    </Router>
  );
}
