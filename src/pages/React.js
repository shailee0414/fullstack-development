import React from 'react';
import '../styles/PageContent.css';

export default function ReactPage() {
  return (
    <div className="content">
       <iframe
      src="./pages/react.html"
      title="React Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
