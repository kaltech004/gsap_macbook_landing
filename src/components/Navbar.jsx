import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Apple logo */}
        <img src="/logo.svg" alt="apple-logo" />

        {/* labels */}
        <ul>
          {navLinks.map(({ label }) => (
            <li>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
