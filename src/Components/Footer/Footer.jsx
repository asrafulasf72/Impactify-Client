import { Link } from "lucide-react";
import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">Impactify</h2>
          <p className="text-gray-400">
            Impactify connects communities for social good. Join hands with us to
            create cleaner, greener, and stronger neighborhoods.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-green-500 transition">Features</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-green-500 transition">Gallery</a>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-green-500 transition">Newsletter</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <p className="mb-4 text-gray-400">123 Green Street, Dhaka, Bangladesh</p>
          <p className="mb-4 text-gray-400">Email: info@impactify.com</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-500 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaXTwitter size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Impactify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
