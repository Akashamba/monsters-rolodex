import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardListComponent';
import { SearchBox } from './components/SearchBox/SearchBoxComponent';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };

        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const searchResults = monsters.filter((monster) => (
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )) 
        
        return(
            <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox 
                placeholder="search monsters" 
                handleChange={this.handleChange} />
            <CardList monsters={searchResults} />
            </div>
        );
    }
}

export default App;


