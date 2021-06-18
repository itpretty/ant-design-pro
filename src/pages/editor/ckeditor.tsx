// pro+editor:ckeditor5
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html
import React, { useState } from 'react';
import { Form, Input, Button, Row, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FormItem = Form.Item;

export default (): React.ReactNode => {
  const [form] = Form.useForm();
  const [data, setData] = useState('<p>Hello from CKEditor 5!</p>');

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <PageHeaderWrapper>
      <Card>
        <Form form={form} onFinish={onFinish}>
          <FormItem
            name="titleCKEditor"
            label="Title"
            rules={[{ required: true, message: 'Please enter title' }]}
          >
            <Input
              placeholder="Please enter title"
              maxLength={20}
              style={{ width: '300px' }}
              autoComplete="off"
            />
          </FormItem>
          <FormItem
            name="contentCKEditor"
            label="Content"
            trigger="onBlur"
            validateTrigger="onBlur"
            required
            initialValue={data}
            rules={[
              // https://ant.design/components/form-cn/#components-form-demo-register
              () => ({
                validator(_, value) {
                  const htmlObject = document.createElement('div');
                  htmlObject.innerHTML = value;
                  if (!htmlObject.innerText.match(/\S/)) {
                    return Promise.reject(new Error('Please enter content'));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            getValueFromEvent={(event, editor) => {
              const data = editor.getData();
              return data;
            }}
          >
            <CKEditor
              editor={ClassicEditor}
              data={data}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </FormItem>
          <FormItem>
            <Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Row>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};
