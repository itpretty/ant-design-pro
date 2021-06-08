import { Tooltip, Tag } from 'antd';
import type { Settings as ProSettings } from '@ant-design/pro-layout';
import { ReloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import type { ConnectProps } from 'umi';
import { connect, SelectLang, useIntl } from 'umi';
import type { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';

// pro+routeTabs
import { Mode } from '../RouteTabs';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  theme?: ProSettings['navTheme'] | 'realDark';

  // pro+routeTabs
  routeTabsMode?: Mode;
  routeTabsReloadable?: boolean;
} & Partial<ConnectProps> &
  Partial<ProSettings>;

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  // pro+routeTabs
  const { theme, layout, routeTabsMode, routeTabsReloadable } = props;
  let className = styles.right;

  // pro+routeTabs
  const { formatMessage } = useIntl();

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      {/* pro+routeTabs */}
      {routeTabsMode && routeTabsReloadable ? (
        <Tooltip title={formatMessage({ id: 'component.globalHeader.reload' })}>
          <a
            style={{
              color: 'inherit',
            }}
            className={styles.action}
            onClick={() => window.reloadTab()}
          >
            <ReloadOutlined />
          </a>
        </Tooltip>
      ) : null}
      <Tooltip title="使用文档">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,

  // pro+routeTabs
  routeTabsMode: settings?.routeTabs?.mode,
  routeTabsReloadable: settings?.routeTabs?.reloadable,
}))(GlobalHeaderRight);
