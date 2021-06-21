// pro+editor:markdown
// https://github.com/kkfor/for-editor
import React, { useState, useCallback } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Editor from 'for-editor';

export default (): React.ReactNode => {
  const [value, setValue] = useState(`# Ant Design Pro+
  #### 基于 Ant Design Pro V4 添加了多种库和组件，并做了进一步的优化。`);

  const handleChange = useCallback((val) => {
    setValue(val);
  }, []);

  return (
    <PageHeaderWrapper>
      <Editor value={value} onChange={handleChange} subfield={true} preview={true} />
    </PageHeaderWrapper>
  );
};
