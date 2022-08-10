import { IApi } from 'umi';

export default (api: IApi) => {
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
