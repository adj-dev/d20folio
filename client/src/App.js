import React, { Component } from "react";
// import logo from "./d20-folio-logo-1.png";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import MyCharacters from './pages/MyCharacters';
import AllCharacters from './pages/AllCharacters';
import EditCharacters from './pages/EditCharacter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" component={AllCharacters} />
          <Route exact path="/mychars" component={MyCharacters} />
          <Route exact path="/new" component={() => <EditCharacters new={true} />} />
          <Route exact path="/edit/:id" component={({ match }) => <EditCharacters match={match} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
