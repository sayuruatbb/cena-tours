import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaSnapchatGhost,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/footer-img.jpg')" }}
    >
      <div className="bg-gray-800 bg-opacity-75 py-8 m-0">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <h3
              className="text-lg font-bold mb-4 underline"
              style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.8)" }}
            >
              Luxury Vacation Planner
            </h3>
            <p className="text-sm mb-4">
              Discover the world with us. We offer the best guides, tours, and
              travel tips for unforgettable experiences.
            </p>
            <button
              className="border rounded-md p-2 hover:bg-white hover:text-gray-800 transition duration-300"
              style={{ textShadow: "6px 6px 8px rgba(0,0,0,0.8)" }}
            >
              Start Planning
            </button>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <h3
              className="text-lg font-bold mb-4 underline"
              style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.8)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/tours" className="text-sm hover:underline">
                  Tours
                </a>
              </li>
              <li>
                <a href="/destinations" className="text-sm hover:underline">
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <h3
              className="text-lg font-bold mb-4 underline"
              style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.8)" }}
            >
              Contact Us
            </h3>
            <p className="text-sm">
              123 Travel Lane
              <br />
              Colombo, Sri Lanka
              <br />
              Phone: (+94) 456-7890
              <br />
              Email: info@tourismwebsite.com
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <h3
              className="text-lg font-bold mb-4 underline"
              style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.8)" }}
            >
              Stay Connected
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl hover:text-gray-400 border-2 border-transparent rounded-md hover:border-gray-400 hover:-translate-y-2 transform transition-transform duration-300 p-0.5"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-2xl hover:text-gray-400 border-2 border-transparent rounded-md hover:border-gray-400 hover:-translate-y-2 transform transition-transform duration-300 p-0.5"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-2xl hover:text-gray-400 border-2 border-transparent rounded-md hover:border-gray-400 hover:-translate-y-2 transform transition-transform duration-300 p-0.5"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                aria-label="Snapchat"
                className="text-2xl hover:text-gray-400 border-2 border-transparent rounded-md hover:border-gray-400 hover:-translate-y-2 transform transition-transform duration-300 p-0.5"
              >
                <FaSnapchatGhost />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-sm"
            style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.8)" }}
          >
            © 2024 BadByte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
