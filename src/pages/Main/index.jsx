import React, { Component } from 'react'
import {withRouter,Route} from 'react-router-dom'
import Lifepic from './Lifepic'
import Works from './Works'
import News from './News'
import Website from './Website'
import Information from './Information'
import Autobiography from './Autobiography'
import Difficult from './Difficult'
import './index.css'

class Main extends Component {
    render() {
        return (
                    <div className='no2out'>
                        <div className="no2">
                            <br/><br/>
                            {/* <!-- 限時 --> */}
                            <div className='moving'>
                                    <div style={{backgroundImage: `url('./media/1.jpeg')`,backgroundSize: `cover`}}><img src="./media/1-1.jpeg" alt="" /></div>
                                    <div style={{backgroundImage: `url('./media/2.jpeg')`,backgroundSize: `cover`}}><img src="./media/2-1.jpeg" alt="" /></div>
                                    <div style={{backgroundImage: `url('./media/3.jpeg')`,backgroundSize: `cover`}}><img src="./media/3-1.jpeg" alt="" /></div>
                                    <div style={{backgroundImage: `url('./media/4.jpeg')`,backgroundSize: `cover`}}><img src="./media/4-1.jpeg" alt="" /></div>
                                    <div className='movinghide' style={{backgroundImage: `url('./media/5.jpeg')`,backgroundSize: `cover`}}><img src="./media/5-1.jpeg" alt="" /></div>
                                    <div className='movinghide' style={{backgroundImage: `url('./media/6.jpeg')`,backgroundSize: `cover`}}><img src="./media/6-1.jpeg" alt="" /></div>
                            </div>
                            {/* <!-- 發布消息 --> */}
                            <div className="publish">
                                <div className="publishhow">
                                <img src="./media/大頭照.jpg" alt=""/>
                                <input type="text" placeholder= '  鄭雲庭，在想些什麼？'/>
                                </div>
                                <hr/>
                                <div className="publishother">
                                    <div><i className="fas fa-video " style={{fontSize: 18,color: `palevioletred`}}></i>&nbsp;直播視訊</div>
                                    <div><i className="far fa-images"  style={{fontSize: 18,color: `rgb(141, 212, 34)`}}></i>&nbsp;相片/影片</div>
                                    <div><i className="far fa-laugh-beam" style={{fontSize: 18,color: `rgb(255, 196, 0)`}}></i>&nbsp;感受/活動</div>
                                </div>
                            </div>
                            <Route path='/main' component={Works}/>
                            <Route path='/lifepic' component={Lifepic}/>
                            <Route path='/news' component={News}/>
                            <Route path='/website' component={Website}/>
                            <Route path='/information' component={Information}/>
                            <Route path='/autobiography' component={Autobiography}/>
                            <Route path='/difficult' component={Difficult}/>
                        </div>
                    </div>

        )
    }
}
export default withRouter(Main)