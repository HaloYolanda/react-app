import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, Button,Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link}  from 'react-router-dom'
import md5 from 'blueimp-md5'
import {login} from '../../api/person'

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

  handleSubmit = ev => {
		ev.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				// console.log('Received values of form: ', values);
				let {username, password} = values;
				password = md5(password);
				let result=await login({name: username, password: password});
				if (parseFloat(result.code)===0){
					this.props.queryBaseInfo();
					
					// 登录成功后我们需要重新获取已购买的课程信息（未登录下，从
					// 服务器获取的支付课程信息是获取不到的，但是登录后，我们把购买
					// 信息同步到redux中，这样在我的课程中才能展示出来相关的信息）
					this.props.queryPay();
					this.props.history.go(-1);
					return ;
				}
				loginFail();
			}
		});
	};

  render(){
    // const {getFieldDecorator} = this.props.form;
    console.log(this.props.form)
      return (<div className='personLoginBox'>
       <Form onSubmit={this.handleSubmit}>
      <Form.Item>
        {/* {getFieldDecorator('userName',{})(
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />,
        )} */}
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />,
        
      </Form.Item>
      <Form.Item>
      {/* {getFieldDecorator('userPass',{})(
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />,)} */}
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         登录
        </Button>
        Or <Link to={'/person/register'}>立即注册</Link>
      </Form.Item>
    </Form>
    </div>
    )
    }
}
export default  connect()(Login)