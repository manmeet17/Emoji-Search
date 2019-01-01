import React, { Component } from "react";
import EmojiRow from "./EmojiRow";

export default class EmojiList extends Component{
    render(){

        return (
        <div className="emoji-list">
            {this.props.list.map((item) =>(
                <EmojiRow 
                sym={item.symbol}
                title={item.title}
                key={item.title}
                />
            ))}
        </div>
    );
    }
}
