import logo from '/logo.png';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#D3D3D3] text-base-content">
      <aside>
        <img className="w-20 h-20" src={logo} alt="" />
        <p>
          <span className="text-3xl font-bold">Toys House Ltd.</span>
          <br />
          Providing reliable Toys since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
