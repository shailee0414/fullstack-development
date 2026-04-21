import React from 'react';
import '../styles/PageContent.css';

export default function ReactNativePage() {
  return (
    <div className="content">
        <iframe
      src="./pages/react-native.html"
      title="React Native Guide"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
    </div>
  );
}
