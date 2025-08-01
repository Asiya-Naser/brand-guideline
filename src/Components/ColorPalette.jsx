// src/components/ColorPalette.jsx

function ColorBox({ color, name }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          borderRadius: "12px",
          margin: "0 auto",
        }}
      ></div>
      <p>
        {name} — {color}
      </p>
    </div>
  );
}

function ColorPalette() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ marginBottom: "1.5rem", color: "#2A2552" }}>
        Brand Color Palette
      </h1>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <ColorBox color="#F4A72C" name="Primary Orange" />
        <ColorBox color="#2A2552" name="Navy Blue" />
        <ColorBox color="#FFFFFF" name="White" />
        <ColorBox color="#000000" name="Black" />
      </div>
    </div>
  );
}

export default ColorPalette;
