/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-16 03:01:56
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:24:18
 * @ Description: i@rua.moe
 */

import type { ReactNode } from 'react';
import React from 'react';
import { Modal } from 'antd';

import styles from './style.less';


const SmallModal: React.FC<{
  visable: boolean,
  content: ReactNode,
  footer: ReactNode
}> = ({ visable, content, footer }) => {
  return (
    <Modal
      title={false}
      closable={false}
      className={styles.modal}
      centered
      visible={visable}
      width={650}
      footer={footer}
    >
      {content}
    </Modal >
  );
}
export default SmallModal;
