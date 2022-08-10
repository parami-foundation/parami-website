/**
 * @ Author: Hikaru
 * @ Create Time: 2022-01-20 17:54:01
 * @ Modified by: Hikaru
 * @ Modified time: 2022-08-10 03:23:34
 * @ Description: i@rua.moe
 */

import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';

export async function getInitialState(): Promise<{
  collapsed?: boolean | undefined;
  settings?: Partial<LayoutSettings>;
  loading?: boolean;
}> {
  console.log("\n %c Made with ❤️ by Parami %c Design: Hikaru(i@rua.moe) \n\n", "color: #ff5b00; background: #fff; padding:5px 0;", "background: #ff5b00; padding:5px 0;");

  return {
    collapsed: false,
    settings: defaultSettings,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    pure: true,
    onPageChange: () => {
      setInitialState({ ...initialState });
    },
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
