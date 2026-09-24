import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          🚀
          <span>NASA Explorer</span>
        </Link>

        {/* MENU */}
        <nav className="navbar-menu">
          <Link href="/" className="navbar-link">
            Inicio
          </Link>

          <Link href="/explorar" className="navbar-link">
            Explorar
          </Link>

          <Link href="/acerca" className="navbar-link">
            Acerca de
          </Link>
        </nav>

      </div>
    </header>
  );
}