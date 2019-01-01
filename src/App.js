import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import EmojiList from "./EmojiList";
import filterEmoji from "./filterEmoji";
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("",40)
    };
    this.handleSearchChange=this.handleSearchChange.bind(this);
  }

  handleSearchChange(key){
    this.setState({
      filteredEmoji: filterEmoji(key,20)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Search handleSearch={this.handleSearchChange} />
        <EmojiList list={this.state.filteredEmoji}/>
      </div>
    );
  }
}

export default App;
