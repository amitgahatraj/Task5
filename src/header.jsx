function Header({ title }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <header>
        <h2>{title}</h2>
      </header>
    </div>
  );
}

export default Header;
