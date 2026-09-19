import Logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="" />
        <ul className="flex gap-4 items-center text-black">
          <li>Home</li>
          <li>Technologies </li>
          <li>Projects </li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign In</li>
          <button className="btn btn-error">Sign Up</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
