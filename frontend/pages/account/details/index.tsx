import { FC, useEffect, useState } from 'react';

interface IAccountDetailsProps {
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {

  return (
    <div className='account-details-container' >
      <div className="header">
        My Profile
      </div>
      <div className="body">
        <div className="form">
          <div className="inputs-container">

          </div>
          <div className="buttons-container">

          </div>
        </div>
        <div className="result">

        </div>
      </div>
    </div>
  )
};

export default AccountDetails;
