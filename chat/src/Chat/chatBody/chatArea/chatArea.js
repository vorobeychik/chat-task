import React, {useEffect, useState} from "react";
import Message from "./messege";
import FriendMenu from "./friendMenu";

export default function ChatArea(props) {

    function hideFriendMenu(){
        console.log(1)
        props.setState({
            ...props.state,
            showFriendMenu:[undefined],
        })
    }
    return (
        <div onScroll={() => hideFriendMenu()}>
            <div className="chat__messages__container">
                { props.state.message.map((e, i, array) => <Message index = {i} state = {props.state} setState = {props.setState}messageInfo = {array[i]} key = {i} />) }
            </div>

            <div className="chat__input">
                <div className={'chat__input__container'}>
                    <p className={'chat__input__text'}>Достигните уровня 2, чтобы писать в чате.</p>
                    <img className={'chat__smile'} src={require('../../assets/smile2.png')}/>
                </div>
            </div>
        </div>
    )
}