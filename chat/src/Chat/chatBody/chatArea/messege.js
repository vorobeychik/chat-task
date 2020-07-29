import React from "react";
import '../../chatStyles.css'
import FriendMenu from "./friendMenu";

export default function Message(props) {
    if('yourMessage' in props.messageInfo){
        return (
            <div className={'your__message__container'}>
                <p className={'your__message__time'}>{ props.messageInfo.time }</p>
                <div className={'your__message'}>
                    <p className={'your__message__text'}>{props.messageInfo.message }</p>
                </div>
            </div>
        )
    }else{
        let stylingMessege = 'message';
        let stylingMessegeContainer = 'message__container'
        if(props.index !== props.state.message.length - 1 && props.state.message[props.index + 1].username === props.messageInfo.username ){
           stylingMessege = 'same__message';
           stylingMessegeContainer = 'same__message__container'
        }
        return(
            <div className={stylingMessegeContainer}>
                <div className={stylingMessege}>
                    <div className={'container'}>
                        <div className={'message__header'}>
                            <img src={require(`../../assets/${props.messageInfo.icon}`)} className={'person__icon'} />
                            <p className={'message__username'}>{ props.messageInfo.username }</p>
                            <p className={'message__level'}>{ props.messageInfo.level }</p>
                            <FriendMenu index = {props.index} state = {props.state} setState = {props.setState}/>
                        </div>
                        <p className={'message__text'}>{ props.messageInfo.message }</p>
                    </div>
                </div>
                <p className={'message__time'}>{ props.messageInfo.time }</p>
            </div>
        )

    }
}