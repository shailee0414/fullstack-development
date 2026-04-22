import React from 'react';
import '../styles/PageContent.css';

export default function HTMLPage() {
  return (
    <div className="content">
       <iframe
      src="./pages/html.html"
      title="HTML Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
