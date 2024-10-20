import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
      })
      setTimeout(() => {
        setAlert(null);
        }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
    else {
      setDarkMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container" my-3>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path="/"
          element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/> } />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
