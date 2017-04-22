import React, { Component } from 'react';
import './App.css';
import ContactTile from './ContactTile.js';
import SearchBar from './SearchBar.js';
import Router from './Router.js';
class App extends Component {
  render() {

      const something = [{id: 0, name: "name", number:"123456789"}, {id: 1, name:"name2", number:"987654321"}, {id: 2, name:"name3", number:"00000"}];

    return (
      

      <div className="App">
      <SearchBar/> 
        <div className="App-header">
    
        
        </div>
         {something.map (contact =>
              <ContactTile key={contact.id}
                            contact={contact} />)}
      </div>
    );
  }
}

export default App;