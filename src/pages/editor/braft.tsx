// pro+editor:braft
// https://github.com/margox/braft-editor
import React, { useEffect } from 'react';
import { Form, Input, Button, Row, Card } from 'antd';
import BraftEditor from './component/braft';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const FormItem = Form.Item;

export default (): React.ReactNode => {
  const [form] = Form.useForm();

  useEffect(() => {
    const timer = setTimeout(() => {
      form.setFieldsValue({
        content: '<p>Hello <b>Rich Text Editor!</b></p>',
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [form]);

  const onFinish = (values) => {
    const result = {
      title: values.title,
      content: typeof values.content === 'string' ? values.content : values.content.toHTML(),
    };
    console.log(result);
  };

  return (
    <PageHeaderWrapper>
      <Card>
        <Form form={form} onFinish={onFinish}>
          <FormItem
            name="title"
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
            name="content"
            label="Content"
            trigger="onBlur"
            validateTrigger="onBlur"
            required
            rules={[
              // https://ant.design/components/form-cn/#components-form-demo-register
              () => ({
                validator(_, value) {
                  if (typeof value !== 'string') {
                    var htmlObject = document.createElement('div');
                    htmlObject.innerHTML = value?.toHTML();
                    if (!htmlObject.innerText.match(/\S/)) {
                      return Promise.reject(new Error('Please enter content'));
                    }
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <BraftEditor placeholder="Please enter content" />
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
