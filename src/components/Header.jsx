import { NavLink } from "react-router-dom";
import Logo from "../assets/StarwarsLogo.png";

const Header = () => {
  return (
    <div className="container-header">
      <header>
        <nav>
          <NavLink to={"/"}>
            <img src={Logo} />
          </NavLink>
          <p>Starships</p>
        </nav>
      </header>
    </div>
  );
};
export default Header;
