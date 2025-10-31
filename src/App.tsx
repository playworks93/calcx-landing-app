import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculationInputComponent from './components/CalculationInputComponent'
import CollaborationComponent from './components/CollaborationComponent'
import TemplateManagerComponent from './components/TemplateManagerComponent'
import DashboardComponent from './components/DashboardComponent'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcX</h1>
          <p className="tagline">Advanced Calculator for Modern Users</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication & Onboarding</li>
          <li>Real-time Collaboration on Calculations</li>
          <li>Advanced Mathematical Functions</li>
          <li>Customizable Calculation Templates</li>
          <li>Data Export Options (CSV, PDF)</li>
          <li>User Analytics Dashboard</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcX. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App