import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
        <li>
          <Link to="/red">Red</Link>
        </li>
      </ul>
      <ul>
        {" "}
        <li>
          <Link to="/orange">Orange</Link>
        </li>
        <li>
          <Link to="/green">Green</Link>
        </li>
        <li>
          <Link to="/pink">Pink</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
