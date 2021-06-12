import React, { Component } from 'react'
import './index.css'
import { Image } from 'antd';
import 'antd/dist/antd.css'

export default class Works extends Component {

    state={paste:[
        {id:'01',text:'作品名稱：鸚鵡介紹網站',time:'作品時間：2021/6',pic:'./media/鸚鵡介紹.gif',url:'https://kaname6996.github.io/parrot_intro/#/about'},
        {id:'02',text:'作品名稱：無人車介紹',time:'作品時間：2021/6',pic:'./media/無人車.gif',url:'https://kaname6996.github.io/autonomous_vehicle/'},
        {id:'03',text:'作品名稱：蘋果綠咖啡',time:'作品時間：2021/3',pic:'./media/蘋果綠.gif',url:'https://kaname6996.github.io/react_applegreen/#/home'},
    ]}

    render() {
        const {paste}=this.state
        return (
                <div className='paste'>
                    {
                        paste.map((e)=>{
                            return(
                                <div className='pastetab' key={e.id}>
                                <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><a href={e.url} target="_blank" rel="noreferrer"> {e.text}</a></div>
                                <div>{e.time}</div>
                                <div className='works'><Image src={e.pic} alt="123" width={'100%'}/></div>
                                <hr/>
                                <div className='assess'>
                                    <div>讚</div><div>留言</div><div>分享</div>
                                </div>
                                <hr/>
                                <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><input type="text" placeholder= ' 公開留言...' /> </div>
                                </div>
                            )
                        })
                    }
                </div>
            
        )
    }
}
