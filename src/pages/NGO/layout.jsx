import React from 'react';
import NgoNavbar from '../../components/ngoComp/NgoNavbar';
import Dashboard from '../../components/ngoComp/ProfileDash';
import Footer from '../../components/home/footer';
import ProfileView from '../../components/ngoComp/ngoProfileView';

const NgoPageLayout = ({ children }) => (
  <>
    <NgoNavbar />
    {children}
    <Footer />
  </>
);

export const NgoProfileViewLayout = ({ children }) => (
  <NgoPageLayout>
    <Dashboard />
    {children}
  </NgoPageLayout>
);

export const NgoDetailedProfileLayout = ({ children }) => (
  <NgoProfileViewLayout>
    <ProfileView />
    {children}
  </NgoProfileViewLayout>
);

export const NgoProfileFormLayout = ({ children }) => (
  <NgoPageLayout>
    <Dashboard />
    {children}
  </NgoPageLayout>
);

export default NgoPageLayout;
