import { useState } from "react";
import React from "react";
import "../home/bg.css";
import sweetalert from "sweetalert";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";


class NotesApp extends React.Component {

//     const [Name, setName]=useState("");
 

//   const addNewUser = async () => {
//         const newuser = {
//           rid: Name,
          
//         };
    
//         let url = "http://localhost:8000/donors/registerUser";
//         await axios.post(url, newuser);
//         sweetalert("success", "You have register successfully...", "success");
//         window.location.href = "/login";
//       };


    constructor(props) {
      super(props)
  
      // binding
      this.onAdd = this.onAdd.bind(this)
      this.onRemove = this.onRemove.bind(this)
  
      // state
      this.state = {
        notes: [],
      }
    }
  
    onAdd(note) {
      this.setState((prevState) => {
        const notes = prevState.notes
        notes.push({
          id: prevState.notes.length + 1,
          title: note,
        })
        return {
          // notes: [
          //   ...prevState.notes,
          //   {
          //     id: prevState.notes.length + 1,
          //     title: note,
          //   },
          // ],
  
          notes: notes,
        }
      })
    }
  
    onRemove(noteToRemove) {
      this.setState((prevState) => {
        return {
          notes: prevState.notes.filter((note) => note.id != noteToRemove.id),
        }
      })
    }
  
    render() {
      return (
        <div>
          <Header title={this.props.title} subtitle={this.props.subtitle} />
          <AddNote onAdd={this.onAdd} />
          {this.state.notes.length > 0 && (
            <NotesList notes={this.state.notes} onRemove={this.onRemove} />
          )}
        </div>
      )
    }
  }
  
  // NotesApp default props
  NotesApp.defaultProps = {
    title: 'Add FOOD',
    subtitle: 'what do you want to donat today?',
  }
  
  const Header = (props) => {
    return (
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    )
  }
  
  // Header default props
  Header.defaultProps = {
    title: '',
    subtitle: '',
  }
  
  class AddNote extends React.Component {
    constructor(props) {
      super(props)
  
      // binding
      this.onAdd = this.onAdd.bind(this)
  
      // state
      this.state = {
        isError: false,
      }
    }
  
    onAdd(e) {
      const note = e.target.elements.note.value
      e.preventDefault()
  
      if (note.length > 0) {
        // will call onAdd method of NotesApp class
        this.props.onAdd(note)
      }
  
      e.target.elements.note.value = ''
      this.setState({
        isError: note.length == 0,
      })
    }
  
    render() {
      return (
        <div className="add-note">
          <form onSubmit={this.onAdd}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="note"
                className="form-control"
                
                placeholder="Food title"></input>
                <div>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                
                id="button-addon2">
                Add
              </button>
              </div>

{/* <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block " type="button" style={{backgroundColor: "#002746"}} >Add </button>
                    </div> */}
            </div>
            {this.state.isError && (
              <div className="text-danger">Title can not be empty</div>
            )}
          </form>
        </div>
      )
    }
  }
  
  class NotesList extends React.Component {
    constructor(props) {
      super(props)
  
      // binding
      this.onRemove = this.onRemove.bind(this)
    }
  
    onRemove(note) {
      console.log('removing: ', note.title)
      this.props.onRemove(note)
    }
  
    render() {
      return (
        <div className="notes-list">
          {this.props.notes.map((note) => {
            return (
              <div className="input-group mb-3">
                <div className="form-control  " bagckground-color="white" >{note.title}</div>
                <span 
                  onClick={() => {
                    this.onRemove(note)
                  }}
                  className="input-group-text text-danger button-delete" >
                  Delete
                </span>
              </div>
            )
          })}
        </div>
      )
    }
  }

  export default NotesApp;