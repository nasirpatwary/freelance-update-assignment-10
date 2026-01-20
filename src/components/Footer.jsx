import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { PiCity } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import Container from "../shared/Container";
import { Link } from "react-router";
import logo from "../assets/icons8-redux-48-removebg-preview.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#121212] lg:from-[#212121] from-30% via-[#121212] via-30% to-[#121212] to-90%">
      <Container className="py-8">
        <div className="grid md:grid-cols-7 lg:grid-cols-9 space-y-8 md:space-y-0">
          <aside className="lg:col-span-3 md:col-span-3 space-y-4">
            <Link to="/" className="text-2xl text-white flex items-center gap-2">
              <img src={logo} alt="logo" /> Financial
            </Link>
            <p className="text-gray-400 max-w-[44ch] mt-4">
              © {new Date().getFullYear()} YourCompany Secure Financial
              Solutions Investing involves risk. Terms & Privacy apply.
            </p>
            <div className="text-gray-400 space-y-3">
              <p className="flex items-center gap-2">
                <FiPhoneCall />
                +0195481254
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineMail />
                support@example.com
              </p>
              <p className="flex items-center gap-2">
                <PiCity />
                123 Street, City, Country
              </p>
            </div>
          </aside>

          <nav className="space-y-3 lg:col-span-2 col-span-2">
            <h6 className="text-white/80 font-bold text-2xl">Quick Links</h6>
            <ul className="text-gray-400 flex flex-col space-y-3">
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Home
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Blog
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                About Us
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Services
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Pricing
              </a>
            </ul>
          </nav>
          <nav className="space-y-3 lg:col-span-2 col-span-2">
            <h6 className="text-white/80 font-bold text-2xl">Services</h6>
            <ul className="text-gray-400 flex flex-col space-y-3">
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Personal Finance Management
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Savings & Investments
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Loans & Credit
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Tax & Accounting
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Insurance Consultation
              </a>
            </ul>
          </nav>
          <nav className="space-y-3 lg:col-span-2 md:col-span-3 md:mt-4 lg:mt-0">
            <h6 className="text-white/80 font-bold text-2xl">Follow Us</h6>
            <p className="text-gray-400">
              Information provided on this website is for educational purposes
              only and should not be considered financial advice.
            </p>
            <div className="flex gap-2 mt-6">
              <p className="flex hover:bg-[#8659c0] hover:border-[#8659c0] delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full shadow-bg-primary size-8">
                <FaFacebookF />
              </p>
              <p className="flex hover:bg-[#8659c0] hover:border-[#8659c0] delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full shadow-bg-primary size-8">
                <FaTwitter />
              </p>
              <p className="flex hover:bg-[#8659c0] hover:border-[#8659c0] delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full shadow-bg-primary size-8">
                <FaLinkedinIn />
              </p>
              <p className="flex hover:bg-[#8659c0] hover:border-[#8659c0] delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full shadow-bg-primary size-8">
                <FaInstagram />
              </p>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer