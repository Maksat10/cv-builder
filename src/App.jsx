import './App.css'
import GeneralInfo from './components/General-Info'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
    <div className="app-container">
      <div className="top-row">
        <GeneralInfo />
        <Education />
      </div>
      <Experience />
    </div>
  )
}

export default App
