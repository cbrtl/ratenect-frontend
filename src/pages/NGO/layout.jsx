import React from 'react';
import NgoNavbar from '../../components/ngoComp/NgoNavbar';
import EditBtn from '../../components/ngoComp/editBtn';
import Dashboard from '../../components/ngoComp/ProfileDash';
import Footer from '../../components/home/footer';

const NgoPageLayout = ({ children }) => (
  <>
    <NgoNavbar />
    {children}
    <Footer />
  </>
);

export const NgoProfileLayout = ({ children }) => (
  <NgoPageLayout>
    <div style={{ marginTop: '50px' }}>
      <EditBtn />
    </div>
    {children}
  </NgoPageLayout>
);

export const NgoProfileFormLayout = ({ children }) => (
  <NgoPageLayout>
    <Dashboard />
    {children}
  </NgoPageLayout>
);

export default NgoPageLayout;
