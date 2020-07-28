import React from "react";
import ChatArea from "./chatArea/chatArea";

export default function ChatBody(props) {
    switch (props.state.tab) {
        case "chat":
            return (
             <ChatArea state = {props.state} setState = {props.setState}/>
            );
        case "friends":
            return (
                <div>
                    Друзья
                </div>
            );
        case "clan":
            return (
                <div>
                    clan
                </div>
            );

    }

}