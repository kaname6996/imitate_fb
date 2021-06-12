import React, { Component } from 'react'
import './index.css'


export default class Aside extends Component {
    state={
        message:false,
        users:[
            {id:'0',text:'全端開發工程師就業養成班',img:'./media/新尖兵.jpg',done:false},
            {id:'1',text:'逢甲大學學士論文通過證明',img:'./media/論文.jpg',done:false},
            {id:'2',text:'逢甲大學學士論文比賽',img:'./media/論文比賽.jpg',done:false},
            {id:'3',text:'逢甲大學系學會幹部證明',img:'./media/系學會.jpg',done:false},
            {id:'4',text:'逢甲大學畢業證書',img:'./media/畢業證書.jpg',done:false},
            {id:'5',text:'逢甲大學成績表',img:'./media/成績.jpg',done:false},
        ],
        magnifier:false,
    }

    change=(e)=>{
        //console.log(e)
        const {message}=this.state
        const {messname}=this //小窗上面
        const {messpic}=this  //小窗內容
        const {magnifierpic} =this //放大鏡
        this.setState({message:!message})
        this.setState({magnifier:false})
       //console.log (e.target.innerHTML) //列表
      // console.log(messname.innerHTML) //小窗
      messname.innerHTML =e.target.innerHTML
      //console.log(messpic.innerHTML) //小窗內容
      messpic.innerHTML=`<div>${e.target.innerHTML}</div>`
      magnifierpic.innerHTML=`<div>${e.target.innerHTML}</div>`
    }
    magnifier=()=>{
        const {magnifier}=this.state
        this.setState({magnifier:!magnifier})
    }

    xout=()=>{
        this.setState({message:false})
        this.setState({magnifier:false})
    }

    magnifierxout=()=>{
        this.setState({magnifier:false})
    }

    // 點esc關閉
    closehomeout=(event)=>{
        if(event.keyCode === 27) {
            this.setState({magnifier:false})
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.closehomeout);
        }
    componentWillUnmount(){
        document.addEventListener("keydown", this.closehomeout);
    }




    render() {

        const {message,magnifier}=this.state
        const{users}=this.state
        return (
                <div className="no3out">
                    <div className="no3">
                        <br/><br/>
                        <div className="birthday">
                            <div style={{fontSize: 14,marginBottom: 5,color: `rgb(112, 112, 112)`}}>最新證書</div>
                            <div id='birthday'><i className="fas fa-gift" style={{color: `red`,fontSize: 20,marginLeft: 5}}></i>&nbsp; {users[0].text}</div>
                        </div>
                        <hr/>
                        <div className="users">
                            <div style={{fontSize: 14,color: `rgb(112, 112, 112)`}}>證書列表</div>
                            {
                                users.map((i)=>{
                                    return(
                                        <div onClick={(e)=>{this.change(e)}} id='users' key={i.id}><img src={i.img} alt=""/> {i.text}</div>
                                    )
                                })
                            }
                            <div id='users'>
                                <div style={{display: `flex`,alignItems: `center`}}>            
                                    <div id='no3more'><i className="fas fa-chevron-down" ></i> </div>
                                建立新群組
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className='messenger' className={message?'messenger':'messengerx'}>
                            <div className="mess1">
                                        <div ref={(c)=>{this.messname=c}} className='messname'><img src="./media/1.jpeg" alt=""/>OOO</div> 
                                        <div style={{margin: 5,display: `flex`}}>
                                            <div onClick={(e)=>{this.xout(e)}}><i className="fas fa-times"></i></div>
                                        </div>
                                    </div>
                            <div className="mess2" ref={(c)=>{this.messpic=c}} onClick={this.magnifier}> 
                                        <div><img src="./media/畢業證書.jpg" alt=""  /></div>
                                    </div>
                            <div className="mess3">
                                        <div id='mess3'><i className="fas fa-plus"></i></div>
                                        <div id='mess3'><i className="far fa-image"></i></div>
                                        <div id='mess3'><i className="fas fa-caret-square-right"></i></div>
                                        <div id='mess3'><i className="fas fa-camera-retro"></i></div>
                                        <div><input type="text"/></div>
                                        <div id='mess3'><i className="fas fa-laugh-squint"></i></div>
                                        <div id='mess3'><i className="fas fa-thumbs-up"></i></div>
                            </div>
                        </div>
                        <div className={magnifier?'magnifier':'magnifierx'} 
                        ref={(c)=>{this.magnifierpic=c}} 
                        onClick={(e)=>{this.magnifierxout(e)}}
                        ></div>
                    </div>

        )
    }
}



