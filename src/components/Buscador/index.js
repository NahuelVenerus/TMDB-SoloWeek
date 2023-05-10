export default function Buscador({ search, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ marginRight: "1%", margin: "1%", marginTop: "2%" }}>
        Buscador:
      </label>
      <input
        className="input"
        type="text"
        placeholder="Buscar por título"
        {...search}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
