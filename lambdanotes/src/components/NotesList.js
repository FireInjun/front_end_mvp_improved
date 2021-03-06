import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

const mapStateToProps = state => {
  return { notesArray: state };
};

class NotesList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    let reversed = Array.from(this.props.notesArray).reverse();
    this.setState({ notesArray: reversed });
  }

  generateNotes = (what, where) => {
    return (
      <div className="note">
        <div>
          <h4> {what.title} </h4> <hr /> <p> {what.body} </p>{" "}
        </div>
        <Link to={`/note/${what._id}`} className="button_link" key={what._id}>
          {" "}
          <div className="view_button"> View </div>
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div className="notesList_container">
        <div>
          <h3 className="content_header"> Your Notes: </h3>{" "}
        </div>
        <div className="notesList">
          {" "}
          {this.state.notesArray.map(this.generateNotes)}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    /* ActionsHere */
  }
)(NotesList);
