import React, { Component } from "react";

class Search extends Component{
    
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);

        this.state={
            searchText: ''
        };
    }

    handleChange(e){
        this.setState({
            searchText: e.target.value
        });
        console.log(this.state);
    }

    render(){
        return(
            <div className="row">
            <div className="input-field col s12">
            <input
                placeholder="Enter search term"
                onChange={this.handleChange}
                value={this.state.searchText}
                className="search"
            />
            </div>
            </div>
        );
    }
}

export default Search;