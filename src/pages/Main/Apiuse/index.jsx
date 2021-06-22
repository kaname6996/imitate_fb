import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class Apiuse extends Component {
    //拿到搜索資料
    state={
        pics:[],
        isLoading:false
    } 

    componentDidMount(){
        this.token=PubSub.subscribe('pics',(msg,data)=>{
            //console.log('api收到的:',data.pics.data)
            this.setState({pics:data.pics.data,isLoading:false})
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }


    render() {
        //console.log(this.state.pics)
        const {pics}=this.state
        return (
            <div className='paste'>
            {
                pics.map((e)=>{
                    return(
                    <div className='pastetab' key={e.id}>
                    <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><a href={e.links.html} target="_blank" rel="noreferrer" title='連至網站'>{e.alt_description}</a></div>
                    <div>{e.created_at}</div>
                    <div className='works'><img src={e.links.download} alt="123" width={'100%'}/></div>
                    <hr/>
                    <div className='assess'>
                        <div>讚</div><div>留言</div><div>分享</div>
                    </div>
                    <hr/>
                    <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><input type="text" placeholder= ' 公開留言...' /> </div>
                </div>)
                })
                
            }
        </div>
)
    }
}
