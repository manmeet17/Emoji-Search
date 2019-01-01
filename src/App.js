import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import EmojiList from "./EmojiList";
import emojis from './emojiList.json';
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <EmojiList list={emojis} />
      </div>
    );
  }
}

export default App;
