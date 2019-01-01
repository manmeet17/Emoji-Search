import React,{ Component } from 'react';

class EmojiRow extends Component{
    
    render(){
        const codePointHex = this.props.sym.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div className="emoji-res-row" >
                <img alt={this.props.title} src={src} />
                <span className="title">{this.props.title}</span>
            </div>
        );
    }
}

export default EmojiRow;