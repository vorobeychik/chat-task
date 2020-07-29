import React from "react";

export default function FriendMenu(props) {
    function showFriendMenu(){
        let arr = [props.index === props.state.showFriendMenu[0] ? undefined : props.index]
        props.setState(
            {
                ...props.state,
                showFriendMenu: arr,
            }
        )
    }
    return (
            <div className={'friend__menu'}>
                <div className={'message__dot__container'} onClick={() => showFriendMenu()}>
                    <div className="menu__dot"></div>
                    <div className="menu__dot"></div>
                    <div className="menu__dot"></div>
                </div>
                <div className={props.state.showFriendMenu[0] === props.index ? 'friend__menu__container friend__menu__container__visible' :'friend__menu__container'} >
                    <p className={'friend__menu__item'}>{props.state.language.friendMenu[0]}</p>
                    <p className={'friend__menu__item'}> {props.state.language.friendMenu[1]}</p>
                </div>
            </div>
    )
}