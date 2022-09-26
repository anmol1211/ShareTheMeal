import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/homeScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import AddCust from './screens/AddCust'
import AboutScreen from './screens/AboutScreen'
import CustScreen from './screens/CustScreen'
import Navigation from './components/Navigation'
import PanelScreen from './screens/panelScreen'

function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <div className="container" >
          <Routes>
            <Route path="/" element={<SigninScreen/>} />
            <Route path="/signup" element={<SignupScreen/>} />
            <Route path="/home" element={<HomeScreen/>} />
            <Route path="/panel" element={<PanelScreen/>} />
            <Route path="/Cust" element={<CustScreen/>} />
            <Route path="/add-note" element={<AddNoteScreen/>} />
            <Route path="/add-Cust" element={<AddCust/>} />
            <Route path="/about" element={<AboutScreen/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
// component
// path="/"