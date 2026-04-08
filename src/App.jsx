import './index.css'
import LeftSidebar from './components/LeftSidebar'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact' // <-- Import the new component

function App() {
  return (
    <div className="app-container">
      
      <aside className="sidebar-container">
        <LeftSidebar />
      </aside>

      <main className="content-container">
        <About />
        <Projects />
        <Education />
        <Contact /> {/* <-- Add it right here */}
      </main>

    </div>
  )
}

export default App