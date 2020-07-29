import React, {useEffect, useState} from "react";
import ChatBody from "./chatBody/chatBody";
import DropDownMenu from "./chatHeader/dropDownMenu";

export default function Chat() {
   let [state,setState] = useState({
      tab:'chat',
      message:[
          {username:'Hate', level:9,message:'Всем привет!',time:'16:17'},
          {username:'EtherMonster', level:10,message:'Привет', time: '16:18'},
          {username:'Don_Ekater', level:7,message:'В индии  бойня!',time: '20:53'},
          {username:'GameMaster', level:8,message:'Всем привет я хочу поделиться с вами одной фичей про  майнинг автоматом не развод ',time: '21:08'},
          {yourMessage:true, message:'Вот это да я так думаю ты реально хорош в этом', time:'22:10' },
          {username:'WebCard' ,level:11,message:'123',time: '00:03'},
          {yourMessage:true, message:'?', time:'00:15' },
      ],
      showFriendMenu:[undefined],
      lang:'Ru'
   });
   useEffect(() => console.log(state))
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

   function switchLang(event) {
        console.log(event.target.textContent)
       switch(event.target.textContent){
           case 'English':
                setState({
                    ...state,
                    lang:'En'
                });
                break;
           case 'Русский':
               setState({
                   ...state,
                   lang:'Ru'
               });
               break;
           case 'China':
               setState({
                   ...state,
                   lang:'Chi'
               });
               break;
       }
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
                    <DropDownMenu state = {state}>
                        <p className={'dropDown__menu__item'} onClick={(event) => switchLang(event)}>Русский</p>
                        <p className={'dropDown__menu__item'} onClick={(event) => switchLang(event)}>English</p>
                        <p className={'dropDown__menu__item'} onClick={(event) => switchLang(event)}>China</p>
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