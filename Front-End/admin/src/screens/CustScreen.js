import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getNotes } from '../actions/notesActions'

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const notes = useSelector((store) => store.notes)
  const { error, response, loading } = notes

  console.log(response)
  const history = useNavigate()
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getNotes())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddNote = () => {
    history('/add-Cust')
  }

  return (
    <div>
      <Header title="Home" />
      <button onClick={onAddNote} className="btn btn-primary float-end">
        Add Customer
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
         
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((note) => {
              return (
                <tr>
                  <td>{note.id}</td>
                  <td>{note.name}</td>
                  <td>{note.email}</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody> */}
        <tbody>
        <tr>
                  <td>1</td>
                  <td>Shiv</td>
                  <td>contact@shiv.com</td>
                  <td><button  className="btn btn-danger">
                  X
      </button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Om</td>
                  <td>contact@Om.com</td>
                  <td><button  className="btn btn-danger">
        X
      </button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sai</td>
                  <td>contact@Sai.com</td>
                  <td><button  className="btn btn-danger">
                  X
      </button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sss</td>
                  <td>contact@Sss.com</td>
                  <td><button  className="btn btn-danger">
                  X
      </button></td>
                </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HomeScreen
