import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar nav mx-auto gap-3 info">
        <li className="nav-item nav-link">
          <Link className="nav-link active" href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" href="/showBooks">
            <a>Show Books</a>
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link className="nav-link" href="/addBook">
            <a>Add Book</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
