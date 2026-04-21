import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageContent.css';

export default function CSSPage() {
  return (
    <div className="content">
      <h1>CSS</h1>
      <p>CSS (Cascading Style Sheets) is used to style and layout web pages.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li>Selectors and specificity</li>
        <li>Flexbox and Grid layouts</li>
        <li>Responsive design and media queries</li>
        <li>CSS animations and transitions</li>
        <li>CSS preprocessing (SASS, LESS)</li>
      </ul>
      
      <h2>Modern Techniques:</h2>
      <p>CSS Variables, CSS Grid, Flexbox, and CSS-in-JS for modern web styling.</p>
      
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}
