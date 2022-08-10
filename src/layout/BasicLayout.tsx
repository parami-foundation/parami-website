/**
 * @ Author: Hikaru
 * @ Create Time: 2022-08-10 03:03:16
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:23:29
 * @ Description: i@rua.moe
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

type LayoutProps = {
  children: React.ReactNode;
};

const BasicLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
