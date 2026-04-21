import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageContent.css';

export default function HTMLPage() {
  return (
    <div className="content">
      <h1>HTML</h1>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li>Semantic elements for page structure</li>
        <li>Forms for user input</li>
        <li>Media embedding (images, videos, audio)</li>
        <li>Accessibility features</li>
        <li>SEO-friendly markup</li>
      </ul>
      
      <h2>Common Elements:</h2>
      <p>Div, section, article, header, footer, nav, main, form, input, button, and more.</p>
      
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}
