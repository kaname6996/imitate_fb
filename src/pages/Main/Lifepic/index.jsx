import React, { Component } from 'react'
import './index.css'
import { Image } from 'antd';
import 'antd/dist/antd.css'


export default class Lifepic extends Component {
    state={paste:[
        {id:'01',text:`課程名稱：全端開發工程師就業養成班`,time:'課程時間：2021/3-2021/5',pic:'./media/結訓.jpg'},
        {id:'02',text:'課程名稱：尚硅谷2021版React技术全家桶全套完整版(線上學習)',time:'課程時間：2021/5-2021/6',pic:'./media/尚硅谷.jpg'},
        {id:'03',text:'課程名稱：CSScoke-金魚都能懂的教學系列CSS/Bootstrap5',time:'課程時間：2021/5-2021/6',pic:'./media/金魚都能懂.jpg'},
        {id:'04',text:'課程名稱：尚硅谷最新版JavaScript基础全套教程完整版(線上學習)',time:'課程時間：2021/2-2021/4',pic:'./media/尚硅谷-JS.jpg'},
        {id:'05',text:'課程名稱：彭彭的課程-HTML/CSS/JavaScript/React/ES6(線上學習)',time:'課程時間：2021/1-2021/3',pic:'./media/彭彭.jpg'},
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
                        </div>)
                        })
                        
                    }
                </div>
            
        )
    }
}
