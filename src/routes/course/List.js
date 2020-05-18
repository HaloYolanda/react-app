import React from 'react'
import {connect} from 'react-redux'
import { Carousel ,Button} from 'antd'
import action from '../../store/action/index'
import {Link} from 'react-router-dom'
import {CalendarOutlined} from '@ant-design/icons';
import { queryList } from '../../api/course';

class List extends React.Component{
    constructor(props,context){
        super(props,context)
      
        this.state={isLoading:false}
    }
    async componentDidMount(){
        let {queryBanner,bannerData,courseData,queryList} = this.props
        if(!bannerData||bannerData.length===0){
            queryBanner()// dispatch
        }
        if(courseData.data.length===0){
            queryList()
        }
    }
    componentWillReceiveProps(){
        this.setState({isLoading:false})
    }
    queryType=()=>{
        let{courseType} = this.props
        console.log(courseType)
        let text='全部课程'
        if(courseType==='Ae'){
            text='Ae Class'
        }else if(courseType==='Pr'){
            text='Pr Class'
        }else if(courseType==='Id'){
            text='Id Class'
        }
        return text

    }
    loadMore=()=>{
        let {queryList,courseData,courseType} = this.props

        if(this.state.isLoading) return
        this.setState({isLoading:true})
        queryList({
            page:courseData.page+1,
            type:courseType,
            flag:'push'
        })

    }
    render(){ 
        let {bannerData,courseType,courseData} = this.props
        let {data} = courseData
        console.log(this.props)
        console.log(courseData)
        return <div className='listBox'>
            {/* 轮播图和列表 */}
            {bannerData && bannerData.length!==0?<Carousel autoplay>
               {bannerData.map((item,index)=>{
                   let {name,pic} = item
                   return <div key={index}>
                       <img src={pic} alt={name}/>
                   </div>
               })}
            </Carousel>:''}
            {/* 数据列表 */}
            <div className="courseList">
                <h2><CalendarOutlined />{this.queryType()}</h2>
                {/* {console.log(data)} */}
                {data && data.length!==0 ?(<div>
                    <ul>
                  {data.map((item,index) => {
                      let {name,pic,dec,id,time}=item

                      return  <li key={index}>
                      <Link to={{
                          pathname:'/course/info',
                          search:`?courseId=${id}`
                          }}>
                           <h3>{name}</h3>
                           <div className="content">
                               <div className="pic">
                                   <img src={pic} alt={name}/>
                               </div>
                               <div className="desc">
                                   <p>{dec}</p>
                                   <p>课时：{time}</p>
                               </div>
                           </div>
                      </Link>
                  </li>
                  })}
               </ul>
               {courseData.total<=courseData.page?'':(<Button type="dashed" onClick={this.loadMore} loading={this.state.isLoading}>加载更多</Button> )}
               </div>):'暂无数据'}
            </div>
        </div>
       
    }
}

export default  connect(state=>({...state.course}),action.course)(List)