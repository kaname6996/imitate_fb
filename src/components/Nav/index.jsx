import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

 class Nav extends Component {

    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }
    render() {
        return (
                    <div className="no1">
                        <br/><br/>
                        <div className="list">
                            <div onClick={()=>this.Goto('information')}><img src="./media/大頭照.jpg" alt=""/> 個人資料</div>
                            <div onClick={()=>this.Goto('autobiography')}><img src="./media/virus.png" alt=""/>自傳介紹</div>
                            <div onClick={()=>this.Goto('main')}><img src="./media/朋友.png" alt=""/>作品動態</div>
                            <div onClick={()=>this.Goto('lifepic')}><img src="./media/社團.png" alt=""/>課程生活</div>
                            <div onClick={()=>this.Goto('news')}><img src="./media/商店.png" alt=""/>最新資訊</div>
                            <div onClick={()=>this.Goto('website')}><img src="./media/影片.png" alt=""/>網站資源</div>
                            <div>
                                <div>            
                                    <div id='more'><i className="fas fa-chevron-down" ></i> </div>
                                顯示更多
                                </div> 
                            </div>
                        </div>
                        <hr/>
                        <div className='fastgo'>
                            <div id='fastnogo'>曾經遇到的困難</div>
                            <div id='fastgo' onClick={()=>this.Goto('difficult')}><img src="./media/npm.png" alt=""/> NPM的使用</div>
                            <div id='fastgo' onClick={()=>this.Goto('difficult')}><img src="./media/M.png" alt=""/> 如何在map里面使用ref函数</div>
                        </div>
                    </div>


        )
    }
}

export default withRouter(Nav)