// pro+editor:react-markdown
// https://github.com/remarkjs/react-markdown
import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const markdown = `A paragraph with *emphasis* and **strong importance**.

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
        <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
      </Card>
    </PageHeaderWrapper>
  );
};
