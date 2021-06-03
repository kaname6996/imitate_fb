import React, { Component } from 'react'
import './index.css'


export default class Information extends Component {
    state={paste:[
        {id:'01',text:'個人資料',time:'製作日期：2021/6',pic:'./media/履歷個人資料.jpg'},
        {id:'02',text:'學歷、工作經歷',time:'製作日期：2021/6',pic:'./media/學歷、工作經歷.jpg'},
        {id:'03',text:'專長與技能',time:'製作日期：2021/6',pic:'./media/can.jpg'},
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
                            <div className='works'><img src={e.pic} alt="" /></div>
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
