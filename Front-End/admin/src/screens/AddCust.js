import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { addNote } from '../actions/notesActions'

const AddNoteScreen = (props) => {

  // id      
// name    
// email   
// password
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const history = useNavigate()

  const addNotesStore = useSelector((store) => store.addNotes)
  const { loading, response, error } = addNotesStore

  useEffect(() => {
    if (response && response.status == 'success') {
      history('/Cust')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addNote(id, name,email,password))
  }

  const onCancel = () => {
    history('/Cust')
  }

  return (
    <div>
      <Header title="Add Customer" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            onChange={(e) => {
              setId(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Pawssword</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            ></input>
        </div>
        <div className="mb-3">
          <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNoteScreen
