import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, Button,Modal } from 'antd';
import {Link}  from 'react-router-dom'
import md5 from 'blueimp-md5'
import {login} from '../../api/person'

const FormItem = Form.Item
function loginFail(){
  const modal = Modal.success({
    title:'登录失败',
    content:'请稍后重新尝试'
  })
  setTimeout(()=>modal.destroy,1000)
}

class Login extends React.Component{
  constructor(props, context) {
		super(props, context);
	}

  render(){
    const  onFinish = async(values) => {
      console.log(values)
      let {name, password} = values;
      password = md5(password);
      let result=await login({name: name, password: password});
      if (parseFloat(result.code)===0){
        // this.props.queryBaseInfo();
        
        // 登录成功后我们需要重新获取已购买的课程信息（未登录下，从
        // 服务器获取的支付课程信息是获取不到的，但是登录后，我们把购买
        // 信息同步到redux中，这样在我的课程中才能展示出来相关的信息）
        // this.props.queryPay();
        this.props.history.go(-1);
        return ;
      }
      // 如果登录失败，弹窗提示框
      loginFail();
     
    }
    const   onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }

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
    
      return (<div className='personLoginBox'>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
         登录
        </Button>
        Or <Link to={'/person/register'}>立即注册</Link>
      </FormItem>
    </Form>
    </div>
    )
    }
}
export default  connect()(Login)