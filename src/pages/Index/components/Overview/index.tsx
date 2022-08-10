/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-09 22:49:46
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:32:46
 * @ Description: i@rua.moe
 */

import { Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const Overview: React.FC = () => {
  const intl = useIntl();

  const { Title } = Typography;

  return (
    <div className={style.overviewContainer}>
      <div className={styles.contentContainer}>
        <Title
          level={3}
          className={style.title}
        >
          {intl.formatMessage({
            id: 'index.overview.title',
            defaultMessage: 'Overview',
          })}
        </Title>
        <img
          src={"/images/overview.svg"}
          className={style.cover}
          alt="overview"
        />
        <div className={style.content}>
          {intl.formatMessage({
            id: 'index.overview.content',
            defaultMessage: 'Parami Protocol proposes an AD3.0 paradigm powered by blockchain technology for Web 3. It provides a protocol stack for building a user-centric, tokenized advertising economy.'
          })}
        </div>
      </div>
    </div>
  )
}

export default Overview;
