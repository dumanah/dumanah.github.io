import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="title">Ahmet Hakan Duman</h1>
          <Navigation />
          <button className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon">{isDarkTheme ? '☀️' : '🌙'}</span>
          </button>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;