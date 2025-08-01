import React from "react";

const LogoVersion = () => {
  return (
    <div
      className="logo-version"
      style={{
        textAlign: "center",
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Logo Versions</h2>
      <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
        Different versions of the logo for print, digital, and social media
        platforms.
      </p>
      <img
        src="/assets/logo versions.png"
        alt="Logo Versions"
        style={{
          maxWidth: "100%",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default LogoVersion;
