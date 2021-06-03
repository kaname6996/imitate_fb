import React, { Component } from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import Main from '../../pages/Main'
import Nav from '../Nav'
import Aside from '../Aside'
import './index.css'

class Header extends Component {
    state={
        line:false
    }

    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }
    line=()=>{
        const {line}=this.state
        this.setState({line:!line})
    }
    render() {
        const {line}=this.state
        return (
                    <div>
                    <header>
                        <div className="lefthead">
                            <i style={{cursor: 'pointer'}} className="fab fa-facebook" id='icon' onClick={()=>this.Goto('main')}></i>
                            <input className='input1' type="text" placeholder=　　'　　搜尋Facebook...'/>
                        </div>

                        <div className="interhead">
                            <div onClick={()=>this.Goto('main')} title='作品動態'><i className="fas fa-home"></i></div>
                            <div onClick={()=>this.Goto('lifepic')}title='課程生活'><i className="fas fa-school"></i></div>
                            <div onClick={()=>this.Goto('news')} title='最新資訊'><i className="fas fa-file"></i></div>
                            <div onClick={()=>this.Goto('website')} title='網站資源'><i className="fas fa-search"></i></div>
                            <Redirect to='/main'/>
                        </div>

                        <div className='interhead-line'>
                            <div id='line-line' onClick={this.line}><i className="fas fa-bars" style={{marginTop:'2vh'}}></i></div>
                            <div onClick={()=>this.Goto('main')} className={line?'line-line':'line-linex'} title='作品動態'><i className="fas fa-home"></i></div>
                            <div onClick={()=>this.Goto('lifepic')} className={line?'line-line':'line-linex'} title='課程生活'><i className="fas fa-school"></i></div>
                            <div onClick={()=>this.Goto('news')} className={line?'line-line':'line-linex'} title='最新資訊'><i className="fas fa-file"></i></div>
                            <div onClick={()=>this.Goto('website')} style={{borderEndStartRadius:15,borderEndEndRadius:15}} className={line?'line-line':'line-linex'} title='網站資源'><i className="fas fa-search"></i></div>
                            </div>


                        <div className='righthead'>
                            <div title='個人履歷' className='user'><img src="./media/大頭照.jpg" alt=""/><b>王小明</b>&nbsp;&nbsp;&nbsp;</div>
                            <div className='rightpic'><i className="fas fa-plus"></i></div>
                            <div title='聯絡方式' className='rightpic'><i className="fab fa-facebook-messenger"></i></div>
                            <div className='rightpic'><i className="fas fa-bell"></i></div>
                            <div className='rightpic'><i className="fas fa-sort-down"></i></div>
                        </div>
                    </header>
                    <article>
                        <Nav/>
                        <Main/>
                        <Aside/>
                    </article>
                    </div>


        )
    }
}

export default withRouter(Header)