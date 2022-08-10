/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-22 18:27:57
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:23:25
 * @ Description: i@rua.moe
 */

import React, { useState } from 'react';
import { useIntl, history } from 'umi';
import Headroom from 'react-headroom';
import style from './style.less';
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import { getMenuData } from '@ant-design/pro-components';

const Header: React.FC = () => {
  const [tab, setTab] = useState<string>('');
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const intl = useIntl();

  const routes = [
    {
      path: '/',
      hideInMenu: true,
      component: './Index',
    },
    {
      path: '/crowdloan',
      name: 'Crowdloan',
      component: './Crowdloan',
    },
    {
      component: './404',
    },
  ];

  const { menuData } = getMenuData(routes, { locale: true });

  return (
    <>
      <Headroom
        className={style.headerHeadroom}
        wrapperStyle={{
          display: 'flex',
          width: '100%',
        }}
      >
        <header className={style.headerTop}>
          <div
            className='headerLogoTop'
            onClick={() => {
              setTab('/');
              history.push('/');
            }}
          >
            <img
              src={'/images/logo-text-black.svg'}
              alt='Parami'
            />
          </div>
          <div
            className='headerLogoBottom'
            onClick={() => {
              setTab('/');
              history.push('/');
            }}
          >
            <img
              src={'/images/logo-text.svg'}
              alt='Parami'
            />
          </div>
          <div className={style.rightMenu}>
            <ul>
              {menuData?.map((item) => {
                if (!item.hideInMenu) {
                  return (
                    <li
                      className={classNames(
                        style.tabItem,
                        (tab === item.path || history.location.pathname === item.path) ? style.active : '',
                      )}
                      onClick={() => {
                        setTab(item.path as string);
                        history.push(item.path as string);
                      }}
                    >
                      {item.name}
                    </li>
                  )
                }
              })}
              <li
                className={style.tabItem}
                onClick={() => {
                  window.open('https://metaastro.org', '_blank');
                }}
              >
                {intl.formatMessage({
                  id: 'menu.astro',
                })}
              </li>
              <li
                className={style.tabItem}
                onClick={() => {
                  window.open('https://parami.notion.site/Careers-Parami-a162f4e6f3f2422cad00d5e8ece4be43', '_blank');
                }}
              >
                {intl.formatMessage({
                  id: 'menu.career',
                })}
              </li>
              <li
                className={style.tabItem}
                onClick={() => {
                  window.open('https://app.parami.io', '_blank');
                }}
              >
                {intl.formatMessage({
                  id: 'menu.app',
                })}
              </li>
            </ul>
          </div>
        </header>
      </Headroom>
      <div className={style.mobileHeader}>
        <img
          src={'/images/logo-core-black.svg'}
          className={style.mobileLogo}
          alt='Parami'
        />
        <MenuOutlined
          className={style.mobileMenuButton}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </div>
      <div
        className={style.mobileMask}
        style={{
          display: toggleMenu ? 'block' : 'none',
        }}
      />
      <div
        className={style.mobileMenu}
        style={{
          left: toggleMenu ? '0' : '-65vw',
        }}
      >
        <div className={style.mobileMenuHeader}>
          <img
            src={'/images/logo-text.svg'}
            alt='Parami'
          />
        </div>
        <ul className={style.mobileMenuList}>
          {menuData?.map((item) => {
            if (!item.hideInMenu) {
              return (
                <li
                  className={classNames(
                    style.tabItem,
                    (tab === item.path || history.location.pathname === item.path) ? style.active : '',
                  )}
                  onClick={() => {
                    setTab(item.path as string);
                    history.push(item.path as string);
                    setToggleMenu(false);
                  }}
                >
                  {item.name}
                </li>
              )
            }
            return;
          })}
          <li
            className={style.tabItem}
            onClick={() => {
              window.open('https://metaastro.org', '_blank');
            }}
          >
            {intl.formatMessage({
              id: 'menu.astro',
            })}
          </li>
          <li
            className={style.tabItem}
            onClick={() => {
              window.open('https://parami.notion.site/Careers-Parami-a162f4e6f3f2422cad00d5e8ece4be43', '_blank');
            }}
          >
            {intl.formatMessage({
              id: 'menu.career',
            })}
          </li>
          <li
            className={style.tabItem}
            onClick={() => {
              window.open('https://app.parami.io', '_blank');
            }}
          >
            {intl.formatMessage({
              id: 'menu.app',
            })}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header;
