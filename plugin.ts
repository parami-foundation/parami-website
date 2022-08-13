import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([
      `<script async src="https://www.googletagmanager.com/gtag/js?id=G-1TNQLBFGEE"></script>`,
      `<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1TNQLBFGEE');
      </script>`,
    ])
    return $;
  });

  api.addHTMLMetas(() => {
    return [
      {
        name: 'keywords',
        content: 'airdrop,coin airdrop,candy airdrop,ad3,parami,candy box,crypto token',
      },
      {
        name: 'description',
        content: 'Parami Protocol is to build Ad3.0 for Web3.0',
      }
    ]
  });

  api.addHTMLLinks(() => {
    return [
      {
        rel: 'icon',
        href: '/images/logo-core-colored-fit-into-round.svg',
        type: 'image/x-icon',
      },
    ]
  });
};
