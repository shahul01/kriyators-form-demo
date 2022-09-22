import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

interface IAccountProps {
}

const Account: FC<IAccountProps> = (props) => {

  return (
    <div className='account-container'>
      <Link href='/account/details'>
        <a>AccountDetails</a>
      </Link>
    </div>
  )
};

export default Account;
