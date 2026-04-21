import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageContent.css';

export default function PythonPage() {
  return (
    <div className="content">
      <h1>Python</h1>
      <p>Python is a high-level, versatile programming language known for readability and simplicity.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li>Simple and readable syntax</li>
        <li>Strong community and extensive libraries</li>
        <li>Data science and machine learning capabilities</li>
        <li>Web frameworks (Django, Flask)</li>
        <li>Automation and scripting</li>
      </ul>
      
      <h2>Applications:</h2>
      <p>Web development, data analysis, AI/ML, automation, scientific computing, and more.</p>
      
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}
