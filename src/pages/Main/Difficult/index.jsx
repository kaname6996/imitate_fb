import React, { Component } from 'react'
import './index.css'
import { Image } from 'antd';
import 'antd/dist/antd.css'


export default class Difficult extends Component {
    state={paste:[
        {id:'01',text:`遇到的困難：如何在map里面使用ref函数`,time:'發生時間：2021/6',pic:'./media/map.png',url:'https://cloud.tencent.com/developer/ask/220163'},
        {id:'02',text:`遇到的困難：NPM無法使用`,time:'發生時間：2021/5',pic:'./media/npm問題.jpg',url:'https://stackoverflow.com/questions/53368554/call-c-program-files-nodejs-node-exe-errors/53721001'},
    ]}


    render() {
        const {paste}=this.state
        return (
                <div className='paste'>
                    {
                        paste.map((e)=>{
                            return(
                            <div className='pastetab' key={e.id}>
                            <div className='pastimg'><img src="./media/大頭照.jpg" alt="" /><a href={e.url} target="_blank" rel="noreferrer" title='解決方法'>{e.text}</a></div>
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
