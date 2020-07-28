import React from "react";
import '../../chatStyles.css'

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
        return(
            <div className={'message__container'}>
                <div className={'message'}>
                    <div className={'container'}>
                        <div className={'message__header'}>
                            <p className={'message__username'}>{ props.messageInfo.username }</p>
                            <p className={'message__level'}>{ props.messageInfo.level }</p>
                            <div className={'dot__container'}>
                                <div className="menu__dot"></div>
                                <div className="menu__dot"></div>
                                <div className="menu__dot"></div>
                            </div>
                        </div>
                        <p className={'message__text'}>{ props.messageInfo.message }</p>
                    </div>
                </div>
                <p className={'message__time'}>{ props.messageInfo.time }</p>
            </div>
        )

    }
}