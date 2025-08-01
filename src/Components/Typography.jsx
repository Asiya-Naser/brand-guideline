// src/components/Typography.jsx

function Typography() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "#2A2552",
        }}
      >
        Heading 1 – Poppins Bold
      </h1>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          fontFamily: "Montserrat, sans-serif",
          color: "#F4A72C",
        }}
      >
        Heading 2 – Montserrat Semi-Bold
      </h2>
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "500",
          fontFamily: "Poppins, sans-serif",
          color: "#2A2552",
        }}
      >
        Heading 3 – Poppins Medium
      </h3>
      <p
        style={{
          fontSize: "1.1rem",
          fontFamily: "Montserrat, sans-serif",
          color: "#000",
        }}
      >
        Body Text – Montserrat Regular: Elegance Consult delivers innovative
        business, real estate, and digital solutions. The tone is confident,
        clear, and professional.
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontFamily: "Poppins, sans-serif",
          color: "#555",
        }}
      >
        Secondary Body Text – Poppins Regular: Our mission is to combine
        functionality with visual excellence.
      </p>
    </div>
  );
}

export default Typography;
