import React from 'react';
import '../styles/PageContent.css';

export default function PythonPage() {
  return (
    <div className="content">
       <iframe
      src="./pages/python.html"
      title="Python Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
