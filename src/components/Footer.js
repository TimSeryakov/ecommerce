import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center p-6 border-solid border-t border-gray-300 md:flex-row md:justify-between">
      <div className=" flex flex-col items-center md:flex-row">
        <span className="text-gray-700 text-sm text-center">© 2020 Gustavo Monjardim.</span>
        <span className="text-gray-700 text-sm md:ml-2">All rights reserved.</span>
      </div>
      <div className="flex flex-col items-center justify-center order-first mb-2 md:flex-row md:order-none md:mb-0">
        <a href="/admin" target="_blank" className="cursor-pointer text-gray-700 mx-4 my-1 md:my-0">
          Admin
        </a>
        <a
          href="https://github.com/gustavomonjardim/ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-gray-700 mx-4 my-1 md:my-0"
        >
          Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
