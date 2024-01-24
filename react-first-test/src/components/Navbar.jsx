import "./Navbar.css";
import Link from "./Link";

function Navbar() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link>Homepage</Link>
          </li>
          <li>
            <Link>Administrator</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Social Media</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
