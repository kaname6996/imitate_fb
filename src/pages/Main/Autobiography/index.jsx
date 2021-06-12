import React, { Component } from 'react'
import { Image } from 'antd';
import './index.css'
import 'antd/dist/antd.css'



export default class Information extends Component {
    state={paste:[
        {id:'01',text:'我的自傳',time:'製作日期：2021/6',pic:'./media/自傳.png'},
    ]}


    render() {
        const {paste}=this.state
        return (
                <div className='paste'>
                    {
                        paste.map((e)=>{
                            return(
                            <div className='pastetab' key={e.id}>
                            <div className='pastimg'><img src="./media/大頭照.jpg" alt="" />{e.text}</div>
                            <div>{e.time}</div>
                            <div className='works'><Image src={e.pic} alt="123" width={'100%'}/></div>
                            <hr/>
                            <div className='assess'>
                                <div>讚</div><div>留言</div><div>分享</div>
                            </div>
                            <hr/>
                            <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><input type="text" placeholder= ' 公開留言...' /> </div>
                        
                        {/* <div className='pastebigger'><img src={e.pic} alt="" /></div> */}
                        </div>
                        )
                        })
                        
                    }
                    
                </div>
                
            
        )
    }
}
