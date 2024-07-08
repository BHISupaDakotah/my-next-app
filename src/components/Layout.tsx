// src/components/Layout.tsx
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
