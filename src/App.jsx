import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App