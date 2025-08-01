import { Link } from "react-router-dom";
import logo from "../../public/assets/logo2.png"; // make sure the path is correct
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img src={logo} alt="Brand Logo" className="home-logo" />
        <h1>Brand Guideline for Elegance Consult plc</h1>
        <p>Explore our branding assets and designs.</p>
        <Link to="/brandwork" className="home-btn">
          View Brand Work
        </Link>
      </div>
    </section>
  );
};

export default Home;
