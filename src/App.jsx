import React from 'react'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Settings from './pages/Settings'
import Community from './pages/Community'
import './style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Sportsee">
				<Header />
				<Sidebar />
        <main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/user/:userId" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/community" element={<Community />} />
          			<Route path="*" element={<Error />} />
				</Routes>
        </main>
			</BrowserRouter>
    </div>
  )
}

export default App