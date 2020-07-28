import React,{useState} from "react";
import ChatBody from "./chatBody/chatBody";
import DropDownMenu from "./chatHeader/dropDownMenu";

export default function Chat() {
   let [state,setState] = useState({
      tab:'chat',
      message:[
          {username:'Hate', level:9,message:'Всем привет!',time:'16:17'},
          {username:'EtherMonster', level:10,message:'Привет', time: '16:18'},
          {username:'Don_Ekater', level:7,message:'В индии  бойня!',time: '20:53'},
          {username:'GameMaster', level:8,message:'Всем хай',time: '21:08'},
          {yourMessage:true, message:'Вот это да', time:'22:10' },
          {username:'WebCard' ,level:11,message:'123',time: '00:03'},
          {yourMessage:true, message:'?', time:'00:15' },
      ],
      showFriendMenu:false,
   });


   function switchToFiends() {
        setState({
            ...state,
            tab: "friends"
        })
   }

   function switchToClan() {
       setState({
           ...state,
           tab: "clan"
       })
   }

   function switchToChat() {
       setState({
           ...state,
           tab: "chat"
       })
   }



    return (
        <div className="chat__main">
            <div className="chat__header">
                <div className="chat__header__container">
                    <div className={"left__button__block"}>
                        <div  className={state.tab === "chat" ? 'chat__header__text__active':'chat__header__text'}  onClick={ () => switchToChat() } >
                            <p>Общий</p>
                        </div>
                        <div className={state.tab === "clan" ? 'chat__header__text__active':'chat__header__text'}  onClick={ () => switchToClan() }>
                            <p>Клан</p>
                        </div>
                        <div className={state.tab === "friends" ? 'chat__header__text__active':'chat__header__text'} onClick={ () => switchToFiends() }>
                            <p>Друзья</p>
                        </div>
                    </div>
                    <DropDownMenu>
                        <p className={'dropDown__menu__item'}>Русский</p>
                        <p className={'dropDown__menu__item'}>English</p>
                        <p className={'dropDown__menu__item'}>China</p>
                    </DropDownMenu>
                    <div className={'right__button__block'}>
                        <div className={'dot__container'}>
                            <div className="menu__dot"></div>
                            <div className="menu__dot"></div>
                            <div className="menu__dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            < ChatBody state = {state} setState = {setState}/>
        </div>
    )

}