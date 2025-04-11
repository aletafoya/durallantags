function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="src\assets\logo.webp"
            alt="Logo de Dura Llantags"
            width="40"
          />
          Dura Llantags
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
