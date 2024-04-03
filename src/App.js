import React from 'react'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Home from './components/Home'
import Hoc from './components/Hoc'
import ChildHoc from './components/ChildHoc'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainCounter from './components/MainCounter'
import CountChild from './components/CountChild'
const HocMainCounter = MainCounter(CountChild)
const App = () => {


  return (
    <>
    <Provider store={store}>
      
    <Router>
    <Navbar />
    <HocMainCounter />
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/hoc' element = {<MainCounter />} />

      </Routes>
    </Router>
    </Provider>
    
  
    </>
  )
}

export default App