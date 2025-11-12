import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        id="contact"
        className="container py-12 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} RedMonkey — Built with ❤️</p>
      </footer>
    </div>
  );
};

export default Footer;
