import { Link } from "react-router-dom";
import styled from "styled-components";
export function Navbar() {
  const Nav = styled.div`
    width: 100vw;
    padding: 10px;
    background-color: #333;
    & > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      & > li {
        margin: 5px;
        & > a {
          text-decoration: none;
          color: #fff;
        }
        & > a:hover {
          color: coral;
        }
      }
    }
  `;
  const navs = [
    {
      to: "/",
      title: "Home"
    },
    {
      to: "/services",
      title: "Services"
    },
    {
      to: "/about-us",
      title: "About"
    },
    {
      to: "/contact",
      title: "Contact"
    },
    {
      to: "/products",
      title: "Products"
    },
    {
      to: "/checkout",
      title: "checkout"
    },
    {
      to: "/login",
      title: "Login"
    }
  ];
  return (
    <Nav>
      <ul>
        {navs.map((ele, index) => (
          <li key={index}>
            <Link to={ele.to}>{ele.title}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
