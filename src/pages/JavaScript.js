import React from 'react';
import '../styles/PageContent.css';

export default function JavaScriptPage() {
  return (
    <div className="content">
      
      <iframe
      src="./pages/javascript.html"
      title="JS Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}

