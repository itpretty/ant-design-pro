import type { MenuDataItem } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';

// pro+routeTabs
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
import type { StateType } from './login';

export { GlobalModelState, UserModelState };

export type Loading = {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
};

export type ConnectState = {
  global: GlobalModelState;
  loading: Loading;

  // pro+routeTabs
  settings: SettingModelState;
  user: UserModelState;
  login: StateType;
};

export type Route = {
  routes?: Route[];
} & MenuDataItem;
