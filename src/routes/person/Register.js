import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, InputNumber, Button ,Modal} from 'antd';
import md5 from 'blueimp-md5';
import {register} from "../../api/person";

const FormItem = Form.Item
/*注册失败提示框*/
function registerFail() {
	let secondsToGo = 10;
	const modal = Modal.error({
		title: '注册失败',
		content: `请 ${secondsToGo} 秒钟后再尝试！.`,
	});
	const timer = setInterval(() => {
		secondsToGo -= 1;
		modal.update({
			content: `请 ${secondsToGo} 秒钟后再尝试!`,
		});
	}, 1000);
	setTimeout(() => {
		clearInterval(timer);
		modal.destroy();
	}, secondsToGo * 1000);
}

class Register extends React.Component{
    constructor(props,context){
    super(props,context)
    
}   
    render(){
    
      const onFinish = async (values) => {
        values.password = md5(values.password);
				let result = await register(values);
				if (parseFloat(result.code)===0){
					// this.props.queryBaseInfo();// 注册成功后需要从服务器重新获取数据来更新redux的state值【登录成功时同样的操作】
					this.props.history.push('/person');
					return;
				}
				registerFail();
     
      }
     const onFinishFailed = errorInfo => {
        console.log(errorInfo)
       
      };
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
       <Form {...layout} 
         onFinish={onFinish}
         onFinishFailed={onFinishFailed} >
        <FormItem
        label="Username"
        name="name"
        rules={[
          { required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input.Password />
      </FormItem>
      <FormItem
        label="phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input.Password />
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