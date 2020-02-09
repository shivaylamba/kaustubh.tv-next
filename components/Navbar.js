import Link from "../components/Link";
import styled from "styled-components";

const Navbar = ({ className }) => (
  <nav className={className}>
    <ul className="nav-list">
      <Link activeClassName="nav-active" href="/">
        <li className="nav-item">
          <a>Home</a>
        </li>
      </Link>
      <Link activeClassName="nav-active" href="">
        <li className="nav-item">
          <a>Publication</a>
        </li>
      </Link>
      <Link activeClassName="nav-active" href="">
        <li className="nav-item">
          <a>CV</a>
        </li>
      </Link>
      <Link activeClassName="nav-active" href="/about">
        <li className="nav-item">
          <a>Contact</a>
        </li>
      </Link>
    </ul>
    <h2 className="title">Kaustubh</h2>
  </nav>
);

export default styled(Navbar)`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  font-family: 'Montserrat', sans-serif;
  .nav-list {
    flex: 0 0 30%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .title {
    flex: 1;
    margin: 0;
    padding: 0;
    text-align: right;
  }
  .nav-item {
    padding: 10px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    color: #8a8a8a;
  }
  .nav-item: hover,
  .nav-active {
    border-bottom: 1px solid #333;
    color: #222;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-transform: uppercase;
  }
`;
