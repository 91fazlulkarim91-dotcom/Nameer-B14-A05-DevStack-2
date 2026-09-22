
import footerImage from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer mx-auto max-w-6xl grid-cols-1 gap-8 px-4 py-10 text-xs sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      <aside className="max-w-sm">
        <img src={footerImage} alt="DevStack" className="w-24" />
        <p className="mt-3 max-w-56 text-[10px] leading-5 text-slate-500">
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <p className="flex flex-wrap gap-x-3">GitHub Twitter LinkedIn</p>
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
      </div>
    </footer>
  );
};

export default Footer;
