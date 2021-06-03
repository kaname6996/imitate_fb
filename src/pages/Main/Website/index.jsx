import React, { Component } from 'react'
import './index.css'


export default class News extends Component {
    state={paste:[
        {id:'01',text:'網站名稱：Ant Design',time:'類型：React',pic:'./media/ant.design.jpg',url:'https://ant.design/'},
        {id:'02',text:'網站名稱：MATERIAL-UI',time:'類型：React',pic:'./media/material.jpg',url:'https://material-ui.com/'},
        {id:'03',text:'網站名稱：bootstrap',time:'類型：bootstrap',pic:'./media/bootstrap.jpg',url:'https://getbootstrap.com/'},
        {id:'04',text:'網站名稱：JavaScript Array 陣列操作方法大全',time:'類型：JavaScript',pic:'./media/JavaScript Array.jpg',url:'https://www.oxxostudio.tw/articles/201908/js-array.html#array_reduce'},
        {id:'05',text:'網站名稱：Font Awesome',time:'類型：icon',pic:'./media/fontawesome.jpg',url:'https://fontawesome.com/'},
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
