/**
 * @ Author: Hikaru
 * @ Create Time: 2022-01-20 20:05:49
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:23:59
 * @ Description: i@rua.moe
 */

import React from 'react';
import { Svga } from 'react-svga';
import style from './style.less';

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
          <Svga
            src={'/images/parami.svga'}
            className={style.loadingContainer}
          />
        </div>
      </div>
    </>
  )
}

export default Loading;
