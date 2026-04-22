import React from 'react';
import '../styles/PageContent.css';

export default function CSSPage() {
  return (
    <div className="content">
       <iframe
      src="./pages/css.html"
      title="CSS/SCSS Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}


