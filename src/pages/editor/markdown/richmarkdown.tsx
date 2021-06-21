// pro+editor:rich-markdown
// https://github.com/outline/rich-markdown-editor
import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Editor from 'rich-markdown-editor';

const defaultValue = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

export default (): React.ReactNode => {
  return (
    <PageHeaderWrapper>
      <Card>
        <Editor
          defaultValue={defaultValue}
          onChange={(val) => {
            console.log(val());
          }}
        />
      </Card>
    </PageHeaderWrapper>
  );
};
