/**
 * @ Author: Hikaru
 * @ Create Time: 2022-02-22 18:27:57
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:23:40
 * @ Description: i@rua.moe
 */

import { SiDiscord, SiTwitter, SiMedium, SiTelegram } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import { Footer } from 'antd/lib/layout/layout';
import { useIntl } from 'umi';
import styles from './style.less';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'common.copyright.produced',
  });

  return (
    <Footer
      className={styles.footer}
    >
      <div className={styles.left}>
        <span className={styles.copyright}>
          {defaultMessage}
        </span>
        <div className={styles.links}>
          <a>
            {intl.formatMessage({
              id: 'common.privacyPolicy',
              defaultMessage: 'Privacy Policy',
            })}
          </a>
          <a>
            {intl.formatMessage({
              id: 'common.termsOfServices',
              defaultMessage: 'Terms of Services',
            })}
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.sns}>
          <SiTwitter
            onClick={() => { window.open('https://twitter.com/ParamiProtocol', '_blank') }}
          />
          <SiMedium
            onClick={() => { window.open('https://paramiprotocol.medium.com/', '_blank') }}
          />
          <SiDiscord
            onClick={() => { window.open('https://discord.com/invite/bxFuekgvYJ', '_blank') }}
          />
          <HiMail
            onClick={() => { window.open('mailto:info@parami.io', '_blank') }}
          />
          <SiTelegram
            onClick={() => { window.open('https://t.me/ParamiProtocolEN', '_blank') }}
          />
        </div>
      </div>
    </Footer>
  );
};
