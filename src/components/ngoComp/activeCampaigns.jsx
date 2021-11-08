import React from 'react';
import './css/activeCampaigns.css';

const ActiveCampaigns = ({ campaigns }) => (
  <div className="activeCampaigns">
    <h3>Active Campaigns</h3>
    {campaigns.map((campaign) => (
      <div className="campaignCard">
        <p>{campaign.name}</p>
        <span>{campaign.shortDesc}</span>
        <span className="dates">
          Start Date: {campaign.startDate.substring(0, 10)}{' '}
          &nbsp;&nbsp;&nbsp;&nbsp; End Date:{' '}
          {campaign.regEndDate.substring(0, 10)}
        </span>
      </div>
    ))}
  </div>
);

export default ActiveCampaigns;
