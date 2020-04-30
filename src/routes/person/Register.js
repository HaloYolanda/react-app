import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, InputNumber, Button } from 'antd';

const FormItem = Form.Item
class Register extends React.Component{
    constructor(props,context)
{
    super(props,context)
}   
handleSubmit=ev=>{

}

    render(){
        // const { getFieldDecorator } = this.props.form;

        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
          return <div className = 'personLoginBox'>
       <Form {...layout}  >
        <FormItem
        label="Username"
        name="username"
        rules={[
          { required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </FormItem>

     
      <FormItem
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </FormItem>
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit">
         注册
        </Button>
      </FormItem>
    </Form>
    </div>
    }}

export default  connect()(Register)