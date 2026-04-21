import React from 'react';
import '../styles/PageContent.css';

export default function MongoDBPage() {
  return (
    <div className="content">
       <iframe
      src="./pages/mongodb.html"
      title="MongoDB Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
