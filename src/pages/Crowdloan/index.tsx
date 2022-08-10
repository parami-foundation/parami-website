/**
 * @ Author: Hikaru
 * @ Create Time: 2022-01-21 15:37:12
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:29:03
 * @ Description: i@rua.moe
 */

import React from 'react';
import styles from '@/style/common.less';
import Banner from './components/banner';
import Cards from './components/cards';
import Signup from './components/signup';
import BasicLayout from '@/layout/BasicLayout';

const Crowdloan: React.FC = () => {
  return (
    <BasicLayout>
      <div className={styles.mainContainer}>
        <Banner />
        <Cards />
        <Signup />
      </div>
    </BasicLayout>
  )
}

export default Crowdloan;
