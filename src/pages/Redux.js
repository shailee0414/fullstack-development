import React from 'react';
import '../styles/PageContent.css';

export default function ReduxPage() {
  return (
    <div className="content">
        <iframe
      src="./pages/redux.html"
      title="Redux Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
