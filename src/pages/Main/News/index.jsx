import React, { Component } from 'react'
import './index.css'


export default class News extends Component {
    state={paste:[
        {id:'01',text:'最新消息：微軟宣佈2022年正式終止IE服務',time:'消息時間：2021/05',pic:'./media/IE.jpg',url:'https://www.bnext.com.tw/article/62956/microsoft-retire-internet-explorer'},
    ]}


    render() {
        const {paste}=this.state
        return (
                <div className='paste'>
                    {
                        paste.map((e)=>{
                            return(
                            <div className='pastetab' key={e.id}>
                            <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><a href={e.url} target="_blank" rel="noreferrer">{e.text}</a></div>
                            <div>{e.time}</div>
                            <div className='works'><a href={e.url} target="_blank" rel="noreferrer"><img src={e.pic} alt="" /></a></div>
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
