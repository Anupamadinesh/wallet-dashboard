// NOTE: Navigation and search are UI-only as per assignment scope
function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-avatar">A</div>
        <span>Alicia Koch</span>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Customers</a>
        <a href="#">Settings</a>
      </nav>

      <input className="search-box" type="text" placeholder="Search" />
    </header>
  );
}

export default Navbar;