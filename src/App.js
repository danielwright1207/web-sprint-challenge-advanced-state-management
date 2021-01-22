import React, { Component } from "react";
/// change here/////
import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
import axios from "axios";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getSmurfs } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    // axios.get("http://localhost:3333/smurfs").then((res) => {
    //   console.log(res, "from the app");
    // });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
