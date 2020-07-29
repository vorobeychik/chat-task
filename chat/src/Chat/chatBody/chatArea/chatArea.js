import React, {useEffect, useState} from "react";
import Message from "./messege";
import FriendMenu from "./friendMenu";

export default function ChatArea(props) {

    let [inputValue,setInputValue] = useState('');



    function addNewMessage(event) {
        if (event.code === 'Enter'){
            let message = {
                message:inputValue,
                yourMessage:true,
                time:`${
                    new Date().getHours().toString().length === 1 ? `0${new Date().getHours()}`: new Date().getHours()
                }:${
                    new Date().getMinutes().toString().length === 1 ? `0${new Date().getMinutes()}`:new Date().getMinutes()
                }`
            };
            if(props.state.tab ===  "chat") {
                props.setState({
                    ...props.state,
                    message: props.state.message.concat(message)
                })
            }else{
                props.setState({
                    ...props.state,
                    clanMessage: props.state.clanMessage.concat(message)
                })

            }

            setInputValue('')
        }
    }

    function changeInputValue(event) {
        setInputValue(event.target.value)
    }

    function hideFriendMenu(){
        props.setState({
            ...props.state,
            showFriendMenu:[undefined],
        })
    }
    useEffect(() => {
        document.addEventListener('keydown',addNewMessage);
         return () => document.removeEventListener('keydown',addNewMessage);
        }
    ,);


    return (
        <div onScroll={() => hideFriendMenu()}>
            <div className="chat__messages__container">
                { props.messages.map((e, i, array) => <Message index = {i} state = {props.state} setState = {props.setState}messageInfo = {array[i]} key = {i} />) }
            </div>

            <div className="chat__input">
                <div className={'chat__input__container'}>
                    <input value={inputValue} className={'input'} placeholder={props.state.language.placeHolder} onChange={(event) => changeInputValue(event)}/>
                    <img className={'chat__smile'} src={require('../../assets/emojiMenuIcon.png')}/>
                </div>
            </div>
        </div>
    )
}