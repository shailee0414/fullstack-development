import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ReactPage from './pages/React';
import ReactNativePage from './pages/ReactNative';
import HTMLPage from './pages/HTML';
import CSSPage from './pages/CSS';
import ReduxPage from './pages/Redux';
import JavaScriptPage from './pages/JavaScript';
import NodePage from './pages/Node';
import MongoDBPage from './pages/MongoDB';
import PythonPage from './pages/Python';
import './App.css';

function HomePage() {
  return (
    <div className="page-content">
      <h1>Welcome to Full Stack Developer</h1>
      <p>Select a topic from the left menu to get started.</p>
      <h2>Available Topics:</h2>
      <ul>
        <li>React - A JavaScript library for building user interfaces</li>
        <li>React Native - Build native mobile apps with React</li>
        <li>HTML - The standard markup language for web pages</li>
        <li>CSS - Style and layout your web pages</li>
        <li>Redux - Predictable state management</li>
        <li>JavaScript - The versatile programming language</li>
        <li>Node.js - Server-side JavaScript runtime</li>
        <li>MongoDB - NoSQL document database</li>
        <li>Python - High-level programming language</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/react" element={<ReactPage />} />
              <Route path="/react-native" element={<ReactNativePage />} />
              <Route path="/html" element={<HTMLPage />} />
              <Route path="/css" element={<CSSPage />} />
              <Route path="/redux" element={<ReduxPage />} />
              <Route path="/javascript" element={<JavaScriptPage />} />
              <Route path="/node" element={<NodePage />} />
              <Route path="/mongodb" element={<MongoDBPage />} />
              <Route path="/python" element={<PythonPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
