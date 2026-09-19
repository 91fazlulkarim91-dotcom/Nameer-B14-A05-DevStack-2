
import footerImage from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src={footerImage} alt="" />
        <p>
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <p className="flex">GitHub Twitter LinkedIn</p>
      </aside>
      <nav>
        <h6 className="footer-title">PRODUCT</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Technologies</a>
        <a className="link link-hover">Projects</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About </a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
