// src/components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-500 text-white h-full fixed top-20 md:flex flex-col hidden">
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/images" className="hover:text-green-500">
              Images
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
