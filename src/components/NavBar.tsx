import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white fixed top-0 w-full z-10">
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/">
            <Image src="/logo.jpg" alt="BHI Logo" width={200} height={100} />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-50 hover:text-green-500 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-gray-50 hover:text-green-500 hover:underline">
            About
          </Link>
          <Link href="/images" className="text-gray-50 hover:text-green-500 hover:underline">
            Images
          </Link>
          <Link href="/contact" className="text-gray-50 hover:text-green-500 hover:underline">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-50 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-primary">
          <ul className="flex flex-col items-center space-y-4 p-6">
            <li>
              <Link href="/" className="text-gray-50 hover:text-green-500 hover:underline" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-50 hover:text-green-500 hover:underline" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/images" className="text-gray-50 hover:text-green-500 hover:underline" onClick={toggleMenu}>
                Images
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-50 hover:text-green-500 hover:underline" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
