function Header({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#3498db",
        color: "white",
        padding: "20px",
        textAlign: "center",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <header>
        <h2>{title}</h2>
      </header>
    </div>
  );
}

export default Header;
