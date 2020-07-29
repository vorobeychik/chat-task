import React from "react";
import Friend from "./friend";

export default function Friends(props) {
    return (
        <div>
            <div>
                {props.state.friends.map((e, i) => <Friend key = {i} index = {i} state = {props.state} setState = {props.setState} friendInfo = {e}/>)}
            </div>
        </div>
    )
}