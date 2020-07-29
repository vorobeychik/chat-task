import React from "react";
import ChatArea from "./chatArea/chatArea";
import Clan from "./Clan/clan";
import Friends from "./friends/friends";

export default function ChatBody(props) {
    switch (props.state.tab) {
        case "chat":
            return (
             <ChatArea state = {props.state} setState = {props.setState} messages = {props.state.message}/>
            );
        case "friends":
            return (
                <Friends state = {props.state} setState = {props.setState}/>
            );
        case "clan":
            return (
               <ChatArea state = {props.state} setState = {props.setState} messages = {props.state.clanMessage} />
            );
        default:
            return (
                <ChatArea state = {props.state} setState = {props.setState} messages = {props.state.message}/>
            )
    }

}