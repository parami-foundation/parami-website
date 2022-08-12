/**
 * @ Author: Hikaru
 * @ Create Time: 2022-01-20 20:05:49
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-13 01:40:53
 * @ Description: i@rua.moe
 */

import React from 'react';
import style from './style.less';
import { ReactComponent as Logo } from '@/assets/logo-animation.svg';

const Loading: React.FC<{
  loading?: boolean;
}> = ({ loading }) => {
  return (
    <>
      <div
        className={style.mainContainer}
        style={{
          opacity: loading && loading ? 1 : 0,
          zIndex: loading && loading ? 999 : -100,
        }}
      >
        <div className={style.pageContainer}>
          <Logo />
        </div>
      </div>
    </>
  )
}

export default Loading;
