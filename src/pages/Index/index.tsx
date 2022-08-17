/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-22 18:27:57
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-17 16:26:20
 * @ Description: i@rua.moe
 */

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useIntl } from 'umi';
import styles from './style.less';
import Cubes from './components/Cubes';
import Lights from './components/Lights';
import Environment from './components/Environment';
import Product from './components/Product';
import Introduction from './components/Introduction';
import Overview from './components/Overview';
import Community from './components/Community/index';
import Partners from './components/Partners';
import Tokenomics from './components/Tokenomics';
import Contact from './components/Contact';
import Investors from './components/Investors/index';
import ADTab from './components/ADTab';
import { useEffect } from 'react';
import Loading from '@/components/Loading/Loading';
import BasicLayout from '@/layout/BasicLayout';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const intl = useIntl();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <BasicLayout>
      <Loading loading={loading} />
      <div className={styles.indexContainer}>
        <div className={styles.bannerContainer}>
          <div className={styles.title}>
            {intl.formatMessage({
              id: 'index.slogan',
              defaultMessage: 'BUILD AD3 FOR WEB3',
            })}
          </div>
          <Canvas
            style={{
              position: 'absolute',
            }}
          >
            <Cubes />
            <Lights />
            <Environment />
          </Canvas>
        </div>
        <Product />
        <ADTab />
        <Introduction />
        <Overview />
        <Community />
        <Partners />
        <Tokenomics />
        <Contact />
        <Investors />
      </div>
    </BasicLayout>
  )
}

export default Index;
