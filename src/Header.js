import React, { Component } from "react";

class Header extends Component{
    render(){
        return (
            <header className="title center-align">
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt="" />
                <h3> Emoji Search </h3>
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt="" />
            </header>
        );
    }
}

export default Header;