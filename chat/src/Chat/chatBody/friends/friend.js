import React from "react";

export default function Friend(props) {

    function deleteFriend() {
        let friendsArray = props.state.friends;
        friendsArray.splice(props.index,1);
        props.setState({
            ...props.state,
            friends:friendsArray,
        })
    }

    return (
        <div className={'friend__container'}>
            <div className={'friend__info'}>
                <p className={'friend__username'}>{props.friendInfo.username}</p>
                <p className={'friend__level'}>{props.friendInfo.level}</p>
                <p className={'friend__clan'}>{props.friendInfo.clan}</p>
                <p className={props.friendInfo.Online ? 'friend__online':'friend__offline'}>{props.friendInfo.Online ? 'Online':'Offline'}</p>
            </div>
            <div className={'friend__buttons'}>
               <img className={'send__button'} src={require('../../assets/send1.png')} />
               <img className={'delete__button'} src={require('../../assets/delete1.png')} onClick={() => deleteFriend()} />
            </div>

        </div>
    )
}