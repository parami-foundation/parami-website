/**
 * @ Author: Hikaru
 * @ Create Time: 2022-01-21 02:11:08
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:34:32
 * @ Description: i@rua.moe
 */

import { config } from '@/config/config';
import React from 'react';
import { useEffect } from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => {
  useEffect(() => {
    history.push(config.page.homePage);
  }, []);

  return (
    <></>
  )
};

export default NoFoundPage;
