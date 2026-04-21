import React from 'react';
import '../styles/PageContent.css';

export default function NodePage() {
  return (
    <div className="content">
       <iframe
      src="./pages/node.html"
      title="Node Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
