import React from "react";
import { connect } from "react-redux";
import { newSmurf } from "../actions/index";

class AddForm extends React.Component {
  state = {
    name: "",
    position: "",
    nickname: "",
    description: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.position]: e.target.value,
      [e.target.nickname]: e.target.value,
      [e.target.description]: e.target.value,
    });
  };
  addSmurf = (e) => {
    // e.preventDefault();
    newSmurf(
      this.state.name,
      this.state.position,
      this.state.nickname,
      this.state.description
    );
    this.setState({
      name: "",
      position: "",
      nickname: "",
      description: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newSmurf();
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.name}
            />
            <label htmlFor="position">Position: </label>
            <br />
            <input
              id="position"
              type="text"
              name="position"
              placeholder="enter position"
              onChange={this.handleChange}
              value={this.state.position}
            />
            <label htmlFor="nickname">Nickname: </label>
            <br />
            <input
              id="nickname"
              type="text"
              name="nickname"
              placeholder="enter nickname"
              onChange={this.handleChange}
              value={this.state.nickname}
            />
            <label htmlFor="description">Description: </label>
            <br />
            <input
              id="description"
              type="text"
              name="description"
              placeholder="enter description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error:{" "}
          </div>
          <button onClick={this.handleSubmit}>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.Reducer,
  position: state.Reducer,
  nickname: state.Reducer,
  description: state.Reducer,
});

export default connect(mapStateToProps, { newSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
