import React, {useEffect, useState} from "react";
import ChatBody from "./chatBody/chatBody";
import DropDownMenu from "./chatHeader/dropDownMenu";
import lang from "./data/lang";

export default function Chat() {
   let [state,setState] = useState({
      tab:'chat',
      message:[
          {username:'Sasha_Max', level:9,message:'Будет круто!',time:'16:17',icon:'clanIcon2.jpg'},
          {username:'Sasha_Max', level:10,message:'До встречи в Египте', time: '16:18',icon:'clanIcon2.jpg' },
          {username:'Casher', level:7,message:'Сегодня идем нагерманию!!!\n стартуем в 4 часа',time: '20:53',icon:'clanIcon1.jpg'},
          {username:'Mister Cash', level:8,message:'ну, не ожидали, что вас разбомбят?)',time: '21:08',icon:'clanIcon2.jpg'},
          {yourMessage:true, message:'Наконец-то, достойный противник', time:'00:15',icon:'clanIcon1.jpg' },
          {username:'WebCard' ,level:11,message:'123',time: '00:03',icon:'clanIcon1.jpg'},
      ],
      clanMessage:[
           {username:'Sasha_Max', level:9,message:'Попробуем сегодня зайти а Афины',time:'10:54',icon:'clanIcon2.jpg'},
           {username:'Sasha_Max', level:10,message:'?', time: '11:08',icon:'clanIcon2.jpg' },
           {username:'Mister Cash', level:8,message:'Не, я думаю это гиблое дело',time: '11:11',icon:'clanIcon2.jpg'},
           {yourMessage:true, message:'Да давай', time:'11:12',icon:'clanIcon1.jpg' },
       ],
      friends:[
          {username:'Hero123',clan:'Буревестники',level:123,Online:false},
          {username:'Polo',clan:'Буревестники',level:3,Online:false},
          {username:'silnii',clan:'Буревестники',level:26,Online:true},
          {username:'dead inside',clan:'Буревестники',level: 66,Online:false},
          {username:'Hate',clan:'Буревестники',level: 87,Online: true},
          {username:'Lane',clan:'Буревестники',level: 5,Online:false},
      ],
      showFriendMenu:[undefined],
      lang:'Ru',
      language:lang.Ru
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

   function switchLang(event) {
        console.log(event.target.textContent)
       switch(event.target.textContent){
           case 'English':
                setState({
                    ...state,
                    lang:'En',
                    language: lang.En
                });
                break;
           case 'Русский':
               setState({
                   ...state,
                   lang:'Ru',
                   language: lang.Ru
               });
               break;
           case 'China':
               setState({
                   ...state,
                   lang:'Chi',
                   language: lang.Chi
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
                            <p>{state.language.chatHeader[0]}</p>
                        </div>
                        <div className={state.tab === "clan" ? 'chat__header__text__active':'chat__header__text'}  onClick={ () => switchToClan() }>
                            <p>{state.language.chatHeader[1]}</p>
                        </div>
                        <div className={state.tab === "friends" ? 'chat__header__text__active':'chat__header__text'} onClick={ () => switchToFiends() }>
                            <p>{state.language.chatHeader[2]}</p>
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