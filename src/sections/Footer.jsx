import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="footer-title">Product</span>
            <a className="link link-hover">Overview</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Customer stories</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Term of use</a>
            <a className="link link-hover">Use of Cookies</a>
          </div>
          <div>
            <span className="footer-title">Imagine more</span>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Startups</a>
            <a className="link link-hover">Exhibition</a>
            <a className="link link-hover">Personal use</a>
          </div>
          <div>
            <span className="footer-title">Resources</span>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Guides & Tutorials</a>
            <a className="link link-hover">Templates spaces</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">What&apos;s new</a>
            <a className="link link-hover">API docs</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Career</a>
            <a className="link link-hover">Contact Sales</a>
            <a className="link link-hover">Contact support</a>
            <a className="link link-hover">Email us</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t text-base-content border-gray-600">
          <div className="items-center grid-flow-col">
            <img src="/bubstal_logo.svg" alt="" className="h-10 w-10" />
            <p>
              Bubstal. <br />
              Copyright @ {currYear} Bubstall Ltd. ALl rights reserved
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="#">
                <BsLinkedin className="w-8 h-8" />
              </a>
              <a href="#">
                <BsInstagram className="w-8 h-8" />
              </a>
              <a href="http://">
                <BsFacebook className="w-8 h-8" />
              </a>
              <a href="http://">
                <BsTwitter className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
